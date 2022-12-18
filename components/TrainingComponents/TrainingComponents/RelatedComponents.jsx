
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { coursesApi } from "../../../pages/api/apiCalls";

const RelatedComponents = () => {
  const router = useRouter();
  const pathname = router.pathname.split('/')[1]
  const { slug } = router.query
  const [courses, setCourses] = useState([]);
  const ApiType = pathname == "courses" ? 1 : 2
  useEffect(() => {
    coursesApi({ setCourses, ApiType })
  }, []);
  return (
    <div className="lg:px-18 md:px-14 px-8 sm:flex-col flex-col flex gap-10 mb-10 mt-10">

      <div className=''>
        <p className="font-bold text-3xl">Related Courses</p>
        <div
          className="grid gap-2 mt-4 overflow-auto grid-cols-1 sm:grid-cols-2  lg:grid-cols-3"
        // style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          {
            courses?.slice(0, 7)?.map((course) => {
              return (!(slug == course.slug) && (
                <Link
                  className="flex gap-1 items-center truncate"
                  href={`/${pathname == 'courses' ? 'courses' : '+2courses'}/${course.slug}`}
                  key={course.id}
                >
                  <img src={`${process.env.DOMAIN}${course.image}`} className="w-20" />
                  <span className="whitespace-nowrap truncate overflow-hidden">{course.title}</span>
                </Link>))
            })
          }
        </div>
      </div>

      <div className="">
        <p className="font-bold text-3xl">Browser by tags.</p>
        <div className="flex gap-3 flex-wrap mt-4" style={{ color: "blue" }}>
          <span className="cursor-pointer">#PHP</span>
          <span className="cursor-pointer">#Vue.Js Career</span>
          <span className="cursor-pointer">#Web Development</span>
          <span className="cursor-pointer">#MERN</span>
        </div>
      </div>
    </div >
  )
}

export default RelatedComponents