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
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Data
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import axios from "axios";

function GuideSelect() {
    return (
        <SoftTypography
            variant="h6"
            component="span"
            sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
            }}
        >
            지역을 선택해주세요.
        </SoftTypography>
    );
}

function Dashboard() {
    const [location, setLocation] = useState("");
    const [monthLabel, setMonthLabel] = useState([]);
    const [monthValue, setMonthValue] = useState([]);
    const [causeValue, setCauseValue] = useState([]);
    const [causeLabel, setCauseLabel] = useState([]);
    const [cityValue, setCityValue] = useState([]);
    const [cityLabel, setCityLabel] = useState([]);
    const [spaceValue, setSpaceValue] = useState([]);
    const [spaceLabel, setSpaceLabel] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);

    const monthLineChartData = {
        labels: monthLabel,
        datasets: [
            {
                label: "빈도",
                color: "info",
                data: monthValue,
            },
        ],
    };
    const causeChartData = {
        labels: causeLabel,
        datasets: [
            {
                label: "빈도",
                color: "dark",
                data: causeValue,
            },
        ],
    };
    const cityChartData = {
        labels: cityLabel,
        datasets: [
            {
                label: "빈도",
                color: "dark",
                data: cityValue,
            },
        ],
    };
    const spaceChartData = {
        labels: spaceLabel,
        datasets: [
            {
                label: "빈도",
                color: "dark",
                data: spaceValue,
            },
        ],
    };

    const options = [
        { value: "부산광역시", label: "부산광역시" },
        { value: "전라북도", label: "전라북도" },
        { value: "제주특별자치도", label: "제주특별자치도" },
    ];

    const handleChange = (event) => {
        if (event.target.value === "") {
        } else {
            setLocation(event.target.value);
            axios
                .get(`${process.env.REACT_APP_API_URL}/accident?location=${event.target.value}`)
                .then((res) => {
                    setDataLoading(false);
                    setMonthLabel(res.data.month);
                    setMonthValue(res.data.month_counts);
                    setCauseValue(res.data.cause_counts);
                    setCauseLabel(res.data.causes);
                    setCityValue(res.data.sigungu_counts);
                    setCityLabel(res.data.sigungu);
                    setSpaceValue(res.data.place_counts);
                    setSpaceLabel(res.data.place);
                })
                .catch((error) => {
                    setDataLoading(false);
                });
        }
    };

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox>
                <Card
                    sx={{
                        mx: 3,
                        py: 2,
                        px: 2,
                    }}
                >
                    <Grid container spacing={3} alignItems="center">
                        <Grid item>
                            <SoftBox display="flex" py={1} mb={0.25}>
                                <SoftBox mt={0.25}>
                                    <FormControl fullWidth>
                                        <Select
                                            value={location}
                                            onChange={handleChange}
                                            displayEmpty
                                            inputProps={{ "aria-label": "Without label" }}
                                        >
                                            <MenuItem value="">
                                                <em>지역을 선택해주세요</em>
                                            </MenuItem>
                                            {options.map((option, index) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </SoftBox>
                                <SoftBox width="80%" ml={2}>
                                    <SoftTypography
                                        variant="button"
                                        fontWeight="regular"
                                        color="text"
                                    >
                                        지역의 수난사고 현황을 확인할 수 있습니다. (2021년 기준)
                                    </SoftTypography>
                                </SoftBox>
                            </SoftBox>
                        </Grid>
                    </Grid>
                </Card>
            </SoftBox>
            <SoftBox py={3}>
                <SoftBox mb={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={6}>
                            <SoftBox position="relative">
                                {dataLoading && <GuideSelect></GuideSelect>}
                                <VerticalBarChart
                                    title="원인별 수난사고 빈도"
                                    height="25rem"
                                    chart={causeChartData}
                                />
                            </SoftBox>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <SoftBox position="relative">
                                {dataLoading && <GuideSelect></GuideSelect>}
                                <GradientLineChart
                                    title="월별 수난사고 빈도"
                                    height="25rem"
                                    chart={monthLineChartData}
                                />
                            </SoftBox>
                        </Grid>
                    </Grid>
                </SoftBox>
                <SoftBox mb={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={6}>
                            <SoftBox position="relative">
                                {dataLoading && <GuideSelect></GuideSelect>}
                                <VerticalBarChart
                                    title="시군구별 수난사고 빈도"
                                    height="20.25rem"
                                    chart={cityChartData}
                                />
                            </SoftBox>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <SoftBox position="relative">
                                {dataLoading && <GuideSelect></GuideSelect>}
                                <VerticalBarChart
                                    title="장소별 수난사고 빈도"
                                    height="20.25rem"
                                    chart={spaceChartData}
                                />
                            </SoftBox>
                        </Grid>
                    </Grid>
                </SoftBox>
            </SoftBox>
        </DashboardLayout>
    );
}

export default Dashboard;
