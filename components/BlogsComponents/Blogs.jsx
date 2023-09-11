import { useRouter } from "next/router";
import BlogCard from "./BlogCard";
import BlogsBanner from "./BlogsBanner";
import Pagination from 'rc-pagination';


const Blogs = ({ blogs, current_page, total_data }) => {
  const router = useRouter()
  return (
    <>
      <main className={`h-max w-full`}>
        <BlogsBanner title="Blogs" desc="Got a moment to read our latest blogs?" />
        <section className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:gap-4 lg:grid-cols-4 my-10 pt-4 pb-4 px-8 sm:px-12 md:px-14 lg:px-18  '>
          {
            blogs?.map((blog) => {
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

        {
          blogs.length > 0
          &&
          <div className='paginate-wrapper text-center  mb-5 md:mb-16 '>
            <Pagination
              pageSize={12}
              current={current_page}
              showTotal={(total, range) =>
                `${range[0]} - ${range[1]} of ${total} items`
              }
              total={total_data}
              onChange={(e) => {
                if (router.isReady) {
                  let query = router.query
                  query.page = (e)
                  router.push(`/blogs?page=${e}`)
                }
              }}
              prevIcon={(() => {
                return "<"
              })}
              nextIcon={(() => {
                return ">"
              })}
              className=' '
            />
          </div>
        }


      </main>

    </>
  )
}

export default Blogs
