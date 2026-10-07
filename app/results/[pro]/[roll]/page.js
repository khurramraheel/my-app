'use client';
import { useParams } from "next/navigation"

export default function Page(){

    //route param
    // agar hame website ka koi route dynamic krna ho
    //means bnda runtime per type karega 

    // some.com/weather/fsd
 // some.com/results/[pro]



    // some.com/results/[pro]
    // some.com/results/bsit

    let some = useParams()

    return <div>
        <h1>{some.pro} {some.roll}</h1>
        yeh result wala page    
    </div>

}