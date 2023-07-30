import Link from "next/link";
import Image from "next/image";
import Moto from "./components/motoIcon.png";
import Filter from "./components/Filter";

export default function Home() {
  return (
    <section>
      <div className="flex  mt-[3.8rem] bg-forbg ">
        <h1 className="flex w-wtitle mt-10 text-title text-white font-bold ml-nav">
          NEW AND GOOD CONDITION BIG BIKES!{" "}
        </h1>
        <Image
          src={Moto}
          width={748}
          height={421}
          alt="Image"
          className="flex  justify-end  ml-nav"
        />
      </div>
      <Filter />
    </section>
  );
}
