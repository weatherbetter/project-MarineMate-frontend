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
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Images
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";

import CardMedia from "@mui/material/CardMedia";

function BuildByDevelopers() {
  return (
    <Card>
      <SoftBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <ProfileInfoCard
              title="해운대 해수욕장"
              description="해수욕장 설명"
              info={{
                미세먼지: "보통",
                수온: "17.77",
                조위: "83",
                location: "USA",
              }}
              social={[]}
              action={{ route: "", tooltip: "Edit Profile" }}
            />
          </Grid>
          <Grid item xs={12} lg={6} sx={{ position: "relative", ml: "auto" }}>
            <SoftBox position="relative" width="100%" 
            // shadow="xl" 
            borderRadius="xl">
              <CardMedia
                src="https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                component="img"
                // title="해운대"
                sx={{
                  maxWidth: "100%",
                  margin: 0,
                //   boxShadow: ({ boxShadows: { md } }) => md,
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default BuildByDevelopers;