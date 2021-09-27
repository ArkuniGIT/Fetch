import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React, { FC } from 'react'
import styles from "./Layout.module.css";

const Layout: FC = (props) =>
{
    return (
        <div>
            <AppBar position="static">
                <Toolbar disableGutters>
                    <Container>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Fetch! 🐶
                        </Typography>
                    </Container>
                </Toolbar>
            </AppBar>
            <Container fixed className={styles.container}>
                {props.children}
            </Container>
        </div>
    );
}

export default Layout
