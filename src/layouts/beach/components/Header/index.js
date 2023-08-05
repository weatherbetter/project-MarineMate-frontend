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

import { useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Soft UI Dashboard React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
import axios from "axios";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import beach_header from "assets/images/beach_header.jpg";

function Header(props) {
    const [tabsOrientation, setTabsOrientation] = useState("horizontal");

    const options = [
        { value: "부산광역시", label: "부산광역시" },
        { value: "인천광역시", label: "인천광역시" },
        { value: "울산광역시", label: "울산광역시" },
        { value: "강원도", label: "강원도" },
        { value: "충청남도", label: "충청남도" },
        { value: "전라북도", label: "전라북도" },
        { value: "전라남도", label: "전라남도" },
        { value: "경상북도", label: "경상북도" },
        { value: "경상남도", label: "경상남도" },
        { value: "제주특별자치도", label: "제주특별자치도" },
    ];

    useEffect(() => {
        // A function that sets the orientation state of the tabs.
        function handleTabsOrientation() {
            return window.innerWidth < breakpoints.values.sm
                ? setTabsOrientation("vertical")
                : setTabsOrientation("horizontal");
        }

        /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
        window.addEventListener("resize", handleTabsOrientation);

        // Call the handleTabsOrientation function to set the state with the initial value.
        handleTabsOrientation();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleTabsOrientation);
    }, [tabsOrientation]);

    const [location, setLocation] = React.useState("");

    const handleChange = (event) => {
        setLocation(event.target.value);
        axios
            .get(`${process.env.REACT_APP_API_URL}/recommendation?location=${event.target.value}`)
            .then((res) => {
                props.setLoading(true);
                props.setRecommendBeach(res.data);
                props.setLoading(false);
            })
            .catch((error) => {});
    };

    return (
        <SoftBox position="relative">
            <DashboardNavbar absolute light />
            <SoftBox
                display="flex"
                alignItems="center"
                position="relative"
                minHeight="18.75rem"
                borderRadius="xl"
                sx={{
                    backgroundImage: ({
                        functions: { rgba, linearGradient },
                        palette: { gradients },
                    }) =>
                        `${linearGradient(
                            rgba(gradients.info.main, 0),
                            rgba(gradients.info.state, 0)
                        )}, url(${beach_header})`,
                    backgroundSize: "cover",
                    backgroundPosition: "50%",
                    overflow: "hidden",
                }}
            />
            <Card
                sx={{
                    backdropFilter: `saturate(200%) blur(30px)`,
                    backgroundColor: ({ functions: { rgba }, palette: { white } }) =>
                        rgba(white.main, 0.8),
                    boxShadow: ({ boxShadows: { navbarBoxShadow } }) => navbarBoxShadow,
                    position: "relative",
                    mt: -8,
                    mx: 3,
                    py: 2,
                    px: 2,
                }}
            >
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={12}>
                        <SoftBox mb={2}>
                            <SoftBox mb={1} ml={0.5}>
                                <SoftTypography
                                    component="label"
                                    variant="caption"
                                    fontWeight="bold"
                                >
                                    Location
                                </SoftTypography>
                            </SoftBox>
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
                                    {options.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </SoftBox>
                    </Grid>
                </Grid>
            </Card>
        </SoftBox>
    );
}

export default Header;
