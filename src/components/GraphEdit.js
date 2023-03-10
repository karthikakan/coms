import { useState } from 'react';
import Dropdown from './Dropdown';
import AreaGraph from './Area';
import BarGraph from './Bar';
import LineGraph from './Line';
import PieGraph from './Pie';
import RadarGraph from './Radar';

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
            config:()=>{return <AreaGraph data={data}/>;}
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

    const data = [
        {
          "subject": "Math",
          "A": 120,
          "B": 110,
          "fullMark": 150
        },
        {
          "subject": "Chinese",
          "A": 98,
          "B": 130,
          "fullMark": 150
        },
        {
          "subject": "English",
          "A": 86,
          "B": 130,
          "fullMark": 150
        },
        {
          "subject": "Geography",
          "A": 99,
          "B": 100,
          "fullMark": 150
        },
        {
          "subject": "Physics",
          "A": 85,
          "B": 90,
          "fullMark": 150
        },
        {
          "subject": "History",
          "A": 65,
          "B": 85,
          "fullMark": 150
        }
      ];

    console.log(selection);

    return (<div className='flex'>
            <Dropdown options={options} value={selection} onChange={handleSelection} />
            {impl}
    </div>);
}

export default GraphEdit;