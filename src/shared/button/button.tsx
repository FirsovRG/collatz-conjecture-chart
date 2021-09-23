import React from "react";
import { cn as createCn } from "@bem-react/classname";

import "./button.css";

const cn = createCn("button");

type Props = {
    onClick: () => void;
}

const Button: React.FC<Props> = React.memo(({ onClick, children }) => 
    <button onClick={ onClick } className={ cn() }>
        { children }
    </button>
)

export default Button;