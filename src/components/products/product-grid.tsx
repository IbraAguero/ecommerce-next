import ProductCard from "./product-card";

interface Props {
  title: string;
  products: any[];
}

function ProductGrid({ title, products }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-5 py-20">
      <h2 className="text-2xl font-semibold text-center mb-8 md:text-4xl">
        {title}
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {products.map((product) => (
          <ProductCard
            key={product.slug}
            title={product.title}
            price={product.price}
            slug={product.slug}
            image={product.image[0]}
            category={product.category}
          />
        ))}
      </ul>
    </section>
  );
}
export default ProductGrid;
