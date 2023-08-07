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
import LineChart from "layouts/beach/components/LineChart";

// Images
import React, { useEffect, useState } from "react";
import axios from "axios";
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import markerRed from "assets/marker_red.png";
import markerGreen from "assets/marker_green.png";
import markerYellow from "assets/marker_yellow.png";
import jellyfish from "./data/jellyfish.js";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";

function recommendBeachList(response, func) {
    const beachList = response.map((data, index) => {
        return {
            // id: index,
            id: data.beach_id,
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
        Pumbulance: 0,
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

    const [beach_id, setBeachId] = useState(null);

    const handleBeach = (e) => {
        setBeachId(e.target.dataset.id);
    };

    const profilesListData = recommendBeachList(recommendBeach, handleBeach);

    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [beachDetail, setBeachDetail] = useState(null);

    // 인명구조장비함
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/equipment`)
            .then((res) => {
                setData2(res.data);
            })
            .catch((error) => {});
    }, []);

    const locations_specific = jellyfish; // const locations_specific = data;//
    const locations_specific2 = data2;

    // // State to hold the selected profile data
    const [selectedProfile, setSelectedProfile] = useState(null);

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
            title={location1.spot}
        />
    ));

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
                            <SoftBox pt={2} px={2}>
                                <SoftTypography
                                    variant="h6"
                                    fontWeight="medium"
                                    textTransform="capitalize"
                                >
                                    {"해파리 출현 예측 지도"}
                                </SoftTypography>
                            </SoftBox>
                            <SoftBox p={2}>
                                <SoftBox
                                    component="ul"
                                    display="flex"
                                    flexDirection="column"
                                    p={0}
                                    m={0}
                                >
                                    <Map
                                        center={{ lat: 36, lng: 128.043 }}
                                        style={{ width: "100%", height: "500px" }}
                                        level={13}
                                    >
                                        {markers}
                                    </Map>
                                </SoftBox>
                            </SoftBox>
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
            <SoftBox mb={3}>
                <Grid container spacing={3}>
                    {beachDetail ? (
                        <>
                            <Grid item xs={12} sm={4} xl={4}>
                                <LineChart
                                    data={beachDetail.wind_speed}
                                    yAxisKey={"wind_speed"}
                                    label={"풍속"}
                                    color={"#00BFFF"}
                                ></LineChart>
                            </Grid>
                            <Grid item xs={12} sm={4} xl={4}>
                                <LineChart
                                    data={beachDetail.max_temperature}
                                    yAxisKey={"day_max_temp"}
                                    label={"낮 최고기온"}
                                    color={"#FA5858"}
                                ></LineChart>
                            </Grid>
                            <Grid item xs={12} sm={4} xl={4}>
                                <LineChart
                                    data={beachDetail.wave_height}
                                    yAxisKey={"wave_height"}
                                    label={"파고"}
                                    color={"#7401DF"}
                                ></LineChart>
                            </Grid>
                        </>
                    ) : (
                        <>
                            <Grid item xs={12} sm={4} xl={4}>
                                <LineChart
                                    data={[]}
                                    yAxisKey={"wind_speed"}
                                    label={"풍속"}
                                    color={"#00BFFF"}
                                ></LineChart>
                            </Grid>

                            <Grid item xs={12} sm={4} xl={4}>
                                <LineChart
                                    data={[]}
                                    yAxisKey={"day_max_temp"}
                                    label={"낮 최고기온"}
                                    color={"#FA5858"}
                                ></LineChart>
                            </Grid>
                            <Grid item xs={12} sm={4} xl={4}>
                                <LineChart
                                    data={[]}
                                    yAxisKey={"wave_height"}
                                    label={"파고"}
                                    color={"#7401DF"}
                                ></LineChart>
                            </Grid>
                        </>
                    )}
                </Grid>
            </SoftBox>
            <SoftBox mb={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={12}>
                        <BuildByDevelopers
                            beach_id={beach_id}
                            selectedProfile={selectedProfile}
                            setBeachDetail={setBeachDetail}
                        />
                    </Grid>
                </Grid>
            </SoftBox>
            <SoftBox mt={5} mb={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={12}>
                        <Card>
                            <SoftBox pt={2} px={2}>
                                <SoftTypography
                                    variant="h6"
                                    fontWeight="medium"
                                    textTransform="capitalize"
                                >
                                    {"인명구조 장비함 위치"}
                                </SoftTypography>
                            </SoftBox>
                            <SoftBox p={2}>
                                <SoftBox
                                    component="ul"
                                    display="flex"
                                    flexDirection="column"
                                    p={0}
                                    m={0}
                                >
                                    <Map
                                        center={{ lat: 36, lng: 128.043 }}
                                        style={{ width: "100%", height: "600px" }}
                                        level={13}
                                    >
                                        {markers2}
                                    </Map>
                                </SoftBox>
                            </SoftBox>
                        </Card>
                    </Grid>
                </Grid>
            </SoftBox>
        </DashboardLayout>
    );
}

export default Beach;
