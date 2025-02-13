import Link from "next/link";

function IconTitle() {
  return (
    <h2 className="absolute left-1/2 transform -translate-x-1/2 md:static md:left-auto md:translate-x-0 font-extrabold text-3xl tracking-tighter">
      <Link href="/">AYZA</Link>
    </h2>
  );
}
export default IconTitle;
