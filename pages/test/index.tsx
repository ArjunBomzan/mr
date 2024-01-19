import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Link from "next/link";

export default function index() {
    return (
        <>
            <p>test page</p>
            <Link href={"/blogs?page=2"}> /blogs?page=2</Link>
            <br/>
            <Link href={"/blogs?page=3"}> /blogs?page=3</Link>
            <br/>
            <Link href={"/courses?tag=frontend"}> /courses?tag=frontend</Link>
            <br/>
            <Link href={"/courses?q=frontend"}> /courses?q=frontend</Link>
            <br/>
        </>
    );
}
