interface cultureCardInterface {
  icon: any,
  title: string,
  info: string
}

const CultureCard = ({ icon, title, info }: cultureCardInterface) => {
  return (
    <div className='border-2 rounded-md border-green-500 p-8'>
      <div className="flex flex-row space-x-4 align-center justify-start mb-4">
        {icon}
        <h3 className=' font-bold text-2xl pt-1'>{title}</h3>
      </div>
      <p>
        {/* {info} */}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis exercitationem cupiditate quasi harum dignissimos nemo!
      </p>
    </div>
  )
}

export default CultureCard
