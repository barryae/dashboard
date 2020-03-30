import { calendarData } from "../testData/calendarData"
import { radarData } from "../testData/radarData"
import { barData } from "../testData/barData"
import { lineData } from "../testData/lineData"
import { textData } from "../testData/textData"

export const graphObjects = [
    {
        title: "Calendar",
        order: 3,
        classes: "card",
        type: "ResponsiveCalendar",
        data: calendarData
    },
    {
        title: "Radar",
        order: 2,
        classes: "card",
        type: "ResponsiveRadar",
        data: radarData
    },
    {
        title: "Bar Graph",
        order: 1,
        classes: "card",
        type: "ResponsiveBar",
        data: barData
    },
    {
        title: "Line Graph",
        order: 4,
        classes: "card",
        type: "ResponsiveLine",
        data: lineData
    },
    {
        title: "Text",
        order: 5,
        classes: "text",
        type: "Text",
        data: textData
    }
]
