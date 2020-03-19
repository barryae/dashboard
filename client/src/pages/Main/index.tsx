import React from "react";
import { data } from "../../testData/calendarData"
import Card from "../../components/Card"

export default function Main() {

    return (
        <div className="main">
            <h1>Main</h1>
            <Card type={"ResponsiveCalendar"} data={data} />
        </div>
    )

}

