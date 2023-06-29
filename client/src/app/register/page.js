'use client'
import Link from "next/link";
import Image from "next/image";
import Icon from "../login/icon.png";
import Google from "../login/google.png";
import { useForm } from "react-hook-form";
import { useState } from "react";


const Signup = () => {


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

    <div className="bg-forbg h-full  p-5 ">
      <div className=" bg-forcon flex justify-center p-5 border-2 shrink border-slate-950  ml-[33%] mt-[5.6%] w-[29.25rem] ">
        <form onSubmit={handleSubmit(formSubmit)} className=" text-fortxt justify-center items-center" >
          <h1 className="p-1 font-poppins text-base font-semibold flex justify-center">
            Sign Up
          </h1>
          <p className="font-poppins text-sm p-3 flex  justify-center">
            Already a member ? {"  "}
            <Link href="/login" className="text-forlink ">
              Sign in
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
              placeholder="First Name"
              {...register("firstName", { required: true })}
              className="flex bg-white w-wbtn justify-center rounded-brs mt-2 p-3 placeholder:italic h-inpth text-black"
            />
             {errors.firstName && <p className="m-2 text-red-600">First Name is required.</p>}

            <input
              type="text"
              placeholder="Last Name"
              {...register("lastname", { required: true })}
              className="flex bg-white w-wbtn justify-center rounded-brs mt-2 p-3 placeholder:italic h-inpth text-black"
            />
            {errors.lastname && <p className="m-2 text-red-600">Last Name is required.</p>}

            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="flex bg-white w-wbtn justify-center rounded-brs mt-2 p-3 placeholder:italic h-inpth text-black "
            />
             {errors.email && <p className="m-2 text-red-600">Email is required.</p>}
            <input
              type="password"
              placeholder="Create  Password"
              {...register("password", { required: true })}
              className="flex bg-white w-wbtn justify-center rounded-brs mt-2 p-3 placeholder:italic h-inpth text-black"
            />
              {errors.password && <p className="m-2 text-red-600">Password is required.</p>}
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmpass", { required: true })}
              className="flex bg-white w-wbtn justify-center rounded-brs mt-2 p-3 placeholder:italic h-inpth text-black"
            />

             {errors.confirmpass && <p className="m-2 text-red-600">Confirm Password is required.</p>}
          </div>
          <button className="flex bg-forsbmt w-wbtn h-hbtn justify-center rounded-brs mt-4">
            <p className="mt-2">Sign Up</p>
          </button>
        </form>
      </div>
    </div>
   </>
  );
}

export default Signup;
