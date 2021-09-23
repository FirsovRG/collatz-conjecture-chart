import React, { useMemo } from "react";
import { Line } from "react-chartjs-2";

import { CHART_OPTIONS } from "../../constants";
import { ChartDataSet } from "../../utils/types";

type Props = {
    chartData: ChartDataSet;
}

const Chart = React.memo(({ chartData }: Props) => {
    const labels = useMemo(() => chartData.reduce((result, current) => {
        if (current.length > result.length) {
            return current
        }

        return result
    }, []).map((_item, index) => index), [chartData])

    const data = useMemo(() => ({
        labels,
        datasets: chartData.map((data, index) => ({
            label: index.toString(),
            data,
            borderColor: `rgba(255, 255, 255, ${1 / (chartData.length - index)})`
        }))
    }), [chartData]);

    return <Line data={ data } options={ CHART_OPTIONS }/>
})

export default Chart;