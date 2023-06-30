


import { useState } from 'react'
import { Dialog } from '@headlessui/react'


function Modal ( {isOpen, inputValue , setIsOpen , setInputValue, clearInput})  {



    return (
      <div className= {' mt-2 -z-[40] absolute'} >
      <Dialog as="div" open ={isOpen} onClose={() => setIsOpen(true)} className={' z-10  fixed   ml-[30%] mt-[3.9rem] hover:bg-blend-darken  w-[40rem] '}>
        <Dialog.Panel className={'bg-white border-[3px] border-red-400 rounded-[9px] p-[2rem]'}>
        <button onClick={() => setIsOpen(false)}  className="font-bold  text-red-500 text-[18px] float-right p-3 hover:bg-red-500 hover:text-white -mr-4 -mt-6 rounded-[8px] ">X</button>
          <Dialog.Description>
          <div>
            <h1 className="font-semibold  text-[20px] pb-3"> Pick up Date and Time</h1>
             <input type="date" className="p-2 border-[1px] rounded-[5px] border-black mr-5" />
            <input type="time" className="p-2 border-[1px] rounded-[5px] border-black text-black" />
           </div>
         <div>
           <h1 className="font-semibold  text-[20px] pb-3 mt-4"> Return date and Time</h1>
           <input type="date" className="p-2 border-[1px] rounded-[5px] border-black mr-5" />
           <input type="time" className="p-2 border-[1px] rounded-[5px] border-black"/>
           </div>
            <div className=" grid grid-cols-2 gap-1 bg-forbg p-6 mt-5 text-white rounded-[7px]">
          <div  >
             <h1 className="p-2" >No. Of Days</h1>
             <h1 className="p-2" >Discount ?</h1>
             <p className="p-2 text-[#0095D3]">Enter Discount Code</p>
             <input value={inputValue} 
             onChange={(e) => setInputValue(e.target.value)}
             type="text" className="p-2 m-2 rounded-[7px] w-[9rem] text-black" />
              <button className="ml-3 p-3 text-white text-[14px] bg-[#0095D3] rounded-[7px]"> Apply</button>  
           
          </div>
          <div  >
             <h1 className="p-2 ml-[5rem]" > ₱ Rent Price </h1>
             <h1 className="p-2  ml-[4.3rem]" >- ₱ Discounted  Price</h1>
             <button onClick={clearInput} className="mt-[3rem] ml-[10rem] font-bold text-[18px]"> x</button>
          </div>
        </div>
        </Dialog.Description>
        <button onClick={() => setIsOpen(false)} className="w-[35.6rem] rounded-[7px] bg-blue-400 p-3 mt-3 text-white text-20px font-semibold">Start Booking</button>
        
      </Dialog.Panel>
    </Dialog>
      </div>
    )

}

export default Modal