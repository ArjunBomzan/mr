import Image from "next/image"
import Link from "next/link"


/**
 * list of courses
 * @param  {Array} courses
 * 
 * @returns 
 */

type courseType = {
  image: string,
  title: string,
  duration: string,
}

export default function CoursesList({ courses }: { courses: courseType[] }) {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-base-half'>
      {
        courses.map((el: courseType) => {
          return <li className='   '>
            <Link href={"/courses/adf"} className="block border border-border rounded-xl p-5 group hover:border-primary transition hover:shadow-medium">
              <Image alt="" src={el.image} width={300} height={300} className='mb-5' />{/* Property 'image' does not exist on type '{ el: courseType; }'.t */}
              <p className='sub-header title-space-md text-expanded'>{el.title}</p>
              <p className='header-space-xs'>{el.duration}</p>
              <button className='btn-gray hover:bg-green-50 hover:text-primary  transition '>Learn More</button>
            </Link>

          </li>
        })
      }
    </ul>
  )
}