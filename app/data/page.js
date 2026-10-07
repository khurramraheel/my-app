'use client';

import { useState } from "react"

export default function Page(){

    let [name, setName] =  useState();

    return <div>

        <input onInput={function(evt){
            
            setName(evt.target.value);

        }} type="text" />

        <h1>{name}</h1>
        <h2>{name}</h2>
        <h3>{name}</h3>
        <h4>{name}</h4>
        <h5>{name}</h5>
        <h6>{name}</h6>
        
        <textarea name="" id=""  value={name}></textarea>

    </div>

}