'use client';

import { setUser } from "@/store/userReducer";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function SessionCheck({name, children}){

    let dispatch = useDispatch();
    let router = useRouter();

    let [token, setToken] = useState();

    
    useEffect(function(){
        
        let meraToken = localStorage.getItem('ckey');
        setToken(meraToken);

        if(!meraToken){
            router.push('/login')
            return;
        }

        axios.post('/api/auth', {
            type: 'sessionCheckKaro',
            key:meraToken
        }).then(function(resp){

            dispatch( setUser(resp.data) )

            console.log(resp.data);
        })

    }, [])


    return <>
        { token ? children : null}
    </>

}