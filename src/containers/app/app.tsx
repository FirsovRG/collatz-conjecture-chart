import React from "react";
import { cn as createCn } from "@bem-react/classname";

import Layout from "../../components/layout";
import Chart  from "../../components/chart";
import { getChartData } from "../../utils/helpers";

import "./app.css";

const cn = createCn("app");

const chartData = getChartData(11);

const App = () => 
    <div className={ cn() }>
        <Layout>
            <Chart 
                labels={ chartData.map((_item, index) => index) } 
                chartData={ chartData }/>
        </Layout>
    </div>

export default App;
