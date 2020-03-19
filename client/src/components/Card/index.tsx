import * as React from "react";
import { ResponsiveCalendar } from "nivo"

export default function Card(props: { type: string; data: { "day": string; "value": number; }[] }) {
    function createCard(type: string, data: { "day": string; "value": number; }[]) {

        switch (type) {
            case 'ResponsiveCalendar':
                return <ResponsiveCalendar
                    data={data}
                    from="2015-03-01"
                    to="2016-07-12"
                    emptyColor="#eeeeee"
                    colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
                    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                    yearSpacing={40}
                    monthBorderColor="#ffffff"
                    dayBorderWidth={2}
                    dayBorderColor="#ffffff"
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'row',
                            translateY: 36,
                            itemCount: 4,
                            itemWidth: 42,
                            itemHeight: 36,
                            itemsSpacing: 14,
                            itemDirection: 'right-to-left'
                        }
                    ]}
                />
                break;
        }
    }

    return (
        <div className="chart-parent">
            {createCard(props.type, props.data)}
        </div>
    )

}