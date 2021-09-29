import { AppBar, Button, Card, CardContent, CardHeader, CardMedia, Container, IconButton, Modal, Stack, TextField, Toolbar, Typography } from '@mui/material';
import React, { ChangeEvent, FC, useContext, useState } from 'react'
import { Close, PushPin } from "@mui/icons-material";
import { PinContext } from '../../contexts/PinContext';
import FloatBox from '../floatBox/FloatBox';

interface PinModalProps
{
    open: boolean;
    url: string;

    onClose?: () => void;
}

const PinModal: FC<PinModalProps> = (props) =>
{
    const { open, url, onClose } = props;
    const [comment, setComment] = useState("");
    const { addPin } = useContext(PinContext);

    const onChangeCommnet = (e: ChangeEvent<HTMLInputElement>) => 
    {
        setComment(e.currentTarget.value);
    }

    const onSubmit = () => 
    {
        addPin({
            url,
            comment
        });

        if (onClose)
            onClose();
    }

    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <div>
                <FloatBox>
                    <Card>
                        <CardHeader
                            title={"Pin"}
                            action={
                                <IconButton onClick={onClose}>
                                    <Close />
                                </IconButton>
                            }
                        />
                        <CardMedia
                            component="img"
                            height="256"
                            image={url}
                            alt=""
                        />
                        <CardContent>
                            <Stack gap={2}>
                                <TextField
                                    id="pinForm__comment"
                                    multiline
                                    rows={4}
                                    label="Comment"
                                    value={comment}
                                    fullWidth
                                    onChange={onChangeCommnet}
                                />
                                <Button
                                    id="pinForm__submit"
                                    variant="contained"
                                    onClick={onSubmit}
                                    endIcon={<PushPin />}
                                >
                                    Pin
                                </Button>
                            </Stack>
                        </CardContent>
                    </Card>
                </FloatBox>
            </div>
        </Modal>
    );
}

export default PinModal;
