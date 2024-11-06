import Button from "../Components/Button"
import { shoes, statistics } from "../constant"
import { arrowRight } from "../imageRepo/assets/icons"
import { bigShoe1 } from "../imageRepo/assets/images";
import ShoeCard from "../Components/ShoeCard";
import { useState } from "react";

const Hero = () => {


    const [bigShoeImg , setBigShoeImg] = useState(bigShoe1);
  return (
    <section
        id="home"
        className="w-full flex  flex-col  xl:flex-row  justify-center min-h-screen gap-10 max-container"
    >

        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
                <p className="text-xl font-montserrat text-coral-red">
                    Our Summer Collections
                </p>
                <h1 className="mt-10 font-palanquin text-8xl   max-sm:text-[72px]">
                
                     <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
                         The New Arrival
                     </span>
                     <br />
                     <span className="text-coral-red inline-block mt-3">Nike

                     </span>   Shoes
                    
                
                </h1>
                

                <p className="text-gray-400 text-lg  leading-8 mt-6 mb-14">
                    Discover stylish arrivals ,quality comport , and innovation for your active life.
                </p>
                <Button  label = "Shop Now"
                iconURL ={arrowRight}
                />

                <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                    {
                    (statistics.map( (eachStat , index)=>(
                        <div key={index}>
                            <p className="text-4xl font-palanquin  font-bold">{eachStat.value}</p>
                            <p className="leading-7 font-montserrat text-slate-gray">{eachStat.label}</p>
                        </div>

                    ))
                   )
                   }
                </div> 


        </div>

        {/* images of shoes */}
        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-blue-100 ">
    
             <img 
                 src={bigShoeImg}
                 alt = "shoe collection"  
                 width={610}
                 height={500}
                 className="object-contain relative z-10 "/>

                 {/* multiple shoes for toggle */}
                 {/* container */}
                 <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">

                    {
                        ( shoes.map((eachShoe,index)=>(
                            <div key={index}>
                                  <ShoeCard
                                     imgURL= {eachShoe} 
                                     changeBigShoeImage={(eachShoe)=>{setBigShoeImg(eachShoe)}}
                                     bigShoeImage={bigShoeImg}
                                     />
                                </div>
                        )) )
                    }
                 

                  
                 </div>

        </div>

    </section>
  )
}

export default Hero