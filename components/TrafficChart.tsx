"use client"

import {
Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend
} from "chart.js"

import { Line } from "react-chartjs-2"

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend
)

export default function TrafficChart(){

const data = {
labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
datasets:[
{
label:"Traffic",
data:[120,210,150,280,350,420,500],
borderColor:"#22c55e",
backgroundColor:"#22c55e"
}
]
}

return(

<div style={{
background:"#1e293b",
padding:"20px",
borderRadius:"10px"
}}>

<h3>Traffic Growth</h3>

<Line data={data} />

</div>

)

}
