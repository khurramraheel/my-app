'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/card/card";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

export default function Home() {

  let [products, setProducts] = useState([]);
  let params = useParams();

 useEffect(function(){

  axios.get('https://dummyjson.com/products').then(function(resp){

    // setProducts(resp.data.products);

    let perfumes = resp.data.products.filter(function(product){

      if(product.title.toLowerCase().includes(params.dSearch) || product.description.toLowerCase().includes(params.dSearch)){
        return true;
      }

    })

     setProducts(perfumes);

    // console.log(resp.data.products);
  });


 }, [])


  return (

    
    <section className="d-flex flex-wrap" style={ {display:'flex', justifyContent:'space-around'} }>


      {/* <a href="https://web.whatsapp.com/send/?phone=923497672117">Whatspp</a> */}

      {
        products.map(function( product){
          return <Card id={product.id} price={product.price} title={product.title} description={product.description} img={product.images[0]}></Card>
        })
      }

      {/* agar component m data pass krna to us component kay tag per attributes lgyi jyen
       aur component waley function kay parameter m use pakar lijega
      */}
      
    </section>
  );
}
