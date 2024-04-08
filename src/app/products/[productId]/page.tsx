export default function PageDetails({
  params,
}: {
  params: { productId: string }
}) {
  return <h1>Detail about product {params.productId}</h1>
}
