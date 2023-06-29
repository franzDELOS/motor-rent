'use client'
import Logo from "./Logo.png";
import Image from "next/image";
import Link from "next/link";
import {usePathname } from "next/navigation";


const  Header =() => {


const pathname = usePathname()

  return (
   <div>



<ul className="fixed flex h-[3.8rem]  bg-white top-0 w-screen p-4">
<li className="ml-[2rem]  text-nav font-bold">
<Link href={'/'}>
      <Image
    src={Logo}
    height={61}
    width={176}
    alt="logo"
    className="ml-4  -mt-3"
    />
    </Link>
  </li>

<li>
        <Link href="/"  className={` ${pathname === ('/') ? 'text-red-500' : ''} m-5 ml-[10rem]  font-bold`}>
          Home
        </Link>
</li>
<li>
        <Link href="#"  className={` ${pathname === ('#') ? 'text-red-500' : ''} m-5 ml-[5rem]  font-bold`}>
          About
        </Link>
</li>
<li>
        <Link href="#"  className={` ${pathname === ('#') ? 'text-red-500' : ''} m-5 ml-[5rem]  font-bold`}>
          Safety
        </Link>
</li>
<li>
        <Link href="#"  className={` ${pathname === ('#') ? 'text-red-500' : ''} m-5 ml-[5rem]  font-bold`}>
          Contact
        </Link>
</li>
<li>
        <Link href="/login"  className={` ${pathname === ('/login') ? 'text-red-500' : ''} m-5 ml-[20rem]  font-bold`}>
          Sign in
        </Link>
</li>

<li>
        <Link href="/register"  className={` ${pathname === ('/register') ? 'text-red-500' : ''} m-5  ml-[3rem] font-bold`}>
          Sign up
        </Link>
</li>

</ul>

   </div>
  );


}

export default  Header