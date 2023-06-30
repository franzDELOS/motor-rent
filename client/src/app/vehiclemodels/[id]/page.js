"use client";
import { Fragment } from "react";
import Image from "next/image";
import myMoto from "@/app/components/products";
import { useParams } from "next/navigation";
import { Tab } from "@headlessui/react";
import Default from "@/app/components/defaultsearch";
import { useState } from 'react'
import Modal from "@/app/components/Modal/Modal";

const Itemdetail = () => {
  const params = useParams();
  const itemId = params.id;
  console.log("itemId", itemId);

  const selectedItem = myMoto.find((myMoto) => myMoto.id.toString() === itemId);

  console.log("selectedItem:", selectedItem);



  if (!selectedItem) {
    return (
      <div className="mt-[10rem] ml-[30%]">
        <h1 className="font-bold text-[30px] text-red-600">
          The item you selected is not Available.
        </h1>
        <p>Please go back to Homepage</p>
      </div>
    );
  }

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const [inputValue, setInputValue] = useState('');

  function clearInput() {
    setInputValue('');
  }

  

  return (
    <div  className= { `${isOpen ? 'blur-lg h-[250vh]  inset-0 bg-slate-800  ' : 'h-[250vh] bg-forbg p-[5rem] pt-[7rem]'  }h-[250vh] bg-forbg p-[5rem] pt-[7rem] `}>
      <div className={' grid grid-cols-2 bg-white p-[0.7rem]'}>
        <div className="mt-[2rem]">
          <Image
            src={selectedItem.image}
            alt={selectedItem.name}
            width={567}
            height={421}
          />
        </div>
        <div className="mt-[6rem] ml-4 ">
          <ul>
            <li>
              <h1 className="text-black-500  font-bold text-[32px]">
                {selectedItem.name}
              </h1>
            </li>

            <li className="mt-5">
              <h1 className="font-semibold text-[20px]">Price Rates</h1>
            </li>
            <li className="text-[18px] mt-2 flex ">
              <pre className="font-bold ">Daily Rates :</pre>
              <span>₱ {selectedItem.rent} </span>
            </li>
            <li className="text-[18px] mt-2 flex text-red-500 ">
              <pre className="text-bold font-bold">
                7 Days (15 % Discount ){" "}
              </pre>
              <span>
                : ₱ {selectedItem.rent * 7 - selectedItem.rent * 7 * 0.15}{" "}
              </span>
            </li>

            <li className="text-[18px] mt-2 flex text-red-500">
              <pre className="font-bold ">14 Days (30 % Discount ) </pre>
              <span>
                : ₱ {selectedItem.rent * 14 - selectedItem.rent * 7 * 0.3}{" "}
              </span>
            </li>

            <button onClick={openModal} className="mt-8 w-[20rem] bg-forbg p-3 text-slate-50 font-bold hover:bg-slate-900">
              Rent Now!
            </button>
          </ul>
        </div>
      </div>

      <Modal 
       isOpen={isOpen}
       clearInput={clearInput}
       setInputValue={setInputValue}
       setIsOpen={setIsOpen}
       inputValue={inputValue}
   
      />

      <div className="bg-black  mt-[3rem] ">
        <Tab.Group>
          <Tab.List>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? "bg-white  text-black  pl-5 pr-5"
                      : "bg-black bg-[100%] text-white border-0 pl-5 pr-9"
                  }
                >
                  {" "}
                  Description{" "}
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? "bg-white  text-black  pl-5 pr-5 "
                      : "bg-black text-white pl-5 pr-9"
                  }
                >
                  {" "}
                  Additional Information{" "}
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className={"bg-gray-100 p-7"}>
              {selectedItem.description}
            </Tab.Panel>
            <Tab.Panel className={"bg-gray-200 p-6"}>
              <div>
                <h1 className="font-bold text-[20px]">Additional Information</h1>
                <ul className="p-3">
                  <li className="grid grid-cols-2 p-3 border-gray-500 border-[1px] marker:"><h1 className="font-bold">Engine</h1>
                  <p>Description sample only.Description sample only.Description sample only.</p></li>
                  <li className="grid grid-cols-2  p-3 border-gray-500  border-[1px]"><h1 className="font-bold">Transmission</h1>
                  <p>Description sample only.Description sample only.Description sample only.</p></li>
                  <li className="grid grid-cols-2  p-3 border-gray-500  border-[1px]"><h1 className="font-bold"> Dimension and Weight </h1>
                  <p>Description sample only.Description sample only.Description sample only.</p></li>
                </ul>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      
      <div className="mt-[4rem]">
        <h1 className="text-white font-semibold text-[39px]">Related Motorcyles</h1>
        <Default/>
                  
      </div>
    </div>
  );
};

export default Itemdetail;
