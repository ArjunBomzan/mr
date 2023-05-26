import BlogCard from "./BlogCard";
import BlogsBanner from "./BlogsBanner";

const Blogs = (props) => {
  return (
    <>
          <main className={`h-max w-full`}>
            <BlogsBanner title="Blogs" desc="Got a moment to read our latest blogs?" />
            <section className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:gap-10 lg:gap-10 lg:grid-cols-3 my-10 pt-4 pb-4 px-8 sm:px-12 md:px-14 lg:px-18 '>
              {
                props?.blogs?.map((blog) => {
                  debugger
                  return (
                    <BlogCard

                      index={true}
                      title={blog.title}
                      blurb={blog.short_desc}
                      thumbnail={blog.img ? blog.img : blog.image}
                      md={"We help you get placed in top companies."}
                      url={blog.slug}
                      imgAlt={blog.title}
                      key={blog.slug}
                      created_at={blog.created_at}
                    />
                  )
                })
              }
            </section>
          </main>
         
    </>
  )
}

export default Blogs
