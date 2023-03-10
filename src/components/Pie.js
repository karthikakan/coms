import { PieChart,Pie} from "recharts";

function PieGraph({data, color}){

    const initialInnerRadius=0;
    const initialOuterRad=100/data["ids"]["Plots"].length;

    const renderedPie=data["ids"]["Plots"].map((plot,index)=>{
        return <Pie key={index}
                    data={data.values} dataKey={plot} subjectKey="subject" cx="50%" cy="50%"  
                    innerRadius={initialInnerRadius+(index*initialOuterRad)} 
                    outerRadius={initialOuterRad+(index*initialOuterRad)} 
                    fill={color[index]} label />
    });


    return (
        <PieChart width={730} height={250}>
            {renderedPie}
        </PieChart>
    );
}

export default PieGraph;