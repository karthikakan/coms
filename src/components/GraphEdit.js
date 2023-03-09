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

    const options=[
        {
            label:'Area',
            value:'Area',
            config:()=>{return <AreaGraph data={data["data"]}/>;}
        },
        {
            label:'Bar',
            value:'Bar',
            config:()=>{return <BarGraph data={data}></BarGraph>;}
        },
        {
            label:'Line',
            value:'Line',
            config:()=>{return <LineGraph data={data}/>;}
        },
        {
            label:'Pie',
            value:'Pie',
            config:()=>{return <PieGraph data={data}/>;}
        },
        {
            label:'Radar',
            value:'Radar',
            config:()=>{return <RadarGraph data={data}/>;}
        }
    ]

    
    console.log(selection);

    return (<div className='flex'>
            <Dropdown options={options} value={selection} onChange={handleSelection} />
            {impl}
    </div>);
}

export default GraphEdit;