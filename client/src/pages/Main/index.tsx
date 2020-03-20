import React from "react";
import { calendarData } from "../../testData/calendarData"
import { radarData } from "../../testData/radarData"
import { barData } from "../../testData/barData"
import Card from "../../components/Card"

export default function Main() {

    return (
        <div className="main">
            <h1>Operational Dashboard</h1>
            <Card type={"ResponsiveCalendar"} data={calendarData} />
            <Card type={"ResponsiveRadar"} data={radarData} />
            <Card type={"ResponsiveBar"} data={barData} />
        </div>
    )

}

