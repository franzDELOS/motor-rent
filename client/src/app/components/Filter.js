"use client";
import myMoto from "./products";
import { useState } from "react";
import Default from "./defaultsearch";
import Link from "next/link";
import Image from "next/image";

export default function Filter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useState(() => {
    setSearchResults(myMoto);
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    if (searchTerm === " ") {
      return { Default };
    } else {
      const results = myMoto.filter((myMoto) =>
        myMoto.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  return (
    <div className="pl-nav pt-10 h-full  bg-black">
      <h1 className="text-title2 font-bold font-poppins mt-4 text-white">
        All Motorcycles
      </h1>
      <input
        type="text"
        placeholder="Search"
        onChange={handleSearch}
        className="w-wsearch h-hsearch p-6 mt-4"
      />
      <select
        name="All Brands"
        className="float-right mr-nav w-wfilter h-hfilter mt-4 p-3"
      >
        <option value="">Select Brand</option>
        <option value="Yamaha">Yamaha</option>
        <option value="Honda">Honda</option>
        <option value="Kawasaki">Kawasaki</option>
      </select>

      <div className="mt-nav grid grid-cols-3 gap-4">
        {searchResults.map((myMoto, index) => (
          <div
            key={index}
            className="text-black bg-foritem w-wsearch h-hitem  mb-nav"
          >
            <Image
              src={myMoto.image}
              alt="test"
              width={367}
              height={224}
              className="p-2"
            />

            <h1 className="text-white font-poppins pl-5 text-nav font-bold p-8">
              {myMoto.name}
            </h1>

            <div className="bg-white mt-mtitem h-hitem2 pl-5 pt-7 mt-mtprice font-bold">
              <p> ₱ {myMoto.rent} / Day</p>
              <p> ₱ {myMoto.rent} / Weekly</p>
              <p> ₱ {myMoto.rent} / Monthly</p>

              <Link href={`/vehiclemodels/${myMoto.name}`}>
                <div className="bg-foritem h-hrent w-wrent float-right mr-4 mt-4 flex justify-center">
                  <h1 className=" text-white  mt-4 text-rent">Rent</h1>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
