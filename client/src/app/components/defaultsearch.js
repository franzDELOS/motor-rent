import myMoto from "./products" 
import Link from "next/link"
import Image from "next/image"
import Button from "./Button"

const Default = () => {

  return (
    <div className="mt-[3rem] grid grid-cols-4 gap-3 p-4">
          
           {myMoto.slice(0,4).map((myMoto, index) => (
       <div key={index} className="text-black  m-4 bg-white pb-9">
               
             <div className="bg-gray-400">
             <Image
               src={myMoto.image}
               alt={myMoto.name}
               width={240}
               height={200}
             />

          <h1 className="text-black font-poppins pl-5 text-nav font-bold p-8">{myMoto.name}</h1>
             </div>
          <h1 className="p-3 "> Daily :  <span className="font-bold">₱ {myMoto.rent}</span> </h1>

         <div className="mt-[2rem]">
         <Button 
              text='More Details'
              onClick={() => 
                window.location.href = `/vehiclemodels/${myMoto.id}`} 
                className="bottom-0 font-bold  text-white text-[18px] ml-[5rem]  p-3 bg-gray-500"
                />

         </div>
       
       </div>
     ))}
        </div>
  )
}

export default Default