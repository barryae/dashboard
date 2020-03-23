import React from "react";
import { calendarData } from "../../testData/calendarData"
import { radarData } from "../../testData/radarData"
import { barData } from "../../testData/barData"
import Card from "../../components/Card"

export default function Main() {

    return (
        <div className="main">
            <h1>Operational Dashboard</h1>
            <Card order={1} type={"ResponsiveCalendar"} data={calendarData} />
            <Card order={2} type={"ResponsiveRadar"} data={radarData} />
            <Card order={3} type={"ResponsiveBar"} data={barData} />
        </div>
    )

}

