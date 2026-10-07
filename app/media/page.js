"use client";

import YouTube from 'react-youtube';
  import { ToastContainer, toast } from 'react-toastify';

export default function Media(){

    // some.com/results/bscs/444
    // some.com/results/bscs/445
    // some.com/results/bscs/446
    // some.com/results/bscs/447
    // some.com/results/bscs/448
    // some.com/results/bscs/448

    function a(){
        toast.success("wow g code chal raha")
        toast.error("oops errror agua")
        toast.warn("oops errror agua")
    }

    return <div>

         <button onClick={a}>Sucess</button>

            {/* <ToastContainer theme="dark" position="bottom-left" /> */}

            <YouTube videoId="t0Q2otsqC4I"  />
    </div>

}