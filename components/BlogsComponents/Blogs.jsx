import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { singleBlogApi, techServicesApi } from "../../pages/api/apiCalls";
import Loader from "../Loader";
import BlogCard from "./BlogCard";
import BlogsBanner from "./BlogsBanner";


const Blogs = () => {
  const router = useRouter()
  const [blogs, setBlogs] = useState();
  const type = router.pathname?.split('/')[1]
  useEffect(() => {
    setBlogs()
    {
      type == "blogs" && (singleBlogApi({ setBlogs }))
      type == "tech-services" && (techServicesApi({ setBlogs }))
      type == "services" && (techServicesApi({ setBlogs }))
    }
  }, [router.pathname]);
  return (
    <>

      {
        blogs ? (
          <main className={`h-max w-full`}>
            {
              type == "blogs" ?
                <BlogsBanner title="Blogs" desc="Got a moment to read our latest blogs?" />
                :
                <h2 className='w-full text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-sans mt-12 mb-10'>Tech services we provide</h2>

            }
            <section className='grid gap-4 grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:gap-10 lg:grid-cols-3 my-10 lg:px-44 md:px-20 sm:px-2 px-4'>
              {
                blogs?.map((blog) => {
                  return (
                    <BlogCard
                      title={blog.title}
                      // blurb="Lifting your people and business"
                      blurb={blog.short_desc}
                      thumbnail={blog.img ? blog.img : blog.image}
                      md={"We help you get placed in top companies."}
                      url={blog.slug}
                      imgAlt={blog.title}
                      key={blog.slug}
                    />
                  )
                })
              }
            </section>
          </main>)
          :
          <Loader />
      }
    </>
  )
}

export default Blogs
