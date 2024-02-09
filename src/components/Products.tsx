import { type Product } from "@/app/types";

export default function Products({ products }: { products: Product[] }) {
    
    return(
      <div className="grid grid-cols-3 gap-3">
        {products.map(({id,thumbnail,currency_id,title,price}) => (
          <div key={id} className="border-2">
            <img src={thumbnail} className="p-8 size-max" alt={title} />
            <h3 className="font-bold">{title}</h3>
            <strong>{price.toLocaleString("es-AR",{currency: `${currency_id}`,
            style: "currency"})}</strong>
          </div>
        ))}
      </div>
    )
}