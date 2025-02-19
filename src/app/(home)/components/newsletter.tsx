import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoIosArrowForward } from "react-icons/io";

function Newsletter() {
  return (
    <section className="bg-slate-800 text-white py-16 sm:py-20">
      <div className="max-w-xl mx-auto p-5 flex flex-col items-center">
        <h4 className="text-2xl sm:text-3xl font-semibold tracking-wide">
          5% OFF | SUSCRIBIENDOTE
        </h4>
        <p className="tracking-wider text-zinc-400 text-sm sm:text-base mt-2">
          Unite al newsletter y recibí tu regalo!
        </p>
        <div className="flex gap-1 w-full mt-5">
          <Input placeholder="Correo electronico" />
          <Button size="icon" variant="secondary">
            <IoIosArrowForward />
          </Button>
        </div>
      </div>
    </section>
  );
}
export default Newsletter;
