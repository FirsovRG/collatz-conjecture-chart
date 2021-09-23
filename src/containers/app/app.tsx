import React, { useState } from "react";
import { cn as createCn } from "@bem-react/classname";

import Layout from "../../components/layout";
import Chart  from "../../components/chart";
import ControlsForm from "../../components/controls-form";
import {
    getChartData, getRandomInt, inputValueRegExpValidation 
} from "../../utils/helpers";
import { ChartDataSet } from "../../utils/types";
import { NUMBER_ONLY_REGEXP } from "../../constants";

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

    const handleFormSubmit = () => {
        if (inputValue) {
            const calculatedData = getChartData(+inputValue)
            setChartDataSets([...chartDataSets, calculatedData])
            console.log("here")
        }
    }

    const handleClearButtonClick = () => {
        setChartDataSets([]);
    }

    const handleRandomizeButtonClick = () => {
        const randomNumber = getRandomInt(1000);
        setInputValue(randomNumber.toString());
        const calculatedData = getChartData(randomNumber)
        setChartDataSets([...chartDataSets, calculatedData])
    }
        
    return (
        <div className={ cn() }>
            <Layout>
                <Chart 
                    chartData={ chartDataSets }
                />
                <ControlsForm 
                    inputValue={ inputValue } 
                    onInputChange={ handleInputChange } 
                    onFormSubmit={ handleFormSubmit }
                    onClearButtonClick={ handleClearButtonClick }
                    onRandomizeButtonClick={ handleRandomizeButtonClick }
                />
            </Layout>
        </div>
    )
}

export default App;
