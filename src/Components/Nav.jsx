import { headerLogo } from "../imageRepo/assets/images"

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
            list of items

           </ul>



        </nav>

    </header>
  )
}

export default Nav