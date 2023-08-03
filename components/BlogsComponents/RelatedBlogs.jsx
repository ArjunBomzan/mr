import { useRouter } from 'next/router'
import BlogCard from './BlogCard'
import { useEffect, useState } from "react";
import axios from 'axios';

const RelatedBlogs = (props) => {
    const router = useRouter()
    const { slug } = router.query
    const type = router.pathname?.split('/')[1]
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        function fetchBlog() {
            axios.get(`${process.env.DOMAIN_V1}singleblog/?category=${props?.blog?.category}`)
                .then(res => setBlogs(res.data?.navigation?.data || []))
                .catch(err => console.log(err))
        }
        fetchBlog()

    }, []);

    return (
        <div className=" px-6 lg:px-0" >
            {
                blogs?.filter(blog => slug != blog.slug)?.length > 0
                &&
                <h2 className='text-4xl font-bold'>
                    {type == "blogs" && <span> Recent Blogs</span>}
                </h2>
            }
            <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:gap-10 lg:grid-cols-3 my-10'>
                {
                    blogs?.map((blog) => {
                        return (!(slug == blog.slug) && (
                            <BlogCard
                                title={blog.title}
                                blurb={blog.short_desc}
                                thumbnail={blog.img ? blog.img : blog.image}
                                url={blog.slug}
                                imgAlt={blog.title}
                                key={blog.id}
                            />
                        ))
                    })
                }
            </div>
        </div>
    )
}

export default RelatedBlogs