import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

function LineGraph({data, color}){

    const renderedLine=data["ids"]["Plots"].map((plot,index)=>{
        return <Line key={index} type="monotone" dataKey={plot} stroke={color[index]} />
    });

    return (
        <LineChart width={730} height={250} data={data.values}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subject" />
            <YAxis />
            <Tooltip />
            <Legend />
            {renderedLine}
        </LineChart>
    );
}

export default LineGraph;