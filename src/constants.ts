export const GRID_LINE_COLOR = "rgba(255, 255, 255, 0.05)";

export const CHART_OPTIONS = { 
    plugins: { 
        legend: { 
            display:false 
        }, 
        title: { 
            display: false 
        } 
    },
    scales: {
        y: {
            grid: {
                color: GRID_LINE_COLOR
            }
        },
        x: {
            grid: {
                color: GRID_LINE_COLOR
            }
        }
    }
}

export const NUMBER_ONLY_REGEXP = /^[\d]*$/;

export const CHECK_LOOP_SUBSEQUENCE = "1,4,2,1";