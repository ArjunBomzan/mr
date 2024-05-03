import { useRouter } from 'next/router'
// import rehypeRaw from 'rehype-raw'
// import remarkGfm from 'remark-gfm'
import Loader from "../Loader"
import BlogsBanner from './BlogsBanner'
import RelatedBlogs from './RelatedBlogs'
import dynamic from 'next/dynamic'
import Head from "next/head"
import SingleBlogBanner from './SingleBlogBanner'
import formatDate from '../../utils/formatDate'
// import sanitizeHtml from 'sanitize-html';


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
          <>
            <Head>
              <meta name="title" content={props?.blog?.title} />
            </Head>
            <div >
              <SingleBlogBanner
                blog={props.blog}
                banner={props?.blog?.banner}
                title={props?.blog?.title}
                auth_name={props?.blog?.auth_name}
                date={props?.blog?.updated_at}
              />
            </div >
            <div className='px-6 lg:px-44 pb-20 ' >
              <p className=' text-xl sm:text-2xl md:text-3xl  w-ma font-bold  mt-8 md:mt-12 lg:mt-14 mb-4   '>
                {props?.blog?.title}
              </p>
              <main className='blogs-container bg-white '>

                <div className='w-full h-full flex justify-center'>
                  <article className='h-full ' dangerouslySetInnerHTML={{ __html: props?.blog?.description }}>
                    {/* <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} >
                      {props?.blog?.description}
                    </ReactMarkdown> */}
                  </article>
                </div>
                <p className='my-2'>Published At :  {formatDate(props?.blog?.created_at)}</p>
              </main>
              <BlogShare />
              <RelatedBlogs blog={props?.blog} slug={slug} />
            </div >
          </>
          :
          <Loader />
      }
    </>
  )
}

export default Blog
