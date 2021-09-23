import React from "react";
import { cn as createCn } from "@bem-react/classname";

import "./button.css";


type Props = {
    type?: "button" | "submit" | "reset"
    onClick?: () => void;
    className?: string;
}

const cn = createCn("button");

const Button: React.FC<Props> = React.memo(({
    children, type="button", onClick, className 
}) => (
    <button
        type={ type } onClick={ onClick }
        className={ cn(null, [className]) }
    >
        { children }
    </button>
)
)

export default Button;