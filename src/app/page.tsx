"use client";
import { getProducts } from "./services";
import Products from "@/components/Products"

export default async function Home() {

  const productsList = await getProducts()
  
  return (
       <Products products={productsList}/>    
  );
}
