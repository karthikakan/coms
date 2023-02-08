import { useState } from "react";
import { VscArrowDown, VscArrowLeft } from "react-icons/vsc";

function Accordion({items}){
    const [expandedItem, setExpandedItem]=useState(-1);
    
    const handleClick=(index)=>{
        if(index===expandedItem){
            setExpandedItem(-1);
        }
        else{
            setExpandedItem(index);
        }
    }

    const renderedItems=items.map((item,index)=>{
        let expand=(expandedItem === index);

        const icon=<span className="text-2xl">{expand?<VscArrowDown />:<VscArrowLeft />}</span>

        return (
            <div key={item.id} >
                <div onClick={()=>handleClick(index)} className="flex p-3 justify-between borber-b cursor-pointer text-white bg-lime-600">
                    {item.label}
                    {icon}
                </div>
                <div >
                    {expand && <div className="bg-lime-200 p-3">{item.content}</div>}
                </div>
            </div>
        )
    });

    return <div>{renderedItems}</div>;
}

export default Accordion;