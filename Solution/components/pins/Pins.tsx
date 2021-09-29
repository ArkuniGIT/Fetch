import { Fab, Stack, Typography } from '@mui/material';
import { Delete } from "@mui/icons-material";
import React, { FC, Fragment, useContext, useState } from 'react'
import { PinContext } from '../../contexts/PinContext';
import styles from "./Pins.module.css";
import PinModal from '../pinModal/PinModal';

interface PinsProps
{

}

const Pins: FC<PinsProps> = (props) =>
{
    const [modalUrl, setModalUrl] = useState<string>();
    const { pins } = useContext(PinContext);

    const onClickPin = (url: string) => () =>
    {
        setModalUrl(url);
    }

    const onCloseModal = () =>
    {
        setModalUrl(undefined);
    }

    return (
        <>
            {modalUrl &&
                <PinModal
                    open={true}
                    url={modalUrl}
                    onClose={onCloseModal}
                />
            }
            {pins.length === 0 &&
                <Typography align="center">
                    You have no pinned pictures.
                </Typography>
            }
            {pins.length > 0 &&
                <Stack gap={2}>
                    {pins.map((pin, i) => (
                        <Fragment key={pin.url}>
                            <div id={"pin_" + i} className={styles.pinContainer}>
                                <img
                                    src={pin.url}
                                    loading="lazy"
                                    className={styles.pinImage}
                                    onClick={onClickPin(pin.url)}
                                />
                                {pin.comment &&
                                    <Typography className={styles.pinComment}>
                                        {pin.comment}
                                    </Typography>
                                }
                            </div>
                        </Fragment>
                    ))}
                </Stack>
            }
        </>
    );
}

export default Pins
