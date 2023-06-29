'use client'

import Image from "next/image";
import myMoto from "@/app/components/products";
import { useParams } from 'next/navigation';

const Itemdetail = ( ) =>  {

  const params = useParams()
    const itemId = params.id
    console.log( 'itemId', itemId)

    const selectedItem = myMoto.find((myMoto) => myMoto.id.toString() === itemId )
    
    console.log('selectedItem:', selectedItem);

      if (!selectedItem) {
      return <div>Error...</div>;
    }

  
    if (!selectedItem) {
      return <div>Loading...</div>;
    }



    console.log(selectedItem.name);
  
    return (
      <>
       
    
<div className="grid grid-cols-2">
    
        <div className="mt-nav" >
          <Image
            src={selectedItem.image}
            alt={selectedItem.name}
            width={667}
            height={421}
            
          />
          
  
        </div>
        <div className="mt-nav">
        <ul>
            <li><h1>{selectedItem.name}</h1></li>
            <li><p>{selectedItem.price}</p></li>

            <button >Add to Cart </button>
            <button >Buy Now </button>
          </ul>
      


        </div>
  

      </div>

      </>
    );

}

export default Itemdetail

  