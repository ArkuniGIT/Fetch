import { AppBar, Container, Modal, Toolbar, Typography } from '@mui/material';
import React, { FC } from 'react'
import styles from "./FloatBox.module.css";

interface FloatBoxProps
{

}

const FloatBox: FC<FloatBoxProps> = (props) =>
{
    return (
        <div className={styles.container}>
            <div className={styles.floatBox}>
                {props.children}
            </div>
        </div>
    );
}

export default FloatBox
