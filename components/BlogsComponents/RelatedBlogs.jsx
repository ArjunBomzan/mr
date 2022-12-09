import { useRouter } from 'next/router'
import React from 'react'
import BlogCard from './BlogCard'

const RelatedBlogs = (props) => {
    const router = useRouter()
    const type = router.pathname?.split('/')[1]
    return (
        <div className=" px-6 lg:px-0" >
            <h3 className='text-4xl font-bold'>
                {type == "blogs" && <span>Recent Blogs</span>}
                {type == "tech-services" && <span>Other Services</span>}
                {type == "services" && <span>Other Services</span>}
            </h3>
            <section className='grid gap-8 grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:gap-10 lg:grid-cols-3 my-10'>
                {
                    props?.blogs?.slice(0, 3)?.map((blog) => {
                        return (<BlogCard
                            title={blog.title}
                            // blurb="Lifting your people and business"
                            blurb={blog.short_desc}
                            thumbnail={blog.img ? blog.img : blog.image}
                            url={blog.slug}
                            imgAlt={blog.title}
                            key={blog.id}
                        />
                        )
                    })
                }
            </section>
        </div>
    )
}

export default RelatedBlogs