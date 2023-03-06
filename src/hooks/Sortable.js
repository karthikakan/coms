import { useState } from "react";

function Sortable(headers,items){
    const [sortOrder,setSortOrder]=useState(null);
    const [sortBy,setSortBy]=useState(null);

    const handleClick=(label)=>{
        if (sortBy && sortBy!==label){
            setSortOrder('asc');
            setSortBy(label);
            return;
        }

        if(sortOrder===null){
            setSortOrder('asc');
            setSortBy(label);
        }
        else if(sortOrder==='asc'){
            setSortBy(label);
            setSortOrder('dsc');
        }
        else{
            setSortBy(null);
            setSortOrder(null);
        }
    };    


    let updatedItems=items;

    if(sortBy && sortOrder){
        const column=headers.find(head=>head.label===sortBy);
        updatedItems=[...items].sort((a,b)=>{
            const valA=column.sortValue(a);
            const valB=column.sortValue(b);

            const order=(sortOrder==='asc'? 1: -1);

            if(typeof valA==='string'){
                return valA.localeCompare(valB)*order;
            }
            else{
                return (valA-valB)*order;
            }
        });
    };

    return {handleClick,sortBy,sortOrder,updatedItems};
};
export default Sortable;