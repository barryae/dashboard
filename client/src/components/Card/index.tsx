import * as React from "react";

export default function Card(props: { type: string; data: string[] }) {
    function createCard(type: string, data: string[]) {
        return type + data;
    }

    return (
        <div>
            {createCard(props.type, props.data)}
        </div>
    )

}