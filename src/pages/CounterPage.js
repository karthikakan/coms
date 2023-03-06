import { useReducer } from "react";
import Panel from "../components/Panel";
import Button from "../components/Button";

const INCREMENT='increment';
const DECREMENT='decrement';
const ADD_VALUE_UPDATE='change_add_value';
const FORM_SUBMIT='form_submit';

const reducer=(state,action)=>{
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count:state.count+1,
            };
        case DECREMENT:
            return {
                ...state,
                count:state.count-1,
            };
        case ADD_VALUE_UPDATE:
            return {
                ...state,
                addValue:action.payload,
            };
        case FORM_SUBMIT:
            return {
                ...state,
                count:state.count+state.addValue,
                addValue:0
            };
        default:
            return state;
    };
};

function CounterPage(){
    const [state,dispatch]=useReducer(reducer,{
        count:0,
        addValue:0
    })

    const handleIncrement=()=>{
        dispatch({
            type:INCREMENT
        });
    };

    const handleDecrement=()=>{
        dispatch({
            type:DECREMENT,
        });
    };

    const handleInput=(event)=>{
        dispatch({
            type:ADD_VALUE_UPDATE,
            payload:parseInt(event.target.value),
        });
    };

    const handleForm=(event)=>{
        event.preventDefault();
        dispatch({
            type:FORM_SUBMIT,
        })
    }

    return <Panel>
        Count is {state.count}
        <div className="flex flex-row">
            <Button onClick={handleIncrement} succes>Increment</Button>
            <Button onClick={handleDecrement} danger>Decrement</Button>
        </div>
        <form onSubmit={handleForm}>
            Add Value:
            <input className="border border-gray-400 m-2 border-3" type='Number' onChange={handleInput}></input>
            <Button primary>Submit</Button>
        </form>
    </Panel>;
}

export default CounterPage;