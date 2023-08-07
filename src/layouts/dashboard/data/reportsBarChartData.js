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

const reportsBarChartData = {
    items: [
        {
            icon: { color: "primary", component: "library_books" },
            label: "샤워실",
            progress: { content: "3", percentage: 3 * 10 },
        },
        {
            icon: { color: "info", component: "touch_app" },
            label: "화장실",
            progress: { content: "0", percentage: 0 * 10 },
        },
        {
            icon: { color: "warning", component: "payment" },
            label: "탈의실",
            progress: { content: "0", percentage: 0 * 10 },
        },
        {
            icon: { color: "error", component: "extension" },
            label: "분수대",
            progress: { content: "1", percentage: 1 * 10 },
        },
        {
            icon: { color: "error", component: "extension" },
            label: "수돗가",
            progress: { content: "0"},
        },
    ],
};

export default reportsBarChartData;
