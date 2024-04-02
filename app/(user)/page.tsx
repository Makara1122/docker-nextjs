'use client'
import "@/app/globals.css";
import { useEffect, useState } from "react";
import { date } from "yup";
import CardComponent from "../components/CardComponent";

export default function Home() {
  const URL = "https://sokea.online/api/products/?page=1&page_size=12"
  const [products,setProduct] = useState([])
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    fetch(URL)
    .then(res=>res.json())
    .then(data=>setProduct(data.results))
   setLoading(false)

  },[])


  if(loading){
    return(
      <div className="grid place-content-center text-2xl"
      >Loading.......</div>
    )
  }


  return (
    <main className="  grid  gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 ">
      {
       products.map((product,key) => (
        <CardComponent key={key} 
        title = {product.name}
        price = {product.price}
        image = {
          product.image
        }/>
       ))
}
    </main>
  );
}
