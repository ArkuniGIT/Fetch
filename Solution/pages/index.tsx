import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import type { NextPage } from 'next'
import Link from "next/link";
import React from 'react'
import Image from 'next/image'

const HomePage: NextPage = () =>
{
    return (
        <Box textAlign="center">
            <Image 
                width={500}
                height={375}
                className={"rounded"} 
                src="https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_1050.jpg" 
                alt=""
            />
            <br />
            <br />
            <Typography variant="h3" gutterBottom>
                Welcome to Fetch!
            </Typography>
            <Typography>
                Browse pictures of your favorite dog breed.
            </Typography>
            <br />
            <Link href="/breed">
                <Button id="startButton" variant="contained">
                    Show me cute doggies!
                </Button>
            </Link>
        </Box>
    )
}

export default HomePage
