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

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ProfilesList from "examples/Lists/ProfilesList";

// Overview page components
import Header from "layouts/beach/components/Header";

// Images
import borders from "assets/theme/base/borders";
import geojson from "assets/SIDO_MAP_2022.json";
import React, { useEffect, useState } from "react";

import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";

function Beach() {
    const { kakao } = window;
    const { borderWidth, borderColor } = borders;
    const handleBeach = (e) => {
        console.log(e.target.dataset.name);
        // axios 동작 추가
    };
    const profilesListData = [
        {
            id: 1, 
            name: "해운대 해수욕장",
            description: "Hi! I need more information..",
            action: {
                color: "info",
                label: "check",
                click: handleBeach,
            },
        },
        {
            id: 2, 
            name: "강원도 해수욕장",
            description: "Awesome work, can you..",
            action: {
                color: "info",
                label: "check",
                click: handleBeach,
            },
        },
    ];

    // State to hold the selected profile data
    const [selectedProfile, setSelectedProfile] = useState(null);

    // 클릭 이벤트 처리 함수
    const handleCheckClick = (profile) => {
        // Toggle the visibility of ProfileInfoCard
        setSelectedProfile((prevProfile) => (prevProfile !== profile ? profile : null));
    };

    useEffect(() => {
        let data = geojson.features;
        let coordinates = []; //좌표 저장 배열
        let name = ""; //행정구 이름

        let polygons = [];

        const mapContainer = document.getElementById("map");
        const mapOption = {
            center: new kakao.maps.LatLng(36.564, 128.043),
            level: 13,
        };
        const map = new kakao.maps.Map(mapContainer, mapOption);

        const scores = {
            부산광역시: 2,
            인천광역시: 3,
            강원도: 2,
            경상북도: 1,
            충청남도: 2,
            전라남도: 2,
            제주특별자치도: 2,
            경상남도: 2,
            전라북도: 2,
            울산광역시: 1,
        };

        const displayMultiPolygon = (multiCoordinates, name) => {
            multiCoordinates.forEach((coordinates) => {
                const path = coordinates[0].map(
                    (coordinate) => new kakao.maps.LatLng(coordinate[1], coordinate[0])
                );

                let fillColor = "#fff";
                if (scores[name]) {
                    if (scores[name] == 3) {
                        fillColor = "#FF0000"; // 빨간색
                    } else if (scores[name] == 2) {
                        fillColor = "#FFFF00"; // 노란색
                    } else if (scores[name] == 1) {
                        fillColor = "#24df1a"; // 초록색
                    }
                }

                const polygon = new kakao.maps.Polygon({
                    map: map,
                    path: path,
                    strokeWeight: 1,
                    strokeColor: "#fff",
                    strokeOpacity: 0.8,
                    strokeStyle: "solid",
                    fillColor: fillColor,
                    fillOpacity: 0.7,
                });
                polygons.push(polygon);
            });
        };

        const displayArea = (coordinates, name) => {
            let path = [];
            let points = [];

                let fillColor = "#fff";
                if (scores[name]) {
                    if (scores[name] == 3) {
                        fillColor = "#FF0000"; // 빨간색
                    } else if (scores[name] == 2) {
                        fillColor = "#FFFF00"; // 노란색
                    } else if (scores[name] == 1) {
                        fillColor = "#24df1a"; // 초록색
                    }
                }

            coordinates[0].forEach((coordinate) => {
                let point = {};
                point.x = coordinate[1];
                point.y = coordinate[0];
                points.push(point);
                path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));
            });

            let polygon = new kakao.maps.Polygon({
                map: map,
                path: path, // 그려질 다각형의 좌표 배열입니다
                strokeWeight: 2, // 선의 두께입니다
                strokeColor: "#fff", // 선의 색깔입니다
                strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                strokeStyle: "solid", // 선의 스타일입니다
                fillColor: fillColor, // 채우기 색깔입니다
                fillOpacity: 0.7, // 채우기 불투명도 입니다
            });

            polygons.push(polygon);
        };

        data.forEach((val) => {
            coordinates = val.geometry.coordinates;
            name = val.properties.CTP_KOR_NM;

            if (val.geometry.type === "Polygon") {
                displayArea(coordinates, name);
            } else if (val.geometry.type === "MultiPolygon") {
                displayMultiPolygon(coordinates, name);
            }
        });
    }, []);

    return (
        <DashboardLayout>
            <Header />
            <SoftBox mt={5} mb={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} xl={7}>
                        <Card>
                            <div id="map" style={{ width: "100%", height: "400px" }}></div>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} xl={5}>
                        <ProfilesList title="해수욕장 추천 리스트" profiles={profilesListData} />
                    </Grid>
                </Grid>
            </SoftBox>
            <SoftBox mt={5} mb={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={12}>
                        <Card>
                            박스 추가
                        </Card>
                    </Grid>
                </Grid>
            </SoftBox>
            <SoftBox mb={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={12}>
                    {/* Pass the selected profile data to the BuildByDevelopers component */}
                    <BuildByDevelopers selectedProfile={selectedProfile} onCheckClick={handleCheckClick} />
                    </Grid>
                </Grid>
            </SoftBox>
        </DashboardLayout>
    );
}

export default Beach;
