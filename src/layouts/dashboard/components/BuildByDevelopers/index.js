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

// function BuildByDevelopers() {
//   // 클릭 이벤트를 위한 상태값 추가
//   const [showProfileInfo, setShowProfileInfo] = useState(false);

//   // 클릭 이벤트 처리 함수
//   const handleCheckClick = () => {
//     setShowProfileInfo(!showProfileInfo);
//   };
  function BuildByDevelopers({ selectedProfile, onCheckClick }) {
    const [beachWeatherData, setBeachWeatherData] = useState(null);
    const [beachInfraData, setBeachInfraData] = useState(null);
    const [beachScoresData, setBeachScoresData] = useState(null);
    const [showProfileInfo, setShowProfileInfo] = useState(false);
    
    useEffect(() => {
      // 각각의 API를 호출하여 데이터를 가져옵니다.
      axios.get(`${process.env.REACT_APP_API_URL}/beach-weather/<int:beach_id>`)
          .then((res) => setBeachWeatherData(res.data))
          .catch((error) => console.log(error));

      axios.get(`${process.env.REACT_APP_API_URL}/beach-infra/<int:beach_id>`)
          .then((res) => setBeachInfraData(res.data))
          .catch((error) => console.log(error));

      axios.get(`${process.env.REACT_APP_API_URL}/beach-scores/<int:beach_id>`)
          .then((res) => setBeachScoresData(res.data))
          .catch((error) => console.log(error));
  }, []);

  // const handleWeatherCardClick = () => {
  //   setShowWeatherCard(!showWeatherCard);
  // };

  // const handleInfraCardClick = () => {
  //   setShowInfraCard(!showInfraCard);
  // };

  // const handleScoresCardClick = () => {
  //   setShowScoresCard(!showScoresCard);
  // };
    // const handleCheckClick = () => {
    //   setShowProfileInfo(!showProfileInfo);
    // };

    // console.log(apiData); // You can access the API data using the 'apiData prop here


    return (
      <Card>
        <SoftBox p={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              {showProfileInfo && selectedProfile ? (
                <Card>
                  <SoftTypography variant="h6">기상예보</SoftTypography>
                  <SoftTypography variant="body2">
                    풍속: {beachWeatherData.wind_speed}
                  </SoftTypography>
                  <SoftTypography variant="body2">
                    온도: {beachWeatherData.max_temperature}
                  </SoftTypography>
                  <SoftTypography variant="body2">
                    파고: {beachWeatherData.wave_height}
                  </SoftTypography>
                  <SoftTypography variant="body2">
                    풍향: {beachWeatherData.wind_direction}
                  </SoftTypography>
                  <SoftTypography variant="h6">주변시설 정보</SoftTypography>
                  <SoftTypography variant="body2">
                    샤워장: {beachInfraData.shower_room}
                  </SoftTypography>
                  <SoftTypography variant="body2">
                    화장실: {beachInfraData.toilet}
                  </SoftTypography>
                  <SoftTypography variant="body2">
                    탈의실: {beachInfraData.dressing_room}
                  </SoftTypography>
                  <SoftTypography variant="body2">
                    망루대: {beachInfraData.watch_tower}
                  </SoftTypography>
                  <SoftTypography variant="body2">
                    공동수도: {beachInfraData.tap_water}
                  </SoftTypography>
                  <SoftTypography variant="h6">해수욕장 점수</SoftTypography>
                  <SoftTypography variant="body2">
                    수질점수: {beachInfraData.water_score}
                  </SoftTypography>
                  <SoftTypography variant="body2">
                    토양점수: {beachInfraData.soil_score}
                  </SoftTypography>
                  <SoftTypography variant="body2">
                    시설점수: {beachInfraData.facility_score}
                  </SoftTypography>
                </Card>
              ) : null}
            </Grid>
            <Grid item xs={12} lg={6} sx={{ position: "relative", ml: "auto" }}>
              <SoftBox position="relative" width="100%" borderRadius="xl">
                <CardMedia
                  src="https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
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
          </Grid>
        </SoftBox>
      </Card>
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
