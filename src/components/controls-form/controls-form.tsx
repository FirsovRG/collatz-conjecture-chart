import React, { FormEvent } from "react";
import { cn as createCn } from "@bem-react/classname";

import Button from "../../shared/button";
import Input from "../../shared/input";
import { ReactComponent as CalculateIcon } from "./icons/calculate-icon.svg";
import { ReactComponent as ClearIcon } from "./icons/clear-icon.svg";
import { ReactComponent as RandomizeIcon } from "./icons/randomize-icon.svg";

import "./controls-form.css";

type Props = {
    inputValue: string;
    onInputChange: (value: string) => void;
    onFormSubmit: () => void;
    onClearButtonClick: () => void;
    onRandomizeButtonClick: () => void;
}

const cn = createCn("controls-form");

const ControlsForm = React.memo<Props>(({
    inputValue, onFormSubmit, onInputChange, onClearButtonClick, onRandomizeButtonClick 
}) => {
    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onFormSubmit();
    }
    
    return(
        <form className={ cn() } onSubmit={ handleFormSubmit }>
            <Input
                value={ inputValue } onChange={ onInputChange }
                className={ cn("control-item") }
            />
            <Button type='submit' className={ cn("control-item") }>
                <CalculateIcon />
            </Button>
            <Button onClick={ onRandomizeButtonClick } className={ cn("control-item") }>
                <RandomizeIcon />
            </Button>
            <Button onClick={ onClearButtonClick } className={ cn("control-item") }>
                <ClearIcon />
            </Button>
        </form>
    )
})

export default ControlsForm;