import React from 'react'
import { useState } from 'react'
const StateEx=()=>
{
    const[data,setData]=useState(0);
    const inc=()=>
    {
        setData(data+1);
    }
    const dec=()=>
    {
        setData(data-1);
    }
    
    const[visible,setVisible]=useState(false)
    const toggle=()=>
    {
        setVisible(!visible)
    }
    return(
        <>
        <button onClick={inc}>Increase</button>
        <p>{data}</p>
        <button onClick={dec}>Decrease</button>
        <button onClick={toggle}>{visible ? 'Hide' : 'show'}</button>
        {visible ? "Visible":" "}
        </>
    )
}
export default StateEx