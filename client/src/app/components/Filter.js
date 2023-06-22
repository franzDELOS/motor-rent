'use client'
import myMoto from "./products"
import { useState } from "react";
import Default from "./defaultsearch";
import Link from "next/link";
import Image from "next/image";

export default function Filter(){

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    useState(() => {
      setSearchResults(myMoto);
    }, []);

    const handleSearch = (e) => {
      const searchTerm = e.target.value;
      setSearchTerm(searchTerm);
   

        

     if(searchTerm === ' ' ){
        return (
          {Default}
        )
     }
     else{
        const results = myMoto.filter((myMoto) =>
          myMoto.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }

}

    return (

        <div className="pl-nav pt-10 h-screen bg-black">
            <h1 className="text-title2 font-bold font-poppins mt-4 text-white">All Motorcycles</h1>
            <input type="text"  placeholder="Search" onChange={handleSearch}  className="w-wsearch h-hsearch p-6 mt-4"  />
            <select name="All Brands" className="float-right mr-nav w-wfilter h-hfilter mt-4">
                <option value="" >Select Brand</option>
                <option value="Yamaha">Yamaha</option>
                <option value="Honda">Honda</option>
                <option value="Kawasaki">Kawasaki</option>

            </select>
              
              <div>
              {searchResults.map((myMoto, index) => (
        <div  key={index}>
                
              <Image
                src={myMoto.image}
                alt="test"
                width={240}
                height={200}
              />

           <h1 className="text-white">{myMoto.name}</h1>
           <p className="text-white">  ₱ {myMoto.rent} / Day</p>
           <Link href={`/vehiclemodels/${myMoto.name}`}>More Details</Link>
        
        </div>
      ))}
              </div>

        </div>
    )
}