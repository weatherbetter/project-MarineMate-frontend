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
import SoftBadge from "components/SoftBadge";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ProfilesList from "examples/Lists/ProfilesList";

// Overview page components
import Header from "layouts/beach/components/Header";

// Images
import borders from "assets/theme/base/borders";
import geojson from "assets/SIDO_MAP_2022.json";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import markerRed from "assets/marker_red.png";
import markerGreen from "assets/marker_green.png";
import markerYellow from "assets/marker_yellow.png";
import jellyfish from "./data/jellyfish.js"
function Beach() {
    // apiURL 선언
    // const apiUrl = "http://your-django-server-address/equipment/";
    // const [apiData, setApitData] = useState([]); // 새로운 마커 정보 

    // useEffect(() => {
    //     // 데이터요청
    //     axios.get(apiUrl)
    //         .then((response)) => {
    //             //받아온 데이터 처리 로직 작성
    //             const data = response.data;
    //             setApitData(data); // 받아온 데이터를 상태에 저장
    //         })
    //         .catch(error) => {
    //             console.error(error);
    //         });
    // }, []);

    // const MapComponent = () => {
    //     const [apiDataEquipment, setApiDataEquipment] = useState([]);
      
    //     useEffect(() => {
    //       // 장고 API 엔드포인트 주소
    //       const apiUrl = 'http://marinemate-eb-drf-app-env.eba-iwkxc5nd.eu-west-2.elasticbeanstalk.com/equipment/';
      
    //       // 장고 API 호출
    //       axios.get(apiUrl)
    //         .then(response => {
    //           // API 응답 데이터를 가져와서 markers 상태에 설정
    //           setMarker(response.data);
    //         })
    //         .catch(error => {
    //           console.error('Error fetching data:', error);
    //         });
    //     }, [])};
      
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);

    // 윗쪽 지도 데이터
    useEffect(() => {
        axios.get('')
        .then(res => setData(res.data))
        .catch(error => console.log(error));
    }, [])

    // 아랫쪽 지도 데이터
    useEffect(() => {
        axios.get('')
        .then(res => setData2(res.data))
        .catch(error => console.log(error));
    }, [])


        // 마커 정보를 사용하여 지도에 마커 표시 등의 작업 수행
        // ...
    const locations_specific = jellyfish;   // const locations_specific = data;
    const locations_specific2 = jellyfish;  // const locations_specific2 = data2;

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

    // // State to hold the selected profile data
    const [selectedProfile, setSelectedProfile] = useState(null);

    // // 클릭 이벤트 처리 함수
    const handleCheckClick = (profile) => {
        // Toggle the visibility of ProfileInfoCard
        setSelectedProfile((prevProfile) => (prevProfile !== profile ? profile : null));
    };

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

    const EventMarkerContainer = ({ position, content, markerSrc }) => {
        const map = useMap();
        const [isVisible, setIsVisible] = useState(false);

        return (
            <MapMarker
                position={position}
                onClick={(marker) => map.panTo(marker.getPosition())}
                onMouseOver={() => setIsVisible(true)}
                onMouseOut={() => setIsVisible(false)}
                image={{
                    src: markerSrc,
                    size: { width: 15, height: 16 },
                }}
            >
                {isVisible && (
                    <div
                        style={{
                            // padding: "5px",
                            // // color: "red",
                            // borderRadius: "10px",
                            // backgroundColor: "#fff",
                        }}
                    >
                        {content}
                    </div>
                )}
            </MapMarker>
        );
    };

    const markers = locations_specific.map((location) => {
        const { area, space } = location;
        const score = scores[area];

        let markerSrc;

        if (score === 3) {
            markerSrc = markerRed;
        } else if (score === 2) {
            markerSrc = markerYellow;
        } else {
            markerSrc = markerGreen;
        }

        const spaceMarkers = space.map((loc) => (
            <EventMarkerContainer
                key={`EventMarkerContainer-${loc.latlng.lat}-${loc.latlng.lng}`}
                position={loc.latlng}
                content={loc.title}
                markerSrc={markerSrc}
            />
        ));
        return spaceMarkers;
    });

    const markers2 = locations_specific2.map((location) => {
        const { area, space } = location;
        const score = scores[area];

        let markerSrc;

        if (score === 3) {
            markerSrc = markerRed;
        } else if (score === 2) {
            markerSrc = markerYellow;
        } else {
            markerSrc = markerGreen;
        }

        const spaceMarkers = space.map((loc) => (
            <EventMarkerContainer
                key={`EventMarkerContainer-${loc.latlng.lat}-${loc.latlng.lng}`}
                position={loc.latlng}
                content={loc.title}
                markerSrc={markerSrc}
            />
        ));
        return spaceMarkers;
    });

    useEffect(() => {
     
    }, []);

    return (
        <DashboardLayout>
            <Header />
            <SoftBox mt={5} mb={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} xl={7}>
                        <Card>
                            <Map
                                center={{ lat: 36.564, lng: 128.043 }}
                                style={{ width: "800px", height: "600px" }}
                                level={13}
                            >
                                {markers}
                            </Map>
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
                        <Card>박스 추가</Card>
                    </Grid>
                </Grid>
            </SoftBox>

            <SoftBox mt={5} mb={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={12}>
                        <Card>
                            {/*
                            * 아래의 코드는 바로 실행되는 IIFE(즉시 실행 함수 표현식)를 사용합니다.
                            * 이렇게 하면 API를 호출할 때 비동기로 데이터를 받아올 수 있습니다.
                            * 받아온 데이터를 활용하는 로직은 .then()에서 처리합니다.
                            */}
                            {/* {(() => {
                                axios.get(apiUrl)
                                    .then((response) => {
                                        // 받아온 데이터 처리 로직 작성
                                        const data = response.data;
                                        // ...
                                    })
                                    .catch((error) => {
                                        console.error(error);
                                    });
                            })()} */}
                            
                            <Map
                                center={{ lat: 37.564, lng: 128.043 }}
                                style={{ width: "800px", height: "600px" }}
                                level={13}
                            >
                                {markers2}
                            </Map>
                        </Card>
                    </Grid>
                </Grid>
            </SoftBox>

            <SoftBox mb={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={12}>
                        {/* Pass the selected profile data to the BuildByDevelopers component */}
                        <BuildByDevelopers
                            selectedProfile={selectedProfile}
                            onCheckClick={handleCheckClick}
                        />
                    </Grid>
                </Grid>
            </SoftBox>
        </DashboardLayout>
    );
}

export default Beach;