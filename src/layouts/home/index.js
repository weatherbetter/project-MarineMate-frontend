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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import routes from "routes";

function Home() {

  return (
    <>
      <DefaultNavbar
        routes={routes}
        // action={{
        //   type: "external",
        //   route: "https://appseed.us/product/material-kit/api-server-nodejs/react/",
        //   label: "download",
        //   color: "dark", //
        // }}
        transparent
        light={true}
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              MarineMate
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              Just Enjoy Beach
            </MKTypography>
            {/* default > dark */}
            {/* <MKButton color="white" sx={{ color: ({ palette: { dark } }) => dark.main }}>
              Go Beach
            </MKButton> */}
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-twitter" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#">
                <i className="fab fa-google-plus" />
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>

      <MKBox component="section" py={2}>
        <Container>
          <Grid container item xs={12} lg={6}>
            <MKTypography variant="h3" mb={6}>
              MarineMate Service
            </MKTypography>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={3}>
              <TransparentBlogCard
                image="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
                title="실시간 해수욕 정보"
                description="지역별로 실시간으로 수질과 수온을 모니터링하여 사용자에게 제공합니다. 이를 통해 사용자들은 특정 해변이나 수영장에서 수영하기 전에 해당 지역의 해수욕 조건을 확인할 수 있습니다."
                action={{
                  type: "internal",
                  route: "/",
                  color: "info",
                  label: "read more",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <TransparentBlogCard
                image={
                  "https://images.unsplash.com/photo-1532191343016-47bf741b8b3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                }
                title="해파리 출몰 예측과 경고"
                description="해파리 출몰 예측 알고리즘을 활용하여, 사용자들에게 해파리 출몰 가능성과 경고를 제공합니다. 이를 통해 사용자들은 불필요한 위험을 줄이고 해파리가 출몰하지 않는 안전한 해수욕장을 선택할 수 있습니다."
                action={{
                  type: "internal",
                  route: "/",
                  color: "info",
                  label: "read more",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <TransparentBlogCard
                image={
                  "https://images.unsplash.com/photo-1499915174960-6f5340157928?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                }
                title="해양레저/스포츠 추천"
                description="지역별로 운영 중인 해양레저 및 스포츠 서비스 목록을 제공합니다. 예를 들어, 서핑, 카약, 스쿠버 다이빙 등 다양한 활동을 추천하고, 해당 서비스 제공업체의 정보와 예약 기능을 제공할 수 있습니다."
                action={{
                  type: "internal",
                  route: "/",
                  color: "info",
                  label: "read more",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <TransparentBlogCard
                image={
                  "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                }
                title="주변 편의시설 정보"
                description="해수욕장이나 해양 레저 시설 주변에 있는 편의시설 (화장실, 샤워 시설, 레스토랑, 카페 등)에 대한 정보를 제공합니다. 이를 통해 사용자들은 해수욕이나 해양레저 활동을 즐기는 동안 편리한 시설을 쉽게 찾을 수 있습니다."
                action={{
                  type: "internal",
                  route: "/",
                  color: "info",
                  label: "read more",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default Home;
