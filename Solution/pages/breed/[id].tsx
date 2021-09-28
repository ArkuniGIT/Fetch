import { ImageList, ImageListItem, Fab, useMediaQuery, useTheme, Link, Typography, capitalize } from '@mui/material'
import { ArrowBack } from '@mui/icons-material';
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import DogCeoResponse from '../../dto/dogCeo/dogCeoReponse';

interface BreedDetailsProps 
{
    urls: string[];
}

const BreedDetailsPage: NextPage<BreedDetailsProps> = (props) =>
{
    const { urls } = props;

    const theme = useTheme();
    const upSm = useMediaQuery(theme.breakpoints.up('sm'));
    const upMd = useMediaQuery(theme.breakpoints.up('md'));
    const router = useRouter();
    const { id } = router.query as string;

    const cols = upMd && 3 || upSm && 2 || 1;

    return (
        <>
            <Typography variant="h1">
                {capitalize(id)}
            </Typography>
            <ImageList cols={cols} gap={16}>
                {urls.map((url) => (
                    <ImageListItem key={url}>
                        <img
                            src={`${url}`}
                            srcSet={`${url}`}
                            alt={""}
                            width={200}
                            height={200}
                            loading="lazy"
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
