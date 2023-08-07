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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Soft UI Dashboard React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import routes from "routes";

function Home() {

  return (
      <>
          <DefaultNavbar
              routes={routes}
              transparent
              light={true}
          />
          <MKBox
              minHeight="75vh"
              width="100%"
              sx={{
                  backgroundImage: ({
                      functions: { linearGradient, rgba },
                      palette: { gradients },
                  }) =>
                      `${linearGradient(
                          rgba(gradients.dark.main, 0.6),
                          rgba(gradients.dark.state, 0.6)
                      )}, url(${process.env.REACT_APP_S3_IMG}/home_main.jpg)`,
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
                          소중한 사람과의 안전한 바다 여행
                      </MKTypography>
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
                              image={`${process.env.REACT_APP_S3_IMG}/home_sub0.jpg`}
                              title="안전한 해수욕장 추천"
                              description="해파리 출현, 토양 및 수질 점수, 강수량을 고려한 해수욕장 추천으로 사용자들은 해변에서의 안전을 최우선으로 고려할 수 있습니다."
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
                              image={`${process.env.REACT_APP_S3_IMG}/home_sub1.jpg`}
                              title="해파리 출현 예측 시각화"
                              description="전체 해수욕장에 대한 해파리 출현 예측 지도를 제공하여 사용자들이 특정 지역의 상태를 미리 파악할 수 있습니다. 이는 사용자들이 여행 계획을 세우고 안전하게 이동할 수 있도록 도와줍니다."
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
                              image={`${process.env.REACT_APP_S3_IMG}/home_sub2.jpg`}
                              title="수난사고 현황 정보 제공"
                              description="그래프를 통해 제공되는 수난사고 현황 정보는 사용자들이 해수욕장에서 안전한 행동을 취할 수 있도록 도와줍니다. 사고 경향을 파악하고 예방하는데 기여하여 해변 체험의 안전성을 높입니다."
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
                              image={`${process.env.REACT_APP_S3_IMG}/home_sub3.jpg`}
                              title="다양한 정보 제공"
                              description="사용자가 선택한 해수욕장에 대한 안전시설 위치 정보와 토양 점수를 비롯한 다양한 정보를 제공하여 사용자들이 해변에서 쾌적하게 시간을 보낼 수 있도록 지원합니다."
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
