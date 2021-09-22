import React, { useMemo } from "react";
import { Line } from "react-chartjs-2";

import { CHART_OPTIONS } from "../../constants";

type Props = {
    labels: Array<string | number>;
    chartData: number[]
}

const Chart = React.memo(({ labels, chartData }: Props) => {
    const data = useMemo(() => ({
        labels: labels,
        datasets: [
            {
                data: chartData,
                borderColor: "rgba(255, 255, 255, 0.2)"
            }
        ]
    }), [labels, chartData]);

    
    return <Line data={ data } options={ CHART_OPTIONS }/>
})

export default Chart;