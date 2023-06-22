import Link from "next/link"
import Image from "next/image";
import Icon from "../login/icon.png";
import Google from "../login/google.png";
function Signup() {

  return (
    <div className="bg-forbg h-screen p-3">

      <div className=" bg-forcon flex justify-center p-10 border-2 shrink border-slate-950  ml-33 mt-mt w-31 h-cont">
        <form className=" text-fortxt justify-center items-center ">
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
            <input type="text" placeholder="First Name" required className="flex bg-white w-wbtn justify-center rounded-brs mt-2 p-3 placeholder:italic h-inpth text-black"/> 
            <input type="text" placeholder="Last Name" required className="flex bg-white w-wbtn justify-center rounded-brs mt-2 p-3 placeholder:italic h-inpth text-black" />
            <input type="email" placeholder="Email" required className="flex bg-white w-wbtn justify-center rounded-brs mt-2 p-3 placeholder:italic h-inpth text-black " />
            <input type="password" placeholder="Create  Password" required className="flex bg-white w-wbtn justify-center rounded-brs mt-2 p-3 placeholder:italic h-inpth text-black" />
            <input type="password" placeholder="Confirm Password" required className="flex bg-white w-wbtn justify-center rounded-brs mt-2 p-3 placeholder:italic h-inpth text-black" />
          </div>
            <button className="flex bg-forsbmt w-wbtn h-hbtn justify-center rounded-brs mt-4"><p className="mt-2">Sign Up</p></button>
        </form >

      </div>
    </div>
  );

}

export default  Signup