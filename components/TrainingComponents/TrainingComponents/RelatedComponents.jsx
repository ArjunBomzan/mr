
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
  useEffect(() => {
    coursesApi({ setCourses })
  }, []);
  return (
    <div className="lg:px-44 md:px-20 px-4 sm:flex-row flex-col flex gap-10 mb-10 mt-10">

      <div>
        <p className="font-bold text-3xl">Related Courses</p>
        <div
          className="grid gap-2 mt-4 overflow-auto"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          {
            courses?.slice(0, 7)?.map((course) => {
              return (!(slug == course.slug) && (
                <Link
                  className="flex gap-1 items-center w-48"
                  href={`/${pathname == 'courses' ? 'courses' : '+2courses'}/${course.slug}`}
                  key={course.id}
                >
                  <img src={`${process.env.DOMAIN}${course.image}`} className="w-20" />
                  <span className="whitespace-nowrap max-w-[7rem] overflow-hidden">{course.title}</span>
                </Link>))
            })
          }
        </div>
      </div>

      <div className="">
        <p className="font-bold text-3xl">Browser by tags.</p>
        <div className="flex gap-3 flex-wrap mt-4" style={{ color: "blue" }}>
          <span className="flex-[40%] cursor-pointer">#PHP</span>
          <span className="flex-[40%] cursor-pointer">#Vue.Js Career</span>
          <span className="flex-[40%] cursor-pointer">#Web Development</span>
          <span className="flex-[40%] cursor-pointer">#MERN</span>
        </div>
      </div>
    </div >
  )
}

export default RelatedComponents