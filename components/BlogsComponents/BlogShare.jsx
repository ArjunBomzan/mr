import Link from "next/link"
import Image from "next/image"
import Facebook from "../../assets/social/iconmonstr-facebook-4-240.webp"
import Twitter from "../../assets/social/iconmonstr-twitter-4-240.webp"
import Linkedin from "../../assets/social/iconmonstr-linkedin-4-240.webp"


export default function BlogShare() {

    let current_url = window.location.href

    return (
        <section className='text-center text-lg font-bold my-32'>
            <p className="text-base md:text-lg lg:text-xl">Like this Post? Share it with your friends !</p>
            <ul className='flex justify-center gap-3 mt-3'>
                <li>
                    <Link href={`https://www.facebook.com/sharer/sharer.php?u=${current_url}`} target="_blank" rel="noreferrer">
                        <Image src={Facebook} height={40} width={40} alt="facebook-icon" />
                    </Link>
                </li>
                <li>
                    <Link href={`https://twitter.com/intent/tweet?url=${current_url}`} target="_blank" rel="noreferrer">
                        <Image src={Twitter} height={40} width={40} alt="twitter-icon" />
                    </Link>
                </li>
                <li>
                    <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=${current_url}`} target="_blank" rel="noreferrer">
                        <Image src={Linkedin} height={40} width={40} alt="linkedin-icon" />
                    </Link>
                </li>
            </ul>
        </section>
    )
}
