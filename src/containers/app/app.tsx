import React, { useState } from "react";
import { cn as createCn } from "@bem-react/classname";

import Layout from "../../components/layout";
import Chart  from "../../components/chart";
import { getChartData, inputValueRegExpValidation } from "../../utils/helpers";
import Input from "../../shared/input";
import Button from "../../shared/button";
import { NUMBER_ONLY_REGEXP } from "../../constants";
import { ChartDataSet } from "../../utils/types";

import "./app.css";

const cn = createCn("app");

const App = () => {
    const [inputValue, setInputValue] = useState("");
    const [chartDataSets, setChartDataSets] = useState<ChartDataSet>([])

    const handleInputChange = (value: string) => {
        if (inputValueRegExpValidation(value, NUMBER_ONLY_REGEXP)) {
            setInputValue(value)
        }
    }

    const handleButtonClick = () => {
        if (inputValue) {
            const calculatedData = getChartData(+inputValue)
            setChartDataSets([...chartDataSets, calculatedData])
        }
    }
        
    return (<div className={ cn() }>
        <Layout>
            <Chart 
                chartData={ chartDataSets }
            />
            <Input value={ inputValue } onChange={ handleInputChange }/>
            <Button onClick={ handleButtonClick }>
                s
            </Button>
        </Layout>
    </div>)
}

export default App;
