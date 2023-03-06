import { useState } from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPage(){
    const [selection,setSelection]=useState(null);

    const handleSelection=(opt)=>{
        setSelection(opt);
    }

    const options=[
        {
            label:'Red',
            value:'Red'
        },
        {
            label:'Blue',
            value:'Blue'
        },
        {
            label:'Yellow',
            value:'Yellow'
        },
        {
            label:'Green',
            value:'Green'
        },
    ]
    return <div>
        <Dropdown options={options} value={selection} onChange={handleSelection} />
    </div>;
};

export default DropdownPage;