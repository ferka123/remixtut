import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ProductCard from "~/components/ProductCard/ProductCard";
import { getAllProducts } from "~/lib/products";

import rootStyles from "../root.module.css";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const { products } = await getAllProducts(q);
  return json({ products, q });
};

export default function Index() {
  const { products } = useLoaderData<typeof loader>();
  return (
    <div className={rootStyles.products}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
