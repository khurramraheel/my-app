'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/card/card";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {

  let [products, setProducts] = useState([])

 useEffect(function(){

  axios.get('http://192.168.100.68:3001/api/product').then(function(resp){

    setProducts(resp.data.products);

    // let perfumes = resp.data.products.filter(function(product){

    //   if(product.category == 'fragrances'){
    //     return true;
    //   }

    // })

    // setProducts(perfumes);

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
