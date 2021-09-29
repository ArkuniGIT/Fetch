import { Divider, Fab, ImageList, ImageListItem, List, ListItem, Stack, Typography } from '@mui/material';
import { Delete } from "@mui/icons-material";
import React, { FC, Fragment, useContext } from 'react'
import { PinContext } from '../../contexts/PinContext';
import styles from "./Pins.module.css";

interface PinsProps
{

}

const Pins: FC<PinsProps> = (props) =>
{
    const { pins, removePin } = useContext(PinContext);

    const onClickRemove = (url: string) => () =>
    {
        removePin(url);
    }

    return (
        <>
            <Typography align="center" variant="h3" gutterBottom>
                Pins
            </Typography>
            {pins.length === 0 &&
                <Typography align="center">
                    You have no pinned pictures.
                </Typography>
            }
            {pins.length > 0 &&
                <Stack gap={4}>
                    {pins.map((pin, i) => (
                        <Fragment key={pin.url}>
                            <div id={"pin_" + i}>
                                <Stack>
                                    <div className={styles.pinContainer}>
                                        <Fab
                                            className="deleteButton"
                                            sx={{ position: "absolute", bottom: 16, right: 16 }}
                                            size="small"
                                            onClick={onClickRemove(pin.url)}
                                        >
                                            <Delete />
                                        </Fab>
                                        <img
                                            src={pin.url}
                                            loading="lazy"
                                            className={styles.img}
                                        />
                                    </div>
                                    {pin.comment &&
                                        <Typography>
                                            {pin.comment}
                                        </Typography>
                                    }
                                </Stack>
                            </div>
                        </Fragment>
                    ))}
                </Stack>
            }
        </>
    );
}

export default Pins
