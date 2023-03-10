import { useState } from 'react';
import Dropdown from './Dropdown';
import AreaGraph from './Area';
import BarGraph from './Bar';
import LineGraph from './Line';
import PieGraph from './Pie';
import RadarGraph from './Radar';
import data from '../data2.json';

function GraphEdit(){
    const [selection,setSelection]=useState(null);
    const [impl,setImpl]=useState(null);

    const handleSelection=(opt)=>{
        setSelection(opt);
        setImpl(opt.config());
    }

    const color=["#CB4335","#7D3C98","#2E86C1","#138D75","#28B463"];

    const options=[
        {
            label:'Area',
            value:'Area',
            config:()=>{ console.log(data);
                return <AreaGraph data={data} color={color}/>;}
        },
        {
            label:'Bar',
            value:'Bar',
            config:()=>{return <BarGraph data={data} color={color}></BarGraph>;}
        },
        {
            label:'Line',
            value:'Line',
            config:()=>{return <LineGraph data={data} color={color}/>;}
        },
        {
            label:'Pie',
            value:'Pie',
            config:()=>{return <PieGraph data={data} color={color}/>;}
        },
        {
            label:'Radar',
            value:'Radar',
            config:()=>{return <RadarGraph data={data} color={color}/>;}
        }
    ]

    
    console.log(selection);

    return (<div className='flex'>
            <Dropdown options={options} value={selection} onChange={handleSelection} />
            {impl}
    </div>);
}

export default GraphEdit;