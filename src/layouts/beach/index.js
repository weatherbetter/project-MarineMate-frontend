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
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Overview page components
import Header from "layouts/beach/components/Header";
import PlatformSettings from "layouts/beach/components/PlatformSettings";

// Data
// import profilesListData from "layouts/beach/data/profilesListData";

// Images
import borders from "assets/theme/base/borders";
import { Map, MapMarker, ZoomControl, MapTypeControl } from "react-kakao-maps-sdk";

import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";

function Beach() {
  const { borderWidth, borderColor } = borders;
  const profilesListData = [
    {
      name: "해운대 해수욕장",
      description: "Hi! I need more information..",
      action: {
        type: "internal",
        route: "/pages/profile/profile-overview",
        color: "info",
        label: "check",
      },
    },
    {
      name: "강원도 해수욕장",
      description: "Awesome work, can you..",
      action: {
        type: "internal",
        route: "/pages/profile/profile-overview",
        color: "info",
        label: "check",
      },
    },
    {
      name: "강원도 해수욕장",
      description: "Awesome work, can you..",
      action: {
        type: "internal",
        route: "/pages/profile/profile-overview",
        color: "info",
        label: "check",
      },
    },
  ];
  const { kakao } = window;
  return (
    <DashboardLayout>
      <Header />
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={8}>
            <Card sx={{ height: "100%" }}>
              <Map
                center={{ lat: 33.5563, lng: 126.79581 }}
                style={{ width: "100%", height: "360px" }}
              >
                <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                </MapMarker>
                <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
                <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT} />
              </Map>
            </Card>
          </Grid>
          <Grid item xs={12} xl={4}>
            <ProfilesList title="해수욕장 추천 리스트" profiles={profilesListData} />
          </Grid>
        </Grid>
      </SoftBox>
      <SoftBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <BuildByDevelopers />
          </Grid>
        </Grid>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Beach;
