import React, { useReducer } from "react";
import Button from "./Button";
import classes from './Card.module.css';
import Counter from "./Counter";

const reducer=(state,action)=>{
    if(action==='add'){
        return state+1
    }
    if(action==='substract'){
        return state>0?state-1:0;
    }
    if(action==='reset'){
        return 0;
    }
    else{
        throw new Error('unexpected action');
    }
}
console.log('git check');
const Card=(props)=>{
    const [count,dispatch]=useReducer(reducer,1)


    return <div className={classes.wrapper}>
        <Counter>{count}</Counter>
        <div className={classes.ButtonCard}>
        <Button  type='button' onClick={ ()=>dispatch('add')}>add</Button>
        <Button type='button' onClick={()=>dispatch('substract')}>subtract</Button>
        <Button type='button' onClick={()=>dispatch('reset')}>reset</Button>
        </div>
    </div>
}

export default Card;