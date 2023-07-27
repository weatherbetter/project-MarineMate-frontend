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
import React, { useState } from  "react";
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
    const [showProfileInfo, setShowProfileInfo] = useState(false);
  
    const handleCheckClick = () => {
      setShowProfileInfo(!showProfileInfo);
    };




  return (
    <Card>
      <SoftBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            {/* 클릭 시에만 ProfileInfoCard를 출력 */}
            {showProfileInfo && selectedProfile ? (
              // ProfileInfoCard 출력
            <ProfileInfoCard
              title="해운대 해수욕장"
              description="해수욕장 설명"
              info={{
                미세먼지: "보통",
                수온: "17.77",
                조위: "83",
                location: "South Korea",
              }}
              social={[]}
              action={{ route: "", tooltip: "Edit Profile" }}
            />
            ) : null}
              {/* 클릭 이벤트 버튼 */}
              {/* {selectedProfile && selectedProfile.action.label === "check" && (
              <button onClick={() => onCheckClick(selectedProfile)}>{selectedProfile.action.label}</button> */}
            {/* )} */}
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

// prop-types를 정의합니다.
BuildByDevelopers.propTypes = {
  selectedProfile: PropTypes.object, // selectedProfile은 객체여야 합니다.
  onCheckClick: PropTypes.func, // onCheckClick은 함수여야 합니다.
};

export default BuildByDevelopers;
