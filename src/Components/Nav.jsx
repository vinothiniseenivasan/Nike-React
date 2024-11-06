 import { headerLogo } from "../imageRepo/assets/images";
import { navLinks } from "../constant/index";
import { hamburger } from "../imageRepo/assets/icons";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav  className="flex justify-between items-center max-container">
        
           <a href="/">
             <img 
             src={headerLogo} 
                alt="logo"
                width={130}
                height={29}
             />
           </a>
          {/* max-lg:hidden => showing only on devices 1024px for small devices its hidden */}
           <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                   {/* list like about  */}
                   {
                    navLinks.map((item =>(
                        <li key={item.label}>
                            <a href={item.href}
                               className="font-montserrat leading-normal text-lg text-slate-gray "
                            >
                                  {item.label}

                            </a>
                        </li>
                    )))
                   }
                  
             
           </ul>

           {/* img of hamburger */}
           <div className="md:hidden">
                <img src={hamburger} 
                width={25}
                height={25}
               alt="" />
           </div> 



        </nav>

    </header>
  )
}

export default Nav