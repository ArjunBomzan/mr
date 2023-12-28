import Background from '../../assets/homePage/statistics-bg.jpg'
import FakePerson from '../../assets/aboutUsPage/fakeperson.jpg'
import Image from 'next/image'
interface personInterface {
  name: string,
  position: string,
  image: any
}

const Person = ({ name, position, image }: personInterface) => {
  return (
    <div className='flex flex-col bg-inherit rounded-md w-[70%]'>
      <div className='w-full overflow-hidden rounded-md'>
        {image}
      </div>
      <div className='pt-4'>
        <p className="text-white text-center font-bold text-xl md:text-base lg:text-xl">{name}</p>
        <p className="text-neutral-400 text-center font-bold">{position}</p>
      </div>
    </div>
  )
}

const OurTeam = () => {
  return (
    <section className='flex flex-col md:flex-row w-full'>
      <div className='w-full md:w-1/2'>
        <Image src={Background} alt='Work' className='w-full h-full' />
      </div>
      <div className='w-full p-10 md:w-1/2 bg-neutral-900 '>
        <p className="w-full text-center text-green-500 text-sm tracking-widest font-medium mb-5">OUR TEAM</p>
        <p className="text-white  font-bold text-lg sm:text-xl  text-center mb-10">Let us introduce ourselves</p>
        <div className='flex flex-col space-y-5 md:space-y-0 md:space-x-5 md:flex-row md:px-5 w-full items-center justify-center'>
          <Person
            name='John Doe'
            position='Developer'
            image={
              <Image src={FakePerson} alt='John Doe' />
            }
          />
          <Person
            name='John Doe'
            position='Developer'
            image={
              <Image src={FakePerson} alt='John Doe' />
            }
          />
          <Person
            name='John Doe'
            position='Developer'
            image={
              <Image src={FakePerson} alt='John Doe' />
            }
          />
        </div>
      </div>
    </section>
  )
}

export default OurTeam
