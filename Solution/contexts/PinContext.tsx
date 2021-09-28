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
        const pinsJson = Cookies.get('pins');
        if (!pinsJson)
        {
            setPins([]);
            return;
        }

        console.log(pinsJson);
        

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

    const removePin = (url: string) => 
    {
        const newPins = pins.filter(x => x.url !== url);
        changePins(newPins);
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