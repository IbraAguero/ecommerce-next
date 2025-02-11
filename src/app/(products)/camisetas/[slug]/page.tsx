"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

const sizes = ["M", "L", "XL"];

const colors = [
  { name: "Negro", value: "#000000" },
  { name: "Blanco", value: "#FFFFFF" },
  { name: "Rojo", value: "#FF0000" },
  { name: "Azul", value: "#0000FF" },
  { name: "Verde", value: "#00FF00" },
];

const PRODUCT = {
  slug: "camiseta-simona",
  title: "Camiseta Simona",
  image: "/remera-cabo-negra.jpg",
  description: "Camiseta con estampa de un bulldog frances",
  price: 2000,
};

function Page({ params }: Props) {
  //const slug = (await params).slug;
  const [selectedSize, setSelectedSize] = useState<null | string>(null);
  const [selectedColor, setSelectedColor] = useState<null | string>(null);

  return (
    <section className="flex justify-center mt-5">
      <div>
        <Image
          src={PRODUCT.image}
          alt={PRODUCT.title}
          width={300}
          height={300}
          className="rounded-lg"
        />
        <div className="mt-5">
          <h3 className="font-semibold text-2xl">
            {PRODUCT.title.toLocaleUpperCase()}
          </h3>
          <h3 className="font-medium text-xl">
            {PRODUCT.price.toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
            })}
          </h3>
          <h5 className="text-sm mt-1">
            3 cuotas sin interés de <b className="font-semibold">$15.000,00</b>
          </h5>
        </div>
        <div className="space-y-2 mt-5">
          <div>
            <h4>Talle</h4>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <Button
                  key={size}
                  size="icon"
                  variant="secondary"
                  className={selectedSize === size ? "border border-black" : ""}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h4>Color</h4>
            <div className="flex gap-2">
              {colors.map((color) => (
                <Button
                  key={color.name}
                  size="icon"
                  variant="secondary"
                  className={
                    selectedColor === color.value ? "border border-black" : ""
                  }
                  onClick={() => setSelectedColor(color.value)}
                >
                  <div
                    className={`w-5 h-5 rounded`}
                    style={{ backgroundColor: color.value }}
                  ></div>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-2 mt-5">
          <Button className="w-full">Agregar al carrito</Button>
          <Button className="w-full" variant="destructive">
            Comprar ahora
          </Button>
        </div>

        <div className="mt-5">
          <Accordion type="single" collapsible className="max-w-72">
            <AccordionItem value="item-1">
              <AccordionTrigger>Descripcion</AccordionTrigger>
              <AccordionContent>
                Remera lisa en tela micro panal, con detalle bordado en cuello.
                Calce Oversize.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="max-w-72">
            <AccordionItem value="item-1">
              <AccordionTrigger>Talles</AccordionTrigger>
              <AccordionContent>
                Remera lisa en tela micro panal, con detalle bordado en cuello.
                Calce Oversize.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
export default Page;
