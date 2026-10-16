"use client";   

import SessionCheck from "@/components/sessionCheck/sessionCheck";
import axios from "axios";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

export default function Page(){
    return <SessionCheck>
            <MyProducts></MyProducts>
    </SessionCheck>
}


function MyProducts(){

    let [products, setProducts] = useState([]);


    let user = useSelector(function(store){
      return store.userData.user;
     })

    useEffect(function(){

        if(!user){
            return;
        }
        
        axios.get('/api/product?hello=' + user._id).then(function(resp){

            setProducts(resp.data.products);

        })

    }, [user])

    return <div>

        <table className="table">
            <thead>
                <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Active</th>
                </tr>
            </thead>

                {
                    products.map(function(product){
                        return <tr>                    
                            <td> <img src={product.images[0]} width="200" /></td>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>
                                <input onChange={function(e){

                                    let state = e.target.checked;

                                    axios.post('/api/product', {
                                        pId: product._id,
                                        type:"changeProductStatus",
                                        val:state
                                    }).then(function(){

                                        
                                    product.active = state;
                                    setProducts([...products])

                                    })

                                    console.log(20)

                                }} checked={product.active} type="checkbox" />
                            </td>
                        </tr>
                    })
                }

        </table>

    </div>

}