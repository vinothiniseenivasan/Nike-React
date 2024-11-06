
const ShoeCard = ( {imgURL , changeBigShoeImage ,bigShoeImage}) => {

    function handleClick()
    {
        if(bigShoeImage !== imgURL.bigShoe)
        {
            changeBigShoeImage(imgURL.bigShoe);
        }

    }
  return (
    <div
     
    onClick={handleClick}
    
    className={`border-2 rounded-xl 
             ${bigShoeImage === imgURL.bigShoe ? `border-coral-red`:`border-transparent`}
               cursor-pointer max-sm:flex-1
                   `}
         >
        <div className="flex justify-center items-center bg-card bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img 
                src={imgURL.thumbnail}
                alt="shoe collectio"
                width={127}
                height={103}
                className="object-contain"/>
        </div>
        
        
        </div>
  )
}

export default ShoeCard