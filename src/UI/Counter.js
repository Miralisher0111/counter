import React from "react";
import classes from './Counter.module.css'


const Counter=(props)=>{
return <div className={classes.count}>{props.children}</div>
}


export default Counter