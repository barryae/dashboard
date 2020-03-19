import * as React from "react";
import { ResponsiveCalendar } from "nivo"
import { ResponsiveRadar } from "nivo"

export default function Card(props: { type: string; data: any[] }) {
    function createCard(type: string, data: any[]) {

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
            case 'ResponsiveRadar':
                return <ResponsiveRadar
                    data={data}
                    keys={['chardonay', 'carmenere', 'syrah']}
                    indexBy="taste"
                    maxValue="auto"
                    margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                    curve="linearClosed"
                    borderWidth={2}
                    gridLevels={5}
                    gridShape="circular"
                    gridLabelOffset={36}
                    enableDots={true}
                    dotSize={10}
                    dotBorderWidth={2}
                    dotBorderColor='#97e3d5'
                    enableDotLabel={true}
                    dotLabel="value"
                    dotLabelYOffset={-12}
                    colors={{ scheme: 'nivo' }}
                    fillOpacity={0.25}
                    blendMode="multiply"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    isInteractive={true}
                    legends={[
                        {
                            anchor: 'top-left',
                            direction: 'column',
                            translateX: -50,
                            translateY: -40,
                            itemWidth: 80,
                            itemHeight: 20,
                            itemTextColor: '#999',
                            symbolSize: 12,
                            symbolShape: 'circle',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000'
                                    }
                                }
                            ]
                        }
                    ]}
                />
        }
    }

    return (
        <div className="chart-parent">
            {createCard(props.type, props.data)}
        </div>
    )

}