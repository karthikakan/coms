import { Fragment } from "react";

function Table({items,headers,keyFn}){
    const renderedItems=items.map((item)=>{
        const configs=headers.map((header)=>{
            return <td className="py-1 px-8" key={header.label}>{header.config(item)}</td>
        });
        return(<tr className="border-b border-gray-200" key={keyFn(item)}>
            {configs}
        </tr>);
    });

    const renderedHeaders=headers.map((header)=>{
        if(header.header){
            return <Fragment key={header.label}>{header.header()}</Fragment>;
        }
        return <th key={header.label}>{header.label}</th>;
    })
    return(<table>
        <thead className="border-b-4 border-gray-900">
            <tr className="border-b-2">
                {renderedHeaders}
            </tr>
        </thead>
        <tbody>
            {renderedItems}
        </tbody>
    </table>);
}

export default Table;