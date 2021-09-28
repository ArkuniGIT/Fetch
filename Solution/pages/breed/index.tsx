import { GetStaticPaths, NextPage } from 'next'
import React, { Fragment } from 'react'
import DogCeoResponse from '../../dto/dogCeo/dogCeoReponse';
import { GetStaticProps } from 'next'
import { capitalize, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from "next/link";
import { ArrowRight, Pets } from "@mui/icons-material";
import { Box } from '@mui/system';

interface BreedPageProps
{
    breeds: BreedModel[];
}

interface BreedModel
{
    key: string;
    name: string;
}

const BreedPage: NextPage<BreedPageProps> = (props) =>
{
    return (
        <Box maxWidth={400} mx="auto">
            <List>
                {props.breeds.map((breed) => (
                    <Fragment key={breed.key}>
                        <Link href={`/breed/${breed.key}`}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Pets />
                                </ListItemIcon>
                                <ListItemText
                                primary={breed.name}
                                />
                            </ListItemButton>
                        </Link>
                    </Fragment>
                ))}
            </List>
        </Box>
    )
}

export const getStaticProps: GetStaticProps<BreedPageProps> = async (context) =>
{
    const res = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = (await res.json()) as DogCeoResponse<any>;

    const breeds = Object
        .keys(data.message)
        .map<BreedModel>(x => (
            {
                key: x,
                name: capitalize(x)
            }));

    return {
        props: {
            breeds,
        },
    }
}

export default BreedPage
