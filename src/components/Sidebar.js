import Link from './Link';

function Sidebar(){
    const refs=[
        {label:'Accordion',url:'/'},
        {label:'Dropdown',url:'/dropdown'},
        {label:'Buttons',url:'/button'},
        {label:'Modal',url:'/modal'},
        {label: 'Table',url:'/table'},
        {label: 'Counter',url:'/counter'},
        {label: 'Graphs',url:'/graph'}
    ];

    const renderedRef=refs.map((ref)=>{
        return <Link 
        key={ref.label}
        to={ref.url}
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        >
            {ref.label}
        </Link>;
    })

    return <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
        {renderedRef}
    </div>;
}

export default Sidebar;