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
import React, { useEffect, useState } from  "react";
import axios from "axios";
import PropTypes from "prop-types"; // prop-types 모듈을 import 합니다.
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
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// function BuildByDevelopers() {
//   // 클릭 이벤트를 위한 상태값 추가
//   const [showProfileInfo, setShowProfileInfo] = useState(false);

//   // 클릭 이벤트 처리 함수
//   const handleCheckClick = () => {
//     setShowProfileInfo(!showProfileInfo);
//   };
  function BuildByDevelopers({ selectedProfile, beach_id, onCheckClick, setBeachDetail }) {
    const { items } = reportsBarChartData;
      const [beachWeatherData, setBeachWeatherData] = useState(null);
      const [beachInfraData, setBeachInfraData] = useState(null);
      const [beachScoresData, setBeachScoresData] = useState(null);
      // const [beach_id, setShowbeach_id] = useState(null);

      useEffect(() => {
          // 각각의 API를 호출하여 데이터를 가져옵니다.
          if (beach_id) {
              axios
                  .get(`${process.env.REACT_APP_API_URL}/beach-weather/${beach_id}`)
                  .then((res) => {
                      setBeachWeatherData(res.data);
                      setBeachDetail(res.data);
                  })
                  .catch((error) => {});

              axios
                  .get(`${process.env.REACT_APP_API_URL}/beach-infra/${beach_id}`)
                  .then((res) => {
                      setBeachInfraData(res.data);
                  })
                  .catch((error) => {
                  });

              axios
                  .get(`${process.env.REACT_APP_API_URL}/beach-scores/${beach_id}`)
                  .then((res) => {
                      setBeachScoresData(res.data);
                  })
                  .catch((error) => {});
          }
      }, [beach_id]);

      return (
          <SoftBox mb={3}>
              <Grid container spacing={3}>
                  <Grid item xs={12} lg={6}>
                      {beachInfraData ? (
                          <ReportsBarChart
                              title="active users"
                              description={
                                  <>
                                      (<strong>+23%</strong>) than last week
                                  </>
                              }
                              items={[
                                  {
                                      icon: { color: "primary", component: "shower" },
                                      label: "샤워실",
                                      progress: { content: beachInfraData.beach_infra.shower_room },
                                  },
                                  {
                                      icon: { color: "success", component: "wc" },
                                      label: "화장실",
                                      progress: { content: beachInfraData.beach_infra.toilet },
                                  },
                                  {
                                      icon: { color: "warning", component: "checkroom" },
                                      label: "탈의실",
                                      progress: {
                                          content: beachInfraData.beach_infra.dressing_room,
                                      },
                                  },
                                  {
                                      icon: { color: "error", component: "water" },
                                      label: "분수대",
                                      progress: { content: beachInfraData.beach_infra.watch_tower },
                                  },
                                  {
                                      icon: { color: "info", component: "water_drop" },
                                      label: "수돗가",
                                      progress: { content: beachInfraData.beach_infra.tap_water },
                                  },
                              ]}
                          />
                      ) : (
                          <ReportsBarChart
                              title="active users"
                              description={
                                  <>
                                      (<strong>+23%</strong>) than last week
                                  </>
                              }
                              items={[
                                  {
                                      icon: { color: "primary", component: "shower" },
                                      label: "샤워실",
                                      progress: { content: 0 },
                                  },
                                  {
                                      icon: { color: "success", component: "wc" },
                                      label: "화장실",
                                      progress: { content: 0 },
                                  },
                                  {
                                      icon: { color: "warning", component: "checkroom" },
                                      label: "탈의실",
                                      progress: { content: 0 },
                                  },
                                  {
                                      icon: { color: "error", component: "water" },
                                      label: "분수대",
                                      progress: { content: 0 },
                                  },
                                  {
                                      icon: { color: "info", component: "water_drop" },
                                      label: "수돗가",
                                      progress: { content: 0 },
                                  },
                              ]}
                          />
                      )}
                  </Grid>
                  <Grid item xs={12} lg={6}>
                      {beachScoresData ? (
                          <ReportsBarChart
                              title="active users"
                              description={
                                  <>
                                      (<strong>+23%</strong>) than last week
                                  </>
                              }
                              items={[
                                  {
                                      icon: { color: "info", component: "water_drop" },
                                      label: "수질점수",
                                      progress: {
                                          content: beachScoresData.beach_score.water_score,
                                      },
                                  },
                                  {
                                      icon: { color: "success", component: "eco" },
                                      label: "토양점수",
                                      progress: {
                                          content: beachScoresData.beach_score.soil_score,
                                      },
                                  },
                                  {
                                      icon: { color: "warning", component: "store" },
                                      label: "시설점수",
                                      progress: {
                                          content: beachScoresData.beach_score.facility_score,
                                      },
                                  },
                                  {
                                      icon: { color: "primary", component: "waves" },
                                      label: "해파리 점수",
                                      progress: {
                                          content: beachScoresData.jellyfish_score.jellyfish_score,
                                      },
                                  },
                                  {
                                      icon: { color: "info", component: "cloud" },
                                      label: "강수량 점수",
                                      progress: {
                                          content: beachScoresData.rainfall_score.rain_score,
                                      },
                                  },
                              ]}
                          />
                      ) : (
                          <ReportsBarChart
                              title="active users"
                              description={
                                  <>
                                      (<strong>+23%</strong>) than last week
                                  </>
                              }
                              items={[
                                  {
                                      icon: { color: "info", component: "water_drop" },
                                      label: "수질점수",
                                      progress: { content: "0" },
                                  },
                                  {
                                      icon: { color: "success", component: "eco" },
                                      label: "토양점수",
                                      progress: { content: "0" },
                                  },
                                  {
                                      icon: { color: "warning", component: "store" },
                                      label: "시설점수",
                                      progress: { content: "0" },
                                  },
                                  {
                                      icon: { color: "primary", component: "waves" },
                                      label: "해파리 점수",
                                      progress: { content: "0" },
                                  },
                                  {
                                      icon: { color: "info", component: "cloud" },
                                      label: "강수량 점수",
                                      progress: { content: "0" },
                                  },
                              ]}
                          />
                      )}
                  </Grid>
              </Grid>
              {/* 
              <Grid container spacing={3}>
                  <Grid item xs={12} lg={6}>
                      <Card>
                          <SoftTypography variant="h6">기상예보 </SoftTypography>
                          {beachWeatherData && (
                              <>
                                  <SoftTypography variant="body2">
                                      풍향:{" "}
                                      {
                                          beachWeatherData.wind_direction[
                                              beachWeatherData.wind_direction.length - 1
                                          ].wind_direction
                                      }{" "}
                                      deg
                                  </SoftTypography>
                              </>
                          )}
                          <SoftTypography variant="h6">해수욕장 점수 </SoftTypography>
                          {beachScoresData && (
                              <>
                                  <SoftTypography variant="body2">
                                      수질점수: {beachScoresData.beach_score.water_score}
                                  </SoftTypography>
                                  <SoftTypography variant="body2">
                                      토양점수: {beachScoresData.beach_score.soil_score}
                                  </SoftTypography>
                                  <SoftTypography variant="body2">
                                      시설점수: {beachScoresData.beach_score.facility_score}
                                  </SoftTypography>
                              </>
                          )}
                      </Card>
                  </Grid>
                  <Grid item xs={12} lg={6} sx={{ position: "relative", ml: "auto" }}>
                      <SoftBox position="relative" width="100%" borderRadius="xl">
                          <CardMedia
                              src="https://images.unsplash.com/photo-1447878035468-f6464b327023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYzfHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                              // src="https://images.unsplash.com/photo-1520942702018-0862200e6873?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                              // src="https://images.unsplash.com/photo-1504321946642-8f661bf96ff0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                              // src="https://plus.unsplash.com/premium_photo-1681223447322-46794b8cdfd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                              component="img"
                              sx={{
                                  maxWidth: "100%",
                                  margin: 0,
                                  objectFit: "cover",
                                  objectPosition: "center",
                              }}
                          />
                      </SoftBox>
                  </Grid>
              </Grid> */}
          </SoftBox>
      );
  }    

