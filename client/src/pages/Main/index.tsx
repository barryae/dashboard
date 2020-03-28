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
            <div className="main-header">
                <h1>Dashboard</h1>
            </div>
            <div className="card-layout">
                <Card order={3} classes="card" type={"ResponsiveCalendar"} data={calendarData} />
                <Card order={2} classes="card" type={"ResponsiveRadar"} data={radarData} />
                <Card order={1} classes="card" type={"ResponsiveBar"} data={barData} />
                <Card order={4} classes="card" type={"ResponsiveLine"} data={lineData} />
                <Card order={5} classes="card text" type={"Text"} data={textData} />
            </div>
        </div>
    )

}

