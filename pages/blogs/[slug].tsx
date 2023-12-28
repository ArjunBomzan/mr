import Head from "next/head";
import { useRouter } from "next/router";
import BannerWrapper from "../../components/common/BannerWrapper";
import Image from "next/image";
import { BlogCard } from "./index";
import Opportunity from "../../public/assets/images/common/Opportunity";

import { FaFacebook } from "react-icons/fa6";

export default function BlogSlug(props) {
    const router = useRouter();

    let meta_description = props?.blog?.data?.blog[0]?.short_desc || "";
    let meta_image = `${process.env.NEXT_PUBLIC_DB_DOMAIN}${props?.blog?.data?.blog[0]?.banner}`;
    let current_url = `${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`;

    return (
        <div>
            <Head>
                <meta
                    name="keywords"
                    content={`mindrisers nepal, blogs, it training center, kathmandu,${props?.blog?.data?.blog?.[0]?.page_title}`}
                />
                <title>{props?.blog?.data?.blog?.[0]?.page_title}</title>
                {/* facebook og tags */}
                <meta property="og:url" content={current_url} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={`${props?.blog?.data?.blog?.[0]?.page_title}`}
                />
                <meta property="og:description" content={meta_description} />
                <meta property="og:image" content={meta_image} />

                {/* twitter og tags */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="Mindrisers" />
                <meta name="twitter:creator" content="@mindrisers" />
                <meta
                    property="twitter:title"
                    content={`${props?.blog?.data?.blog?.[0]?.page_title}`}
                />
                <meta
                    property="twitter:description"
                    content={meta_description}
                />
                <meta name="twitter:image" content={meta_image} />

                {props?.blog?.data?.metatagblog?.map((meta) => {
                    return (
                        <meta
                            key={meta?.id}
                            name={meta?.name}
                            content={meta?.content}
                            property={meta?.property}
                        />
                    );
                })}
            </Head>
            <BannerWrapper size="small">
                <div className="container ">
                    <p className="header-md title-space text-center leading-[145%]">
                        MERN Stack project to grab your first Internship in
                        Kathmandu? | Mindrisers
                    </p>
                    <p className="text-center title leading-[145%]">
                        Python is a simple to learn and popular programming
                        language that people use to write instructions for
                        computers. It's designed to be easy to read and write,
                        making it accessible for beginners while also powerful
                        enough for experts to use in various applications.
                    </p>
                </div>
            </BannerWrapper>
            <div className="section-wrapper-m ">
                <div className=" title-space-3xl container">
                    <ul className="flex flex-wrap justify-center gap-[12px]  ">
                        {["all", "digital marketing", "flutter", "python"].map(
                            (el) => {
                                return (
                                    <li className="rounded-xl bg-green-50 p-[10px] text-[14px] capitalize leading-[145%] text-primary">
                                        {el}
                                    </li>
                                );
                            },
                        )}
                    </ul>
                </div>

                <section className="title-space-5xl container  lg:px-[40px] ">
                    <Image
                        src="/assets/images/blogs/image 46.png"
                        height={1000}
                        width={1000}
                        alt=""
                        className=" max-h-[507px] w-full rounded-3xl object-cover"
                    />
                </section>
                <section className="container">
                    <div className="flex flex-col gap-[35px] xl:flex-row xl:items-start ">
                        <div className="flex flex-row justify-center items-center xl:flex-col gap-5">
                            <div className="flex-center h-[44px] w-[44px] rounded-[9px] border border-border">
                                <FaFacebook className="text-2xl" />
                            </div>
                            <div className="flex-center h-[44px] w-[44px] rounded-[9px] border border-border">
                                <FaFacebook className="text-2xl" />
                            </div>
                            <div className="flex-center h-[44px] w-[44px] rounded-[9px] border border-border">
                                <FaFacebook className="text-2xl" />
                            </div>
                            <div className="flex items-center gap-[5px] lg:gap-[10px] xl:flex-col ">
                                <p className=" title font-semibold leading-[145%]">
                                    367
                                </p>
                                <p className="text-[14px] leading-[145%]">
                                    views
                                </p>
                            </div>
                        </div>
                        <div className="flex-grow pb-[40px]">
                            <div className="text-[18px] leading-[145%]">
                                MERN stack combines these four technologies:
                                MongoDB for the database, Express.js for the
                                server framework, React.js for the user
                                interface, and Node.js for the server-side
                                environment. Together, they form a powerful and
                                efficient stack for building modern web
                                applications. Join us at Mindrisers, Putalisadak
                                to be part of this journey. Introduction Whether
                                you're a tech enthusiast, an aspiring IT
                                professional, or a business owner navigating the
                                digital landscape, this blog series is your
                                gateway to understanding the trends reshaping
                                our world. Join us as we unravel the mysteries
                                of IT technology, decode the buzzwords, and
                                witness the impact these innovations are making
                                on society. At Mindrisers located at the heart
                                of Kathmandu Putalisadak, we welcome all the
                                tech enthusiasts, aspiring IT professionals,
                                business owners, and anyone interested in IT to
                                be part of this trend to reshape the world for a
                                better future for us and future generations and
                                also pave paths for betterment of future. What
                                is MERN Stack? MERN stands for: MongoDB: This is
                                a type of database where you can store data for
                                your web application. It's like a digital filing
                                cabinet where you keep all your information.
                                Express.js: This is a web application framework
                                for Node.js, a platform that allows you to run
                                JavaScript on the server side of your
                                application. Express.js makes it easier to
                                handle things like web requests and routes.
                                React.js: This is a JavaScript library for
                                building user interfaces. It allows you to
                                create interactive and dynamic elements on your
                                web pages. Think of it as the tool you use to
                                design how your website looks and behaves.
                                Node.js: This is a runtime environment that lets
                                you run JavaScript on the server side. It's the
                                engine that powers your server and allows your
                                web application to function. So, in short, the
                                it is a combination of these four technologies.
                                At Mindrisers, Putalisadak we teach MERN stack
                                join us now. Scope of MERN stack in Nepal In
                                Nepal, the tech industry has been growing
                                steadily, and there is a demand for skilled web
                                developers and engineers. The MERN stack, being
                                a widely used technology, certainly has a scope.
                                Many startups and IT companies in Nepal are
                                using or exploring the MERN stack for their
                                projects. So, now is the time to join us at
                                Mindrisers in Putalisadak to learn and master
                                it. MERN stack as a career option? Choosing to
                                specialize in the MERN (MongoDB, Express.js,
                                React.js, Node.js) stack can be a promising
                                career choice, especially considering the
                                increasing demand for web development skills in
                                the industry. It is popular among developers due
                                to its flexibility, scalability, and efficiency
                                in building modern web applications. Here are
                                some reasons why pursuing a career in the MERN
                                stack can be a good choice for the future. So,
                                don't be late to start come and join us at
                                Mindrisers, Putalisadak. Why choose MERN stack?
                                High Demand: Many businesses are adopting it for
                                their web development needs. As a result,
                                there's a high demand for developers skilled in
                                these technologies. Companies, ranging from
                                startups to established enterprises, are
                                actively seeking MERN stack developers.
                                Versatility: It allows you to build both
                                front-end and back-end components of a web
                                application. With expertise in all these
                                technologies, you become a full-stack developer,
                                making you versatile and valuable in the job
                                market. Community and Resources: There is a
                                large and active community of developers using
                                MERN stack technologies. This means ample
                                resources, tutorials, and community support,
                                which are invaluable when you're learning and
                                solving real-world problems. Freelancing
                                Opportunities: With MERN stack skills, you can
                                take on freelancing projects and work as an
                                independent developer or consultant. Many
                                businesses look for freelancers to help them
                                build web applications, providing you with
                                opportunities to work on diverse projects.
                                Scalability and Performance: It is known for its
                                ability to handle large-scale applications and
                                high traffic. Understanding how to optimize the
                                performance of web applications can make you a
                                sought-after developer. These features make it
                                widely used now a days and has higher demand in
                                Putalisadak, Kathmandu, Bhaktapur and Lalitpur.
                                Learning it now makes you have a good career
                                path in future so join us now at Mindrisers,
                                Putalisadak. Role of Mindrisers in developing
                                MERN stack developers IT (Information
                                Technology) institutes play a crucial role in
                                today's digital age by providing education,
                                training, and skill development in various
                                fields related to information technology. These
                                institutes are instrumental in shaping the
                                workforce of the future and driving
                                technological advancements. Mindrisers has been
                                playing this role for some time now and has been
                                in a commanding position to produce MERN stack
                                developers and supply talents to It companies in
                                Putalisadak, Kathmandu, Lalitpur, and Bhaktapur.
                                Why you should choose Mindrisers Reputation: We
                                have a reputation for producing high and fine
                                quality It professionals all over Nepal and
                                fulfilling the expected needs of students who
                                enroll in our institutes. Curriculum: We have
                                designed and kept the curriculum in such a way
                                that our students do as many projects and
                                assignments as possible which helps them face
                                the problems and solve them in the real world.
                                Faculty: We have many high-quality and
                                experienced instructors in our faculty. Our
                                instructors are capable of teaching students in
                                a simple and effective way so that every student
                                can understand the topics and courses. Industry
                                Connections: We have been supplying our talents
                                to many It companies at Putalisadak and all over
                                Nepal. We provide guaranteed internships and job
                                placement for deserving candidates. Location and
                                Accessibility: We are located at the heart of
                                Putalisadak, Kathmandu IT hub of Nepal making it
                                easier for many students to come and attend the
                                classes. For those who cannot attend the class
                                physically, we also provide online classes so
                                that students can attend classes from all over
                                Nepal. So, ultimately students should choose
                                institutes that align with their goal and
                                expectations and we think we fulfill all of
                                those so hurry and join us now at Mindrisers,
                                Putalisadak. FAQ What is the MERN stack?It
                                combines these four technologies: MongoDB for
                                the database, Express.js for the server
                                framework, React.js for the user interface, and
                                Node.js for the server-side environment.
                                Together, they form a powerful and efficient
                                stack for building modern web applications.
                                Where can I learn the MERN stack?You can learn
                                it at Mindrisers, Putalisadak. Where are
                                Mindrisers located?It is located at Putalisadak,
                                Kathmandu. What is the scope of the MERN stack
                                in Nepal?In Nepal, the tech industry has been
                                growing steadily, and there is a demand for
                                skilled web developers and engineers. The MERN
                                stack, being a widely used technology, certainly
                                has a scope in Nepal as well. Many startups and
                                IT companies in Nepal are using it for their
                                projects.
                            </div>
                            <div>
                                <div className=" mt-[20px]">
                                    <ul className="flex flex-wrap gap-[12px]  ">
                                        {[
                                            "all",
                                            "digital marketing",
                                            "flutter",
                                            "python",
                                        ].map((el) => {
                                            return (
                                                <li className="rounded-xl bg-green-50 p-[10px] text-[14px] capitalize leading-[145%] text-primary">
                                                    {el}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="min-w-[314px]">
                            <p className="sub-header-lg title-space-lg text-body">
                                Recent
                            </p>
                            <div>
                                <ul>
                                    {[1, 2, 3, 4].map((el) => {
                                        return (
                                            <li className="mb-10 flex items-start gap-[10px] title">
                                                <span className="flex-center min-h-[40px] min-w-[40px] rounded-xl bg-gray-100 font-bold">
                                                    01
                                                </span>
                                                <span className=" leading-[145%]">
                                                    Fonepay just launches its
                                                    own Teller Machine. Learn
                                                    what’s new.
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </section>

                {/* <section className="container section-wrapper-m-sm">
                    <div className="mb-5 flex justify-between">
                        <p className="sub-header-lg">Recent Post</p>
                        <p>View All</p>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-base-half">
                        {new Array(4).fill(null).map((el) => {
                            return <BlogCard
                             />;
                        })}
                    </ul>
                </section> */}
                <section className="container">
                    <Opportunity />
                </section>
            </div>
        </div>
    );
}
