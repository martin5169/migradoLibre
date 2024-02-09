import { type Product } from "../types";

export async function getProducts(category?: string): Promise<Product[]> {
  const url = new URL("https://api.mercadolibre.com/sites/MLA/search");
  const seller_id = "179571326";

  if (category !== undefined) {
    url.searchParams.append("category", category);
  }

  if (seller_id) {
    url.searchParams.append("seller_id", seller_id);
  }

  // Realiza la solicitud a la URL construida
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.results);
}
