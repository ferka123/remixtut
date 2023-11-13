import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { getProduct } from "~/lib/products";
import FullCard from "~/components/ProductCard/FullCard";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.id, "Missing contactId param");
  try {
    const product = await getProduct(parseInt(params.id, 10));
    return json({ product });
  } catch {
    throw new Response("Not Found", { status: 404 });
  }
};

export default function Contact() {
  const { product } = useLoaderData<typeof loader>();

  return <FullCard product={product} />;
}
