import { ImageList, ImageListItem, Fab, useMediaQuery, useTheme, Typography, capitalize } from '@mui/material'
import { ArrowBack } from '@mui/icons-material';
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { useState } from 'react'
import DogCeoResponse from '../../dto/dogCeo/dogCeoReponse';
import PinModal from '../../components/pinModal/PinModal';

interface BreedDetailsProps 
{
    urls: string[];
}

const BreedDetailsPage: NextPage<BreedDetailsProps> = (props) =>
{
    const { urls } = props;
    const [url, setUrl] = useState<string>();
    const theme = useTheme();
    const upSm = useMediaQuery(theme.breakpoints.up('sm'));
    const upMd = useMediaQuery(theme.breakpoints.up('md'));
    const router = useRouter();

    const { id } = router.query;
    const cols = upMd && 3 || upSm && 2 || 1;

    const onClickImg = (url: string) => () =>
    {
        setUrl(url);
    }

    const onCloseModal = () =>
    {
        setUrl(undefined);
    }

    return (
        <>
            {url &&
                <PinModal
                    open={true}
                    url={url}
                    onClose={onCloseModal}
                />
            }
            <Typography variant="h1">
                {capitalize(id as string)}
            </Typography>
            <ImageList cols={cols} gap={16}>
                {urls.map((url, i) => (
                    <ImageListItem key={url}>
                            <img
                                id={"dog_" + i}
                                className="imgBtn"
                                src={`${url}`}
                                srcSet={`${url}`}
                                alt={""}
                                width={200}
                                height={200}
                                loading="lazy"
                                onClick={onClickImg(url)}
                            />
                    </ImageListItem>
                ))}
            </ImageList>
            <Link href="/breed">
                <Fab color="primary" sx={{ bottom: 32, left: 32, position: "fixed", zIndex: 1 }}>
                    <ArrowBack />
                </Fab>
            </Link>
        </>
    )
}

export const getServerSideProps: GetServerSideProps<BreedDetailsProps> = async (context) =>
{
    const { id } = context.query;
    const res = await fetch(`https://dog.ceo/api/breed/${id}/images`);
    const data = (await res.json()) as DogCeoResponse<string[]>;

    return {
        props: {
            urls: data.message
        },
    }
}

export default BreedDetailsPage
