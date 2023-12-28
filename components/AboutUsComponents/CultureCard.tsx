interface cultureCardInterface {
  icon: any,
  title: string,
  info: string
}

const CultureCard = ({ icon, title, info }: cultureCardInterface) => {
  return (
    <div className='border-2 rounded-md border-green-500 p-8 md:w-[33.33%]'>
      <div className="flex flex-row space-x-4 align-center justify-start mb-4">
        {icon}
        <p className=' font-bold text-2xl pt-1'>{title}</p>
      </div>
      <p>
        {info}
      </p>
    </div>
  )
}

export default CultureCard
