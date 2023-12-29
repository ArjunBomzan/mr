import Image from "next/image";
import Link from "next/link";
import { makeFullUrl } from "../../utils/makeFullUrl";

/**
 * list of courses
 * @param  {Array} courses
 *
 * @returns
 */

type courseType = {
    image: string;
    title: string;
    duration: string;
    slug: string;
};

export default function CoursesList({ courses }: { courses: courseType[] }) {
    return (
        <ul className="gap-base-half grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {courses.map((el) => {
                return (
                    <li className="   ">
                        <Link
                            href={`/courses/${el.slug}`}
                            className="hover:shadow-medium group block rounded-xl border border-border p-5 transition hover:border-primary"
                        >
                            <Image
                                priority
                                alt=""
                                src={makeFullUrl(el.image)}
                                width={300}
                                height={300}
                                className="mb-5"
                            />
                            {/* Property 'image' does not exist on type '{ el: courseType; }'.t */}
                            <h3 className="sub-header title-space-md text-expanded">
                                {el.title}
                            </h3>
                            <p className="header-space-xs">{el.duration}</p>
                            <button className="btn-gray transition group-hover:bg-green-50  group-hover:text-primary ">
                                Learn More
                            </button>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}