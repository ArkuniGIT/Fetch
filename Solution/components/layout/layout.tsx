import { AppBar, Badge, Container, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import { PushPin } from "@mui/icons-material";
import React, { FC, useContext, useState } from 'react'
import styles from "./Layout.module.css";
import Link from "next/link";
import Pins from '../pins/Pins';
import { PinContext } from '../../contexts/PinContext';

const Layout: FC = (props) =>
{
    const [openDrawer, setOpenDrawer] = useState(false);
    const { pins } = useContext(PinContext);

    const toggleDrawer = () =>
    {
        setOpenDrawer(!openDrawer);
    }

    return (
        <div>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Fetch!
                        &nbsp;
                        <Link href="/">
                            🐶
                        </Link>
                    </Typography>
                    <IconButton
                        id="drawerToggle"
                        color="inherit"
                        edge="end"
                        onClick={toggleDrawer}
                    >
                        <Badge badgeContent={pins.length} color="secondary">
                            <PushPin />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={openDrawer}
                onClose={toggleDrawer}
            >
                <div className={styles.drawer}>
                    <Pins />
                </div>
            </Drawer>
            <Container fixed className={styles.container}>
                {props.children}
            </Container>
        </div>
    );
}

export default Layout
