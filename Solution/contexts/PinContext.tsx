import React, { FC, useEffect, useState } from "react";
import Cookies from 'js-cookie'
import PinModel from "../models/pinModel";

export interface PinContextValue
{
    pins: PinModel[];
    addPin: (value: PinModel) => void;
    editPin: (url: string, value: PinModel) => void;
    getPin: (url: string) => PinModel | undefined;
    removePin: (url: string) => void;
    hasPin: (url: string) => boolean;
}

export const PinContext = React.createContext<PinContextValue>({
    pins: [],
    addPin: () => { },
    getPin: () => undefined,
    editPin: () => { },
    removePin: () => { },
    hasPin: () => false,
});

export const PinContextProvider: FC = (props) =>
{
    const [pins, setPins] = useState<PinModel[]>();

    useEffect(() =>
    {
        const pinsJson = Cookies.get('pins');
        if (!pinsJson)
        {
            setPins([]);
            return;
        }

        const pins = JSON.parse(pinsJson) as PinModel[];
        if (!pins)
        {
            setPins([]);
            return;
        }

        setPins(pins);
    }, []);
    

    if (!pins)
    {
        return <></>;
    }

    const changePins = (newPins: PinModel[]) =>
    {
        const newPinsJson = JSON.stringify(newPins);

        Cookies.set("pins", newPinsJson);

        setPins(newPins);
    }

    const addPin = (value: PinModel) =>
    {
        const newPins = [...pins, value];
        changePins(newPins);
    }

    const getPin = (url: string) =>
    {
        const pin = pins.find(x => x.url === url);
        return pin;
    }

    const editPin = (url: string, value: PinModel) =>
    {
        const pinIndex = pins.findIndex(x => x.url === url);
        const newPins = [...pins];
        newPins[pinIndex] = value;
        changePins(newPins);
    }

    const removePin = (url: string) => 
    {
        const newPins = pins.filter(x => x.url !== url);
        changePins(newPins);
    }

    const hasPin = (url: string) => 
    {
        return !!pins.find(x => x.url === url);
    }

    const value: PinContextValue =
    {
        pins,
        addPin,
        getPin,
        editPin,
        removePin,
        hasPin
    };

    return (
        <PinContext.Provider value={value}>
            {props.children}
        </PinContext.Provider>
    );
}