import Logo from "../../assets/mindrisers.png"
import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/router";
import { Inter } from '@next/font/google'
import { RiMenu3Line } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
const inter = Inter({ subsets: ['latin'] })

const Header = () => {


  const router = useRouter()
  const route = router.route //  eg: /courses /blogs
  console.log(route);


  let navLinks = [   // split middlenav and right nav
    {
      title: "our courses",
      url: "/courses"
    },
    {
      title: "post +2 courses",
      url: "/after+2-courses"
    },
    {
      title: "placement partner",
      url: "/placement-partner"
    },
    {
      title: "successful stories",
      url: "/success-gallery"
    },
    {
      title: "blogs",
      url: "/blogs"
    },
    {
      title: "contact us",
      url: "/contact-us"
    },
  ]


  /* for marking active nav link */
  const genCommonNavLinkClass = (el) => {
    let commonNavLinkClass = `relative hover:text-primary ${route == el.url ? `text-primary 
    after:content-['']
    after:absolute
    after:-bottom-1
    after:left-0
    after:right-0
    after:mx-auto
    after:h-[0.375rem]
    after:w-[0.375rem]
    after:rounded-full
    after:bg-primary
    ` : ""}`
    return commonNavLinkClass
  }

  const [menuOpen, setMenuOpen] = useState(false)
  const commonLink = classNames(
    'gap-[1.875rem] capitalize items-center  flex flex-col xl:flex-row ',
  )

  const myElementParent = useRef(null);
  const myElementRef = useRef(null);
  const myElementRefSecond = useRef(null);
  useEffect(() => {
    const elementHeight = myElementRef.current.clientHeight;
    const elementHeightSecond = myElementRefSecond.current.clientHeight;
    // console.log({ elementHeight }, { elementHeightSecond });

    if (menuOpen) {
      console.log("here");
      myElementParent.current.style.maxHeight = `${elementHeight + 30 + elementHeightSecond}px`  // 30 being gap between them
    } else {
      // myElementParent.current.style.maxHeight = `${0}px`  // 30 being gap between them
    }
  }, [menuOpen])


  useEffect(() => {
    setMenuOpen(false)
  }, [route])

  return (
    <>
      <div id="navbar"
        className="bg-green-50] bg-primary-light pt-[1.875rem] overflow-visible transition  "
      >
        <div className="container">
          <div className={classNames(
            "  py-[0.625rem] px-[1.875rem] bg-white flex flex-wrap  xl:gap-[30px] 2xl:gap-0 xl:text-center  justify-between xl:justify-center 2xl:justify-between xl:py-[20px] 2xl:py-[10px] items-center relative z-50 shadow-small transition-all ease-linearr ",
            {
              "rounded-[0px] duration-[.3s]": menuOpen, // duration of opening 
              "rounded-[6.25rem] duration-1000": !menuOpen
            }
          )}>
            <Link href={"/"} className="inline-flex items-center">
              <Image alt="company-logo" src={Logo} height={200} width={200} className="h-[3.5rem] w-[3.5rem] aspect-square" />
              <p className={`${inter.className} text-[28px] ml-[7px] xl:hidden 2xl:block`}>mindrisers</p>
            </Link>
            <RiMenu3Line
              className="text-3xl xl:hidden"
              onClick={() => {
                setMenuOpen(!menuOpen)
              }}
            />
            <div
              ref={myElementParent}
              className={classNames(
                "flex flex-col gap-[1.875rem]  transition-all  ease-linearr duration-[.3s]  max-h-0 overflow-hidden w-full xl:w-auto xl:flex-row xl:max-h-[999px]",
                {
                  "!max-h-0 xl:!max-h-[999px]": !menuOpen,
                  "max-h-[988px]] mt-[1.875rem]    ": menuOpen
                  /* TODO: max-h-calculate via javascript and useRef and  put both nav-links part in single ul -- else -- it will take time to close the navbar  */
                })}>
              <ul
                ref={myElementRef}
                className={commonLink}
              >
                {
                  navLinks.slice(0, 4).map(el => {
                    return <li key={el.title} className={`  ${genCommonNavLinkClass(el)}`}>
                      <Link href={el.url}>{el.title}</Link>
                    </li>
                  })
                }
              </ul>

              {/* test test */}
              <ul className={commonLink}
                ref={myElementRefSecond}
              >
                {
                  navLinks.slice(4, 6).map(el => {
                    return <li key={el.title} className={`${genCommonNavLinkClass(el)} `}>
                      <Link href={el.url}>
                        {el.title}
                      </Link>
                    </li>
                  })
                }
                <li>
                  {/* TODO: show popups or redirect to admission page */}
                  {/* TODO: why is the absolute arrow displaying over ohter.. even wehen zindex very low */}
                  <Link
                    className="btn-simple inline-block"
                    href={"/online-admission"}>
                    Admission
                  </Link>
                  {/* <button type="button" className="btn-simple relative target">Admission</button> */}
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div >
    </>
  )
}

export default Header
