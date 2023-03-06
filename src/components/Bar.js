import { BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar} from "recharts";

function BarGraph({data}){
    return (
        <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subject" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="A" fill="#8884d8" />
            <Bar dataKey="B" fill="#82ca9d" />
        </BarChart>
    );
}

export default BarGraph;