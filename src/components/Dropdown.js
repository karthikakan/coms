import { useState , useEffect, useRef } from "react";
import { VscArrowDown } from "react-icons/vsc";
import Panel from "./Panel";

function Dropdown({options, value, onChange}){
    const [isOpen,setIsOpen]=useState(false);

    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
        if (!divEl.current.contains(event.target)) {
            setIsOpen(false);
        }
        };

        document.addEventListener('click', handler, true);

        return () => {
        document.removeEventListener('click', handler);
        };
    }, []);

    const handleOpen=()=>
    {
        setIsOpen(!isOpen);
    }

    const handleSelection=(option)=>{
        setIsOpen(false);
        onChange(option);
    }

    const renderedOptions=options.map((option)=>{
        return(
        <div key={option.label} className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={()=>handleSelection(option)}>
            {option.label}
        </div>)
    });

    return <div ref={divEl} className="w-48 relative my-8">
        <Panel onClick={handleOpen} className="flex justify-between items-center cursor-pointer z-40">
            {value?.label || <div>Select</div>}<VscArrowDown />
        </Panel>
        {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>;
}
//
export default Dropdown;