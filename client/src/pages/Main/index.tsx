import React from "react";
import Card from "../../components/Card"

export default function Main() {
    return (
        <div>
            <h1>Main</h1>
            <Card type={"type"} data={["Hey", "You"]} />
        </div>
    )
}