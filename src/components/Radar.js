import { RadarChart,PolarGrid,Legend,PolarAngleAxis,PolarRadiusAxis,Radar} from "recharts";

function RadarGraph({data, color}){

    const renderedRadar=data["ids"]["Plots"].map((plot,index)=>{
        return <Radar key={index} name={index} dataKey={plot} stroke={color[index]} fill={color[index]} fillOpacity={0.6} />
    });

    return (
        <RadarChart outerRadius={90} width={730} height={250} data={data.values}>
            <PolarGrid />
            <PolarAngleAxis dataKey={data.ids.XAxis} />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            {renderedRadar}
            <Legend />
        </RadarChart>
    );
}

export default RadarGraph;