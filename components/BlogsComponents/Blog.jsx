import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import Loader from "../Loader"
import BlogsBanner from './BlogsBanner'
import RelatedBlogs from './RelatedBlogs'
import dynamic from 'next/dynamic'
const BlogShare = dynamic(
  () => import('./BlogShare'),
  { ssr: false }
)

const Blog = (props) => {
  const router = useRouter()
  const { slug } = router.query
  return (
    <>
      {
        props?.blog ?
          <div className='px-0 lg:px-44 pb-20 ' >
            <div >
              <BlogsBanner
                banner={props?.blog?.banner}
                title={props?.blog?.title}
                auth_name={props?.blog?.auth_name}
                date={props?.blog?.updated_at}
              />
            </div >
            <main className='blogs-container bg-white  px-6 lg:px-0'>
              <div className='w-full h-full flex justify-center'>
                <article className='h-full '>
                  <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} >
                    {props?.blog?.description}
                  </ReactMarkdown>
                </article>
              </div>
            </main>
            <BlogShare />
            <RelatedBlogs blog={props?.blog} slug={slug} />
          </div >
          :
          <Loader />
      }
    </>
  )
}

export default Blog
