import {
    AreaChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Area
  } from "recharts";

function AreaGraph({data}){
    return(
        <div>
            <AreaChart width={730} height={250} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="black" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="black" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="red" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="red" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="Subject" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="A" stroke="black" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="B" stroke="red" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
        </div>
        
    );
}

export default AreaGraph;

// import {
//     AreaChart,
//     Area,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     ResponsiveContainer
//   } from "recharts";

//   export default function Chart({data}) {
//     return (
//       <ResponsiveContainer width="99%" height="99%">
//         <AreaChart
//           data={data}
//           margin={{
//             top: 10,
//             right: 30,
//             left: 0,
//             bottom: 0
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="subject" />
//           <YAxis />
//           <Tooltip />
//           <Area
//             type="monotone"
//             dataKey="A"
//             stackId="1"
//             stroke="#8884d8"
//             fill="#8884d8"
//           />
//           <Area
//             type="monotone"
//             dataKey="B"
//             stackId="1"
//             stroke="#82ca9d"
//             fill="#82ca9d"
//           />
//           <Area
//             type="monotone"
//             dataKey="fullMark"
//             stackId="1"
//             stroke="#ffc658"
//             fill="#ffc658"
//           />
//         </AreaChart>
//       </ResponsiveContainer>
//     );
//   }
