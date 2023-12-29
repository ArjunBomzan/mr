import Image from "next/image";
import Logo from "../../assets/mindrisers-white.png";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

let data = {
    title: "Navigation",
    menus: [
        {
            title: "our courses",
            url: "/courses",
        },
        {
            title: "post +2 courses",
            url: "/after+2-courses",
        },
        {
            title: "placement partner",
            url: "/placement-partner",
        },
        {
            title: "successful stories",
            url: "/success-gallery",
        },
        {
            title: "blogs",
            url: "/blogs",
        },
    ],
};
let socialData = {
    popup: true,
    title: "Get regular updates",
    menus: [
        {
            title: "facebook",
            url: "https://ww.facebook.com",
            icon: <FaFacebook className="inline" />,
        },
        {
            title: "youtube",
            url: "https://ww.facebook.com",
            icon: <FaYoutube className="inline" />,
        },
        {
            title: "instagram",
            url: "https://ww.facebook.com",
            icon: <FaInstagram className="inline" />,
        },
    ],
};
let resourcesData = {
    title: "resources",
    menus: [
        {
            title: "Help center",
            url: "#",
        },
        {
            title: "support",
            url: "#",
        },
        {
            title: "events",
            url: "#",
        },
    ],
};

let aboutData = {
    title: "About",
    menus: [
        {
            title: "our story",
            url: "#",
        },
        {
            title: "media kit",
            url: "#",
        },
        {
            title: "careers",
            url: "#",
        },
        {
            title: "contact us",
            url: "/contact-us",
        },
    ],
};
const FooterLinks = ({
    data,
    extendedClassName,
    extendedGroupClassName,
    showTitle = true,
}: {
    data: any;
    showTitle?: boolean;
    extendedClassName?: string;
    extendedGroupClassName?: string;
}) => {
    return (
        <div className={`${inter.className} ${extendedClassName}`}>
            {showTitle && (
                <p className={` mb-5 text-base font-semibold uppercase`}>
                    {data.title}
                </p>
            )}
            <ul className={extendedGroupClassName}>
                {data.menus.map((el) => {
                    return (
                        <li
                            className={`mb-5 text-sm font-medium capitalize leading-5`}
                        >
                            <Link
                                target={data.popup ? "_blank" : "_self"}
                                href={el.url}
                            >
                                {el.icon && (
                                    <span className="mr-3">{el.icon}</span>
                                )}{" "}
                                {el.title}{" "}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="bg-primary text-sm text-white">
            <div className="section-wrapper-p-sm gap-sm container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                <div className="section-space-3xl col-span-2 text-center  md:col-span-4 lg:col-span-1 lg:text-left xl:mb-0">
                    <div className="title-space-xl flex items-center justify-center gap-2 lg:flex-col lg:justify-start xl:flex-row">
                        <Image
                            src={Logo}
                            className="h-[3.375rem] w-[3.375rem]"
                            width={300}
                            height={300}
                            alt=""
                        />
                        <p className={`${inter.className} title-xl`}>
                            mindrisers
                        </p>
                    </div>
                    <p>
                        Mind Risers is the only IT training institute in
                        Kathmandu, Nepal offering paid internships after the
                        course completion
                    </p>
                </div>
                <FooterLinks data={data} />
                <FooterLinks data={socialData} />
                <FooterLinks data={resourcesData} />
                <FooterLinks data={aboutData} />
            </div>
            <div className="containe flex flex-col md:flex-row flex-wrap gap-5 px-3 justify-around border-t border-green-700 py-[1.875rem] text-sm font-medium">
                <p className="text-center">
                    <span>&copy;{currentYear} Mindrisers</span>
                </p>
                <p className="flex gap-3">
                    <span>Terms &amp; contidions</span>
                    <span>Cookies</span>
                    <span>Privacy Policies</span>
                </p>
                <FooterLinks showTitle={false} data={socialData} extendedGroupClassName={"flex gap-5"} />
            </div>
        </footer>
    );
};

export default Footer;
