import { BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar} from "recharts";

import './Bar.css';

function BarGraph({data, color}){
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="label">{`${label}`}</p>
              <hr />
              <p>{`${payload[0].value}/150`}</p>
              <p>{`${payload[1].value}/150`}</p>
              <p>{"A and B represent the marks obtained"}</p>
            </div>
          );
        }
      
        return null;
      };

    const renderedBar=data["ids"]["Plots"].map((plot,index)=>{
        return <Bar key={index} dataKey={plot} fill={color[index]} />
    });
      
    return (
        <BarChart width={730} height={250} data={data.values}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subject" />
            <YAxis />
            {<Tooltip content={<CustomTooltip />} />}
            <Legend />
            {renderedBar}
        </BarChart>
    );
}

export default BarGraph;