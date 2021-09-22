import React from "react";
import { cn as createCn } from "@bem-react/classname";

import "./layout.css";

const cn = createCn("layout");

const Layout: React.FC = ({ children }) => 
    <div className={ cn() }>{ children }</div>

export default Layout;