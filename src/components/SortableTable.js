import Table from "./Table";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import Sortable from "../hooks/Sortable";


function SortableTable(props){
    const {headers,items}=props;
    const {handleClick,sortBy,sortOrder,updatedItems}= Sortable(headers,items);
    
    const updatedHeader=headers.map((head)=>{
        if(!head.sortValue){
            return head;
        }
        return {...head,
            header:()=>(<th className="cursor-pointer hover:bg-gray-100" onClick={()=>{handleClick(head.label)}}>
                            <div className="flex items-center" >
                                {getIcon(head.label)}
                                {head.label}
                            </div>
                        </th>)
            };
    });

    const getIcon=(label)=>{
        if(sortOrder===null || sortBy!==label){
            return <div className="p-2"><SlArrowUp /><SlArrowDown /></div>
        }
        else if(sortOrder==='asc'){
            return <div className="p-2"><SlArrowUp /></div>
        }
        else{
            return <div className="p-2"><SlArrowDown /></div>
        }
    };


    return <div>
        <Table {...props} headers={updatedHeader} items={updatedItems}/>
    </div>;
};

export default SortableTable;