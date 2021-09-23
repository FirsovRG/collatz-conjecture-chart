import React, { ChangeEvent, useCallback } from "react";
import { cn as createCn } from "@bem-react/classname";

import "./input.css";

const cn = createCn("input");

type Props = {
    value: string;
    onChange: (value: string) => void;
}

const Input = React.memo(({ value, onChange }: Props) => {
    const handleInputChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            onChange(event.target.value);
        }, [])

    return (
        <input 
            onChange={ handleInputChange } 
            value={ value }
            className={ cn() }
        />
    )
})

export default Input;