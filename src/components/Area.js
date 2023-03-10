import {
    AreaChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Area
  } from "recharts";

function AreaGraph({data,color}){

    const renderedLinearGradient=data["ids"]["Plots"].map((plot,index)=>{
        return <linearGradient id={plot} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color[index]} stopOpacity={0.8}/>
            <stop offset="95%" stopColor={color[index]} stopOpacity={0}/>
        </linearGradient>
    });

    const renderedFill=data["ids"]["Plots"].map((plot,index)=>{
        return "url(#"+plot+")";
    });

    const renderedArea=data["ids"]["Plots"].map((plot,index)=>{
        return <Area key={index} type="monotone" dataKey={plot} stroke={color[index]} fillOpacity={1} fill={renderedFill[index]} />
    });

    return(
        <div>
            <AreaChart width={730} height={250} data={data.values}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
                {renderedLinearGradient}
            </defs>
            <XAxis dataKey="Subject" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            {renderedArea}
        </AreaChart>
        </div>
        
    );
}

export default AreaGraph;
