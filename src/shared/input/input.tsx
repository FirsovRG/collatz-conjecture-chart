import React, {
    ChangeEvent, useCallback 
} from "react";
import { cn as createCn } from "@bem-react/classname";

import "./input.css";


type Props = {
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

const cn = createCn("input");

const Input = React.memo(({
    value, onChange, className 
}: Props) => {
    const handleInputChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            onChange(event.target.value);
        }, [])

    return (
        <input 
            onChange={ handleInputChange } 
            value={ value }
            className={ cn(null, [className]) }
        />
    )
})

export default Input;