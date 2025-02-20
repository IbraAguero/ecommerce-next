import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

interface Props {
  title: string;
  price: number;
  image: string;
  slug: string;
  category: string;
}

function ProductCard({ title, slug, price, image, category }: Props) {
  const stock = 0;

  return (
    <div key={slug} className="flex justify-center">
      <div className="group">
        <div className="relative overflow-hidden">
          <Link href={`/camisetas/${slug}`}>
            <Image
              src={image}
              alt={title}
              width={250}
              height={250}
              className="rounded-lg"
            />
          </Link>
          <Button
            variant="secondary"
            className="absolute top-0 right-0 m-3 h-10 w-10 shadow-lg rounded-full grid place-content-center"
          >
            <FaRegHeart size={18} />
          </Button>
          <div className="absolute bottom-0 flex justify-center items-center gap-2 py-3 text-sm font-medium bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full cursor-pointer transition-all duration-300 translate-y-[100%] group-hover:translate-y-0">
            <IoCartOutline size={17} />
            <span>Agregrar al carrito</span>
          </div>
        </div>
        <Link href={`/camisetas/${slug}`}>
          <h4 className="text-lg text-zinc-700 tracking-wide mt-2">{title}</h4>
        </Link>
        <h4 className="font-medium">
          {price.toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
          })}
        </h4>
      </div>
    </div>
  );
}
export default ProductCard;

{
  /* <div className="flex flex-col gap-6 relative">
  <Link
    href={`/celulares/${slug}`}
    className="flex relative group overflow-hidden "
  >
    <div className="flex h-[350px] w-full items-center justify-center py-2 lg:h-[250px]">
      <img
        src={image}
        alt={title}
        className="object-contain h-full w-full"
      />
    </div>

    <button className="bg-white border border-slate-200 absolute w-full bottom-0 py-3 rounded-3xl flex items-center justify-center gap-1 text-sm font-medium hover:bg-stone-100 translate-y-[100%] transition-all duration-300 group-hover:translate-y-0">
      <IoMdAdd />
      Añadir
    </button>
  </Link>

  <div className="flex flex-col gap-1 items-center">
    <p className="text-[15px] font-medium">{title}</p>
    <p className="text-[15px] font-medium">{price}</p>
  </div>

  <div className="absolute top-2 left-2">
    {stock === 0 && <span>Agotado</span>}
  </div>
</div> */
}
