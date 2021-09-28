import React, { FC, useEffect, useState } from "react";
import Cookies from 'js-cookie'
import PinModel from "../models/pinModel";

export interface PinContextValue
{
    pins: PinModel[];
    addPin: (value: PinModel) => void;
    removePin: (url: string) => void;
}

export const PinContext = React.createContext<PinContextValue>({
    pins: [],
    addPin: x => { },
    removePin: x => { }
});

export const PinContextProvider: FC = (props) =>
{
    const [pins, setPins] = useState<PinModel[]>();

    useEffect(() =>
    {
        const cookieData = Cookies.get('pins');
        if (!cookieData)
        {
            setPins([]);
            return;
        }

        const cookiePins = JSON.parse(cookieData) as PinModel[];
        if (!cookiePins)
        {
            setPins([]);
            return;
        }

        setPins(cookiePins);
    }, []);
    

    if (!pins)
    {
        return <></>;
    }

    const addPin = (value: PinModel) =>
    {
        const newPins = [...pins, value];

        Cookies.set("pins", newPins);

        setPins(newPins);
    }

    const removePin = (url: string) => 
    {
        const newPins = pins.filter(x => x.url !== url);

        Cookies.set("pins", newPins);

        setPins(newPins);
    }

    const value: PinContextValue =
    {
        pins,
        addPin,
        removePin
    };

    return (
        <PinContext.Provider value={value}>
            {props.children}
        </PinContext.Provider>
    );
}