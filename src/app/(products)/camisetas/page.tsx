import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Product from "./components/product";

const PRODUCTS = [
  {
    slug: "camiseta-simona",
    title: "Camiseta Simona",
    image: "/remera-cabo-negra.jpg",
    description: "Camiseta con estampa de un bulldog frances",
    price: 2000,
  },
];

function Page() {
  return (
    <section className="h-screen">
      <div>
        <h2 className="text-2xl font-medium text-center">Camisetas</h2>
        <div className="flex justify-center py-4 gap-1">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Menor precio</SelectItem>
              <SelectItem value="dark">Mayor precio</SelectItem>
              <SelectItem value="system">Mas vendido</SelectItem>
            </SelectContent>
          </Select>
          <Button>Filtrar</Button>
        </div>
      </div>
      <ul className="grid justify-center">
        {PRODUCTS.map((product) => (
          <Product key={product.slug} product={product} />
        ))}
      </ul>
    </section>
  );
}
export default Page;
