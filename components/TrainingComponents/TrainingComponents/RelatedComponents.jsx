
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { coursesApi } from "../../../pages/api/apiCalls";
import Image from "next/image"

const RelatedComponents = ({ course }) => {
  const router = useRouter();
  const pathname = router.pathname.split('/')[1]
  const { slug } = router.query
  const [courses, setCourses] = useState([]);
  // const ApiType = pathname == "courses" ? 6 : 7
  // const ApiType = pathname == "courses" ? 6 : 7
  const ApiType = null

  useEffect(() => {
    coursesApi({ setCourses, ApiType })
  }, []);

  return (
    // <div className="lg:px-18 md:px-14 px-6 sm:flex-col flex-col flex gap-10 mb-10 mt-10">
    <div className=" sm:flex-col flex-col flex gap-10 mb-10 mt-10">

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
                  href={`/${pathname == 'courses' ? 'courses' : 'after+2-courses'}/${course.slug}`}
                  key={course.id}
                >
                  <Image width={450} height={450} src={`${process.env.DOMAIN}${course.image}`} className="w-20" alt={`${course.slug}`} />
                  <p className="whitespace-nowrap truncate overflow-hidden">{course.title}</p>
                </Link>))
            })
          }
        </div>
      </div>

      {/* tags:
      {
        JSON.stringify(course.data.tag)
      } */}

      {
        course.data.tag?.length > 0
        &&
        <div className="">
          <p className="font-bold text-3xl">Browse by tags.</p>
          <div className="flex gap-3 flex-wrap mt-4" style={{ color: "blue" }}>
            {
              course.data.tag.map(tag => {
                return (
                  <p key={tag.id}
                    // onClick={() => {
                    //   router.push("/courses?tag=" + tag)
                    // }}
                    className="cursor-pointer lowercase">
                    <Link href={"/courses?tag=" + tag.name}>#{tag.name}</Link>
                  </p>
                )
              })
            }
            {/* <p className="cursor-pointer">#PHP</p>
            <p className="cursor-pointer">#Vue.Js Career</p>
            <p className="cursor-pointer">#Web Development</p>
            <p className="cursor-pointer">#MERN</p> */}
          </div>
        </div>
      }
    </div >
  )
}

export default RelatedComponents