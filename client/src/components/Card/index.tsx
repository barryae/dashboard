import * as React from "react";
import { ResponsiveCalendar, ResponsiveRadar, ResponsiveBar } from "nivo"


export default function Card(props: { order: number; type: string; data: any[] }) {
    function createCard(order: number, type: string, data: any[]) {

        switch (type) {
            case 'ResponsiveCalendar':
                return (
                    <div className={'card-' + order}>
                        <ResponsiveCalendar
                            data={data}
                            from="2015-03-01"
                            to="2016-07-12"
                            emptyColor="#eeeeee"
                            colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
                            margin={{ top: 40, right: 0, bottom: 0, left: 40 }}
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
                    </div>)
            case 'ResponsiveRadar':
                return (
                    <div className={'card-' + order}>
                        <ResponsiveRadar
                            data={data}
                            keys={['chardonay', 'carmenere', 'syrah']}
                            indexBy="taste"
                            maxValue="auto"
                            margin={{ top: 40, right: 10, bottom: 30, left: 10 }}
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
                            colors={['#61cdbb', '#97e3d5', '#f47560']}
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
                                    translateX: 50,
                                    translateY: 50,
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
                    </div >
                )
            case 'ResponsiveBar':
                return (
                    <div className={'card-' + order}>
                        <ResponsiveBar
                            data={data}
                            keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
                            indexBy="country"
                            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                            padding={0.3}
                            colors={{ scheme: 'nivo' }}
                            defs={[
                                {
                                    id: 'dots',
                                    type: 'patternDots',
                                    background: 'inherit',
                                    color: '#38bcb2',
                                    size: 4,
                                    padding: 1,
                                    stagger: true
                                },
                                {
                                    id: 'lines',
                                    type: 'patternLines',
                                    background: 'inherit',
                                    color: '#eed312',
                                    rotation: -45,
                                    lineWidth: 6,
                                    spacing: 10
                                }
                            ]}
                            fill={[
                                {
                                    match: {
                                        id: 'fries'
                                    },
                                    id: 'dots'
                                },
                                {
                                    match: {
                                        id: 'sandwich'
                                    },
                                    id: 'lines'
                                }
                            ]}
                            // borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                            axisTop={null}
                            axisRight={null}
                            axisBottom={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: 'country',
                                legendPosition: 'middle',
                                legendOffset: 32
                            }}
                            axisLeft={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: 'food',
                                legendPosition: 'middle',
                                legendOffset: -40
                            }}
                            labelSkipWidth={12}
                            labelSkipHeight={12}
                            // labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                            legends={[
                                {
                                    dataFrom: 'keys',
                                    anchor: 'bottom-right',
                                    direction: 'column',
                                    justify: false,
                                    translateX: 120,
                                    translateY: 0,
                                    itemsSpacing: 2,
                                    itemWidth: 100,
                                    itemHeight: 20,
                                    itemDirection: 'left-to-right',
                                    itemOpacity: 0.85,
                                    symbolSize: 20,
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemOpacity: 1
                                            }
                                        }
                                    ]
                                }
                            ]}
                            animate={true}
                            motionStiffness={90}
                            motionDamping={15}
                        />
                    </div>
                )
        }
    }

    return (
        <div>
            {createCard(props.order, props.type, props.data)}
        </div>
    )

}