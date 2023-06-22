import Logo from './Logo.png'
import Image from 'next/image'
import Link from 'next/link'



export default function Header() {
  return (




<ul className='.m-40 fixed flex h-nav  bg-white top-0 w-screen p-9'>
  
  <li> <Link href='#' > <Image src={Logo} height={61} width={176} alt='logo' className='ml-10  -mt-3'/></Link> </li>   
  <li><Link href='#'className='ml-nav  text-nav font-bold'> Home</Link> </li>  
  <li> <Link href='#'className='ml-nav text-nav font-bold'> About</Link>  </li>  
  <li>   <Link href='#'className='ml-nav text-nav font-bold'> Safety</Link>  </li>  
  <li>  <Link href='#'className='m-10 ml-nav text-nav font-bold' > Contact</Link>  </li>  
  <li>   <Link href='/login'className='ml-56 text-nav font-bold' > Login</Link>  </li> 
  <li>  <Link href='/register'className='m-5 ml-nav text-nav font-bold' > Sign Up</Link>  </li>  

    </ul> 

    

 



  )
}
