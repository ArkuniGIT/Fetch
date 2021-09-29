import { AppBar, Button, Card, CardContent, CardHeader, CardMedia, Container, IconButton, Modal, Stack, TextField, Toolbar, Typography } from '@mui/material';
import React, { ChangeEvent, FC, useContext, useState } from 'react'
import { Close, PushPin, Delete } from "@mui/icons-material";
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
    const { addPin, getPin, editPin, removePin, hasPin } = useContext(PinContext);
    const pin = getPin(url);
    const [comment, setComment] = useState(pin?.comment || "");

    const onChangeComment = (e: ChangeEvent<HTMLInputElement>) => 
    {
        setComment(e.currentTarget.value);
    }

    const onAddSubmit = () => 
    {
        addPin({
            url,
            comment
        });

        if (onClose)
            onClose();
    }

    const onEditSubmit = () => 
    {
        editPin(url, {
            url,
            comment
        });

        if (onClose)
            onClose();
    }

    const onRemoveSubmit = () => 
    {
        removePin(url);

        if (onClose)
            onClose();
    }

    const editMode = hasPin(url);

    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <div>
                <FloatBox>
                    <Card>
                        <CardHeader
                            title={editMode && "Edit pin" || "Pin"}
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
                                    onChange={onChangeComment}
                                />
                                <Stack direction="row" gap={2}>
                                    <Button
                                        id="pinForm__submit"
                                        variant="contained"
                                        color="primary"
                                        onClick={editMode && onEditSubmit || onAddSubmit}
                                        endIcon={<PushPin />}
                                    >
                                        {editMode && "Edit pin" || "Pin"}
                                    </Button>
                                    {editMode &&
                                        <Button
                                            id="pinForm__remove"
                                            color="error"
                                            variant="contained"
                                            onClick={onRemoveSubmit}
                                            endIcon={<Delete />}
                                        >
                                            Unpin
                                        </Button>
                                    }
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>
                </FloatBox>
            </div>
        </Modal>
    );
}

export default PinModal;
