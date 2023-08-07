/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import * as React from "react";
import { Line } from "react-chartjs-2";

function LineChart(props) {
    const chartData = {
        datasets: [
            {
                label: props.label,
                data: props.data,
                borderColor: props.color,
                backgroundColor: props.color,
                pointBorderColor: props.color,
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
            },
        ],
    };

    const options = {
        // scales: {
        //     // x: {},
        //     y: {
        //         beginAtZero: true,
        //     },
        // },
        parsing: {
            xAxisKey: "date",
            yAxisKey: props.yAxisKey,
        },
    };

    return (
        <Card>
            <SoftBox p={2}>
                <Line data={chartData} options={options} />
            </SoftBox>
        </Card>
    );
}

export default LineChart;
