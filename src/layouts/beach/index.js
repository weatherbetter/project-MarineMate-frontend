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
import React, { useEffect, useState } from "react";
import axios from "axios";
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import markerRed from "assets/marker_red.png";
import markerGreen from "assets/marker_green.png";
import markerYellow from "assets/marker_yellow.png";
import markerBlue from "assets/marker_blue.png";
import jellyfish from "./data/jellyfish.js";
import DotLoader from "react-spinners/DotLoader";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";

function recommendBeachList(response, func) {
    const beachList = response.map((data, index) => {
        return {
            id: index,
            name: data.beach_name,
            rainfall_score: data.rainfall_score,
            jellyfish_score: data.jellyfish_score,
            beach_score: data.beach_score,
            action: {
                color: "info",
                label: "check",
                click: func,
            },
        };
    });

    return beachList;
}

function Beach() {
    const [jellyfishScore, setJellyfishScore] = useState({});
    const [safetyCount, setSafetyCount] = useState({
        "Fire Station": 0,
        "Safety Center": 0,
        "Pumbulance": 0,
    });
    useEffect(() => {
            axios.get(`${process.env.REACT_APP_API_URL}/jellyfish`)
            .then((res) => {setJellyfishScore(res.data)})
            .catch((error) => {});
    }, []);

    const guideSelect = {
        beach_name: "지역을 선택해주세요.",
        rainfall_score: 0,
        jellyfish_score: 0,
        beach_score: 0,
    };
    const [recommendBeach, setRecommendBeach] = React.useState([
        guideSelect,
        guideSelect,
        guideSelect,
    ]);
    const [loading, setLoading] = React.useState(false);
    const handleBeach = (e) => {
        // console.log(e.target.dataset.name);
        // axios 동작 추가
    };

    const profilesListData = recommendBeachList(recommendBeach, handleBeach);

    // const [data, setData] = useState([]);
    // const [locations_specific, setLocationSpecific] = useState([]);
    // const [locations_specific2, setLocationSpecific2] = useState([]);
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);

    // 윗쪽 지도 데이터
    // useEffect(() => {
    //     axios.get('h')
    //         .then(res => {
    //             console.log(res.data);
    //             setLocationSpecific(res.data);
    //         })
    //         .catch(error => console.log(error));
    // }, []);

    // 구급인프라
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/safety?location=부산광역시`)
            .then((res) => {
                // console.log(res.data);
                setData(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    // 아랫쪽 지도 데이터
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/equipment`)
            .then((res) => {
                // console.log(res.data);
                setData2(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    // useEffect(() => {
    //     setLocationSpecific(data);
    // }, [data])
    // 마커 정보를 사용하여 지도에 마커 표시 등의 작업 수행
    // ...
    const locations_specific = jellyfish; // const locations_specific = data;//
    const locations_specific2 = data2;

    // // State to hold the selected profile data
    const [selectedProfile, setSelectedProfile] = useState(null);

    // // 클릭 이벤트 처리 함수
    const handleCheckClick = (profile) => {
        // Toggle the visibility of ProfileInfoCard
        setSelectedProfile((prevProfile) => (prevProfile !== profile ? profile : null));
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
                        style={
                            {
                                // padding: "5px",
                                // // color: "red",
                                // borderRadius: "10px",
                                // backgroundColor: "#fff",
                            }
                        }
                    >
                        {content}
                    </div>
                )}
            </MapMarker>
        );
    };

    const markers = locations_specific.map((location) => {
        if (!location || !location.space) {
            return [];
        }
        const { area, space } = location;
        const score = jellyfishScore[area];

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

    const markers2 = locations_specific2.map((location1, index) => (
        <MapMarker
            key={index}
            position={{ lat: location1.equipment_long, lng: location1.equipment_lat }}
            // image={{
            //     src: markerBlue,
            //     size: {
            //         width: 24,
            //         height: 35,
            //     },
            // }}
            title={location1.spot}
        />
    ));

    // const spaceMarkers = space.map((loc) => {
    //     console.log(loc);
    //     return (
    //         <EventMarkerContainer
    //             key={`EventMarkerContainer-${loc.latlng.lat}-${loc.latlng.lng}`}
    //             position={loc.latlng}
    //             content={loc.title}
    //             markerSrc={markerSrc}
    //         />
    //     );
    // });
    // return spaceMarkers;

    useEffect(() => {}, []);

    return (
        <DashboardLayout>
            <Header
                setRecommendBeach={setRecommendBeach}
                setLoading={setLoading}
                setSafetyCount={setSafetyCount}
            />
            <SoftBox mt={5} mb={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} xl={7}>
                        <Card>
                            <Map
                                center={{ lat: 36, lng: 128.043 }}
                                style={{ width: "100%", height: "500px" }}
                                level={13}
                            >
                                {markers}
                                {/* {markers.length > 0 && markers} */}
                            </Map>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} xl={5}>
                        <ProfilesList
                            title="해수욕장 추천 리스트"
                            profiles={profilesListData}
                            loading={loading}
                        />
                    </Grid>
                </Grid>
            </SoftBox>
            <SoftBox mb={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4} xl={4}>
                        <MiniStatisticsCard
                            title={{ text: "소방서 수" }}
                            count={safetyCount["Fire Station"]}
                            percentage={{ color: "success" }}
                            icon={{ color: "info", component: "fire_truck" }}
                            iconColor="error"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} xl={4}>
                        <MiniStatisticsCard
                            title={{ text: "안전센터 수" }}
                            count={safetyCount["Safety Center"]}
                            percentage={{ color: "success" }}
                            icon={{ color: "info", component: "local_hospital" }}
                            iconColor="info"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} xl={4}>
                        <MiniStatisticsCard
                            title={{ text: "펌뷸런스 수" }}
                            count={safetyCount["Pumbulance"]}
                            percentage={{ color: "success" }}
                            icon={{
                                color: "info",
                                component: "airport_shuttle",
                            }}
                            iconColor="success"
                        />
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

            <SoftBox mb={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={12}>
                        {/* Pass the selected profile data to the BuildByDevelopers component */}
                        <BuildByDevelopers beach_id={beach_id} 
                        selectedProfile={selectedProfile} onCheckClick={handleCheckClick} />
                    </Grid>
                </Grid>
            </SoftBox>

            <SoftBox mt={5} mb={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={12}>
                        <Card>
                            <Map
                                center={{ lat: 36, lng: 128.043 }}
                                style={{ width: "100%", height: "600px" }}
                                level={13}
                            >
                                {markers2}
                                {/* 조건부 렌더링을 이용하여 마커 표시 */}
                                {/* {markers2.length > 0 && markers2 } */}
                                {/* {markers2.length > 0 ? markers2 : <></>} */}
                            </Map>
                        </Card>
                    </Grid>
                </Grid>
            </SoftBox>
        </DashboardLayout>
    );
}

export default Beach;
