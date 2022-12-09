import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { singleBlogApi, techServicesApi } from '../../pages/api/apiCalls'
import Loader from "../Loader"
import BlogsBanner from './BlogsBanner'
import RelatedBlogs from './RelatedBlogs'

const Blog = () => {
  const router = useRouter()
  const [blog, setBlog] = useState('')
  const [blogs, setBlogs] = useState([])
  const [description, setDescription] = useState('')

  const { slug } = router.query


  useEffect(() => {
    setBlogs([])
    if (router.isReady) {
      const index = blogs.indexOf(slug);
      console.log("index", blogs.indexOf(slug), slug)
      if (index !== -1) blogs.splice(index, 1);
      router.pathname?.split('/')[1] == "blogs" && singleBlogApi({ setBlog, setDescription, setBlogs, slug })
      router.pathname?.split('/')[1] == "tech-services" && techServicesApi({ setBlog, setDescription, setBlogs, slug })
    }

  }, [slug, router.isReady]);

  return (
    <>
      {
        blog ?
          <div className='px-0 lg:px-44 pb-20 ' >
            <div >
              <BlogsBanner
                banner={blog?.banner}
                title={blog?.title}
                auth_name={blog?.auth_name}
                date={blog?.updated_at}
              />
            </div >
            <main className='blogs-container bg-white pb-10 px-6 lg:px-0'>
              <div className='w-full h-full flex justify-center'>
                <article className='h-full '>
                  <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} >
                    {description}
                  </ReactMarkdown>
                </article>
              </div>
            </main>
            <RelatedBlogs blogs={blogs} slug={slug} />
          </div >
          :
          <Loader />
      }
    </>
  )
}

export default Blog
