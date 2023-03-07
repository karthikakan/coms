import GraphEdit from '../components/GraphEdit';
import { useState } from 'react';
import Button from '../components/Button';

function GraphPage(){
    const [graphs,setGraphs]=useState([]);

    const handleClick=()=>{
        setGraphs([...graphs,graphs.length]);
    }

    const renderedGraph=graphs.map(()=>{
        return <div>
            <GraphEdit />
        </div>;
    })

    return (
        <div>
            <h1>GraphPage</h1>
            <div>
                <Button onClick={handleClick} primary outline rounded>Add Graph</Button>
            </div>
            {renderedGraph}
        </div>
    );
}

export default GraphPage;