BuildByDevelopers.propTypes = {
  selectedProfile: PropTypes.object,
  onCheckClick: PropTypes.func,
};

export default BuildByDevelopers;


//   return (
//     <Card>
//       <SoftBox p={2}>
//         <Grid container spacing={3}>
//           <Grid item xs={12} lg={6}>
//             {/* 클릭 시에만 ProfileInfoCard를 출력 */}
//             {showProfileInfo && selectedProfile ? (
//               // ProfileInfoCard 출력
//             <ProfileInfoCard
//               title="해운대 해수욕장"
//               description="해수욕장 설명"
//               info={{
//                 미세먼지: "보통",
//                 수온: "17.77",
//                 조위: "83",
//                 location: "South Korea",
//               }}
//               social={[]}
//               action={{ route: "", tooltip: "Edit Profile" }}
//             />
//             ) : null}
//               {/* 클릭 이벤트 버튼 */}
//               {/* {selectedProfile && selectedProfile.action.label === "check" && (
//               <button onClick={() => onCheckClick(selectedProfile)}>{selectedProfile.action.label}</button> */}
//             {/* )} */}
//           </Grid>
//           <Grid item xs={12} lg={6} sx={{ position: "relative", ml: "auto" }}>
//             <SoftBox position="relative" width="100%" 
//             // shadow="xl" 
//             borderRadius="xl">
//               <CardMedia
//                 src="https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
//                 component="img"
//                 // title="해운대"
//                 sx={{
//                   maxWidth: "100%",
//                   margin: 0,
//                 //   boxShadow: ({ boxShadows: { md } }) => md,
//                   objectFit: "cover",
//                   objectPosition: "center",
//                 }}
//               />
//             </SoftBox>
//           </Grid>
//         </Grid>
//       </SoftBox>
//     </Card>
//   );
// }

// // prop-types를 정의합니다.
// BuildByDevelopers.propTypes = {
//   selectedProfile: PropTypes.object, // selectedProfile은 객체여야 합니다.
//   onCheckClick: PropTypes.func, // onCheckClick은 함수여야 합니다.
// };

// export default BuildByDevelopers;
