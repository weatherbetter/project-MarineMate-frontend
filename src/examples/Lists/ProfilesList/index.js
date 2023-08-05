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

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import SoftBadge from "components/SoftBadge";
import BounceLoader from "react-spinners/BounceLoader";
import Grid from "@mui/material/Grid";
import borders from "assets/theme/base/borders";
import Tooltip from "@mui/material/Tooltip";
import beach from "assets/images/beach.png";
import jellyfish from "assets/images/jellyfish.png";
import rain from "assets/images/rain.png";

function ProfilesList({ title, profiles, loading }) {
    const { borderWidth, borderColor } = borders;
    const renderProfiles = profiles.map(
        ({ name, rainfall_score, jellyfish_score, beach_score, action }, index) => (
            <div key={index}>
                <SoftBox component="li" display="flex" alignItems="center" py={1} mb={1}>
                    <SoftBox mr={2}>
                        <SoftBadge badgeContent={index + 1} container />
                    </SoftBox>
                    <SoftBox
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-start"
                        justifyContent="center"
                    >
                        <SoftTypography variant="button" fontWeight="medium">
                            {name}
                        </SoftTypography>
                    </SoftBox>
                    <SoftBox ml="auto">
                        <SoftButton
                            variant="text"
                            color="info"
                            onClick={action.click}
                            data-name={name}
                        >
                            {action.label}
                        </SoftButton>
                    </SoftBox>
                </SoftBox>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <SoftBox
                            border={`${borderWidth[1]} solid ${borderColor}`}
                            borderRadius="lg"
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            p={2}
                        >
                            <Tooltip
                                title="강수량 점수를 나타냅니다. 점수가 높을수록 강수량이 낮습니다."
                                placement="top"
                            >
                                <SoftBox component="img" src={rain} alt="" width="20%" mr={1} />
                            </Tooltip>
                            <SoftTypography variant="h6" fontWeight="medium">
                                {rainfall_score}
                            </SoftTypography>
                        </SoftBox>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <SoftBox
                            border={`${borderWidth[1]} solid ${borderColor}`}
                            borderRadius="lg"
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            p={2}
                        >
                            <Tooltip
                                title="해파리 점수를 나타냅니다. 점수가 높을수록 해파리 출현이 낮습니다."
                                placement="top"
                            >
                                <SoftBox
                                    component="img"
                                    src={jellyfish}
                                    alt=""
                                    width="20%"
                                    mr={1}
                                />
                            </Tooltip>
                            <SoftTypography variant="h6" fontWeight="medium">
                                {jellyfish_score}
                            </SoftTypography>
                        </SoftBox>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <SoftBox
                            border={`${borderWidth[1]} solid ${borderColor}`}
                            borderRadius="lg"
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            p={2}
                        >
                            <Tooltip title="해수욕장 점수를 나타냅니다" placement="top">
                                <SoftBox component="img" src={beach} alt="" width="20%" mr={1} />
                            </Tooltip>
                            <SoftTypography variant="h6" fontWeight="medium">
                                {beach_score}
                            </SoftTypography>
                        </SoftBox>
                    </Grid>
                </Grid>
            </div>
        )
    );

    return (
        <Card sx={{ height: "100%" }}>
            <SoftBox pt={2} px={2}>
                <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                    {title}
                </SoftTypography>
            </SoftBox>
            <SoftBox p={2}>
                <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
                    {loading ? (
                        <SoftBox p={2} mx={3} display="flex" justifyContent="center">
                            <SoftBox
                                display="grid"
                                justifyContent="center"
                                alignItems="center"
                                color="white"
                                width="4rem"
                                height="4rem"
                                borderRadius="lg"
                                variant="gradient"
                            >
                                <BounceLoader
                                    color="#3693d6"
                                    height={15}
                                    width={5}
                                    radius={2}
                                    margin={2}
                                />
                            </SoftBox>
                        </SoftBox>
                    ) : 
                        renderProfiles
                    }
                </SoftBox>
            </SoftBox>
        </Card>
    );
}

// Typechecking props for the ProfilesList
ProfilesList.propTypes = {
    title: PropTypes.string.isRequired,
    profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProfilesList;
