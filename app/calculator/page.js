'use client';
import { useRef } from "react";
import { calculate } from "../math";

// hooks = react kay functions
//example useRef, useState, useEffect, useDispatch, useSelector


export default function Calculator(){

    let name = "ali";

    // useRef aik hook h jo component ki HTML tags ko component m uthane keliye use krte hn

    let aRef = useRef();
    let bRef = useRef();
    let cRef = useRef();

  

    let sRef = useRef();

    return <div>

        <select ref={sRef}>
            <option>+</option>
            <option>-</option>
            <option>/</option>
            <option>*</option>
        </select>

        <h1>{name}</h1>

    <input ref={aRef} type="number" />
    <input ref={bRef} type="number" />

Result<input ref={cRef} type="number" />

<button onClick={()=>{

    let res = calculate(aRef.current.value, bRef.current.value, sRef.current.value);
    cRef.current.value = res;


}}>sum karo</button>
        
    </div>

}