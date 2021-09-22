import React from "react";
import { cn as createCn } from "@bem-react/classname";

import Layout from "../../components/layout";

import "./app.css";

const cn = createCn("app");

const App = () => <div className={ cn() }><Layout /></div>

export default App;
