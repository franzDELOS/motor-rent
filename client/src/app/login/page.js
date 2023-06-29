'use client'
import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon.png";
import Google from "./google.png";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Navbar from "../components/Navbar";

const loginpage = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
  const formData = watch();
  const formSubmit = (data) => {
    console.log(data);
    setShow(true);
  };

  return (
    <>
    <Navbar/>
    <div className="bg-forbg h-screen p-3">
      
      <div className=" bg-forcon flex justify-center p-10 border-2  border-slate-950  ml-[33%] mt-[7%] w-[31.25rem]">
        <form onSubmit={handleSubmit(formSubmit)} className=" text-fortxt justify-center items-center ">
          <h1 className="p-1 font-poppins text-base font-semibold flex justify-center">
            Welcome Back
          </h1>
          <p className="font-poppins text-sm p-3">
            Haven’t used MotoRent Cebu before?{"  "}
            <Link href="/register" className="text-forlink ">
              Sign Up
            </Link>
          </p>

          <Link
            href="#"
            className="flex bg-forbtn w-wbtn h-hbtn justify-center rounded-brs "
          >
            <Image
              src={Icon}
              height={28}
              width={28}
              alt="Image"
              className="m-2"
            />
            <p className="m-2"> Sign in with Facebook</p> <br />
          </Link>

          <Link
            href="#"
            className="flex bg-white w-wbtn h-hbtn justify-center rounded-brs mt-4"
          >
            <Image
              src={Google}
              height={28}
              width={28}
              alt="Image"
              className="m-2"
            />
            <p className="m-2 text-black"> Sign in with Google</p>
          </Link>

          <div className="flex m-2 ">
            <hr className="border-1 w-40 mt-3" />
            <p className="pl-2 pr-2 font-poppins text-sm"> OR </p>
            <hr className="border-1 w-40 mt-3" />
          </div>

          <div>
            <input
              type="text"
              placeholder="Email"
              id="email"
              {...register("email", { required: true })}
              className="flex bg-white w-wbtn h-hbtn justify-center rounded-brs mt-4 p-3 placeholder:italic text-black"
            />
            {errors.email && <p className="m-2 text-red-600 ">Email is required.</p>}
            
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
              className="flex bg-white w-wbtn h-hbtn justify-center rounded-brs mt-4 p-3 placeholder:italic text-black"
            />
            {errors.password && <p className="m-2 text-red-600">Password is required.</p>}
          </div>

          <Link href="#">
            <p className="mt-3 flex justify-end mr-3 text-forlink">
              I forgot my password
            </p>
          </Link>
          <button className="flex bg-forsbmt w-wbtn h-hbtn justify-center rounded-brs mt-4">
            <p className="mt-2">Sign In</p>
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default loginpage;
