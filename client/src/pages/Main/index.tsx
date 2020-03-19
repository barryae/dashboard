import React from "react";
import { calendarData } from "../../testData/calendarData"
import { radarData } from "../../testData/radarData"
import Card from "../../components/Card"

export default function Main() {

    return (
        <div className="main">
            <h1>Main</h1>
            <Card type={"ResponsiveRadar"} data={radarData} />
            <Card type={"ResponsiveCalendar"} data={calendarData} />
        </div>
    )

}

