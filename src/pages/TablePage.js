import SortableTable from "../components/SortableTable";

function TablePage(){
    const headerItems=[
        {
            label:"Name",
            config:(item)=>item.Name,
            sortValue:(item)=>item.Name,
        },
        {
            label:"Color",
            config:(item)=><div className={`p-3 m-2 ${item.Color}`}></div>,
        },
        {
            label:"Score",
            config:(item)=>item.score,
            sortValue:(item)=>item.score,
        },
    ]

    const tableItems=[
        {
            Name:"Apple",
            Color:"bg-red-500",
            score:5
        },
        {
            Name:"Banana",
            Color:"bg-yellow-500",
            score:3
        },
        {
            Name:"Grapes",
            Color:'bg-violet-500',
            score:1
        },
        {
            Name:"Kiwi",
            Color:'bg-green-500',
            score:4
        },
        {
            Name:"Orange",
            Color:'bg-orange-500',
            score:2
        },
    ];

    const keyFn=(item)=>{
        return item.Name;
    }

    return <div>
        <SortableTable items={tableItems} headers={headerItems} keyFn={keyFn}/>
    </div>;
}

export default TablePage;