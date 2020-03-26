import React from "react";
import { calendarData } from "../../testData/calendarData"
import { radarData } from "../../testData/radarData"
import { barData } from "../../testData/barData"
import { lineData } from "../../testData/lineData"
import { textData } from "../../testData/textData"
import Card from "../../components/Card"

export default function Main() {

    return (
        <div className="main">
            <h1>Operational Dashboard</h1>
            <div className="card-layout">
                <Card order={3} type={"ResponsiveCalendar"} data={calendarData} />
                <Card order={2} type={"ResponsiveRadar"} data={radarData} />
                <Card order={1} type={"ResponsiveBar"} data={barData} />
                <Card order={4} type={"ResponsiveLine"} data={lineData} />
                <Card order={5} type={"Text"} data={textData} />
            </div>
        </div>
    )

}

