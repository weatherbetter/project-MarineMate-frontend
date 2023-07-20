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

function Dashboard() {
    const gradientLineChartData = {
        labels: [
            "1월",
            "2월",
            "3월",
            "4월",
            "5월",
            "6월",
            "7월",
            "8월",
            "9월",
            "10월",
            "11월",
            "12월",
        ],
        datasets: [
            {
                label: "빈도",
                color: "info",
                data: [17, 8, 20, 13, 30, 77, 262, 165, 37, 47, 15, 17],
            },
        ],
    };
    const [tabsOrientation, setTabsOrientation] = useState("horizontal");
    const [tabValue, setTabValue] = useState(0);

    const options = [
        { value: 0, label: "부산광역시" },
        { value: 1, label: "전라북도" },
        { value: 2, label: "제주특별자치도" },
    ];

    const [location, setLocation] = useState("");

    const handleChange = (event) => {
        setLocation(event.target.value);
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
                                                <em>위치를 선택해주세요</em>
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
                            <VerticalBarChart
                                title="원인별 수난사고 빈도"
                                // description={
                                //   <SoftBox display="flex" alignItems="center">
                                //     <SoftTypography variant="button" color="text" fontWeight="medium">
                                //       수난사고 원인별 빈도
                                //     </SoftTypography>
                                //   </SoftBox>
                                // }
                                height="25rem"
                                chart={{
                                    labels: [
                                        "기타 수난",
                                        "물놀이 익수",
                                        "수상표류",
                                        "무동력수상레져",
                                        "선박조난",
                                        "동력수상레져",
                                        "차량추락 침수",
                                        "어패류 채취 익 수",
                                    ],
                                    datasets: [
                                        {
                                            label: "빈도",
                                            color: "dark",
                                            data: [344, 244, 56, 42, 13, 5, 3, 1],
                                        },
                                    ],
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <GradientLineChart
                                title="월별 수난사고 빈도"
                                // description={
                                //   <SoftBox display="flex" alignItems="center">
                                //     <SoftTypography variant="button" color="text" fontWeight="medium">
                                //       부산{" "}
                                //       <SoftTypography variant="button" color="text" fontWeight="regular">
                                //         in 2021
                                //       </SoftTypography>
                                //     </SoftTypography>
                                //   </SoftBox>
                                // }
                                // width="100%"
                                height="25rem"
                                chart={gradientLineChartData}
                            />
                        </Grid>
                    </Grid>
                </SoftBox>
                <SoftBox mb={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={6}>
                            <VerticalBarChart
                                title="시군구별 수난사고 빈도 데이터"
                                // description={
                                //   <SoftBox display="flex" alignItems="center">
                                //     <SoftTypography variant="button" color="text" fontWeight="medium">
                                //       시군구별 수난사고 빈도 데이터
                                //     </SoftTypography>
                                //   </SoftBox>
                                // }
                                height="20.25rem"
                                chart={{
                                    labels: [
                                        "해운대구",
                                        "수영구",
                                        "서구",
                                        "기장군",
                                        "영도구",
                                        "사하구",
                                        "남구",
                                        "강서구",
                                        "중구",
                                        "동구",
                                    ],
                                    datasets: [
                                        {
                                            label: "빈도",
                                            color: "dark",
                                            data: [265, 134, 92, 89, 54, 44, 11, 8, 6, 4],
                                        },
                                    ],
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <VerticalBarChart
                                title="장소별 수난사고 빈도 데이터"
                                // description={
                                //   <SoftBox display="flex" alignItems="center">
                                //     <SoftTypography variant="button" color="text" fontWeight="medium">
                                //       장소별 수난사고 빈도 데이터
                                //     </SoftTypography>
                                //   </SoftBox>
                                // }
                                height="20.25rem"
                                chart={{
                                    labels: [
                                        "바다",
                                        "기타 하천.바다",
                                        "국가하천(강)",
                                        "일반도로(기타)",
                                        "지방(소)하천",
                                    ],
                                    datasets: [
                                        {
                                            label: "빈도",
                                            color: "dark",
                                            data: [708, 99, 53, 16, 14],
                                        },
                                    ],
                                }}
                            />
                        </Grid>
                    </Grid>
                </SoftBox>
            </SoftBox>
        </DashboardLayout>
    );
}

export default Dashboard;
