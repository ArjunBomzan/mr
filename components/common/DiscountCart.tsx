function DiscountCart({ discount }: { discount: number }) {
    // let discount =" 30"; // Assuming discount is a percentage

    return (
        <div
            className={`
        absolute 
        -left-2
        -top-2
        h-28
        w-28
        overflow-hidden
      `}
        >
            <div
                className="!before:bg-primary-dark relative h-full
      
       w-full
       before:absolute
       before:right-11
       before:-z-10
       before:h-3 
       before:w-[0.75rem]
       before:rotate-[60deg]
       before:bg-red-700
  
       
       before:content-['']
       after:absolute
       after:bottom-8
       after:left-0
       after:-z-50 
       after:h-3
       after:w-[0.75rem]
       after:rotate-[20deg]  after:bg-red-700
       after:content-['']
      "
            >
                <p
                    className="absolute -left-7 top-4
         w-full 
         -rotate-[50deg]
         bg-red-600 text-center text-[14px]
          text-white
      
        "
                >
                    {discount}
                    {'%'} off
                </p>
            </div>
        </div>
    )
}

export default DiscountCart
