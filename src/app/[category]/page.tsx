import { getProducts } from "../services";
import Products from "@/components/Products";

export default async function CategoryPage({params:{category}}:{params:{category:string}}) {
    
    const products = await getProducts(category)

    return <Products products = {products}></Products>
    
}