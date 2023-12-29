import Image from "next/image";
import Link from "next/link";

export default function Opportunity() {
    return (
        <section className=' text-center py-[40px] px-[10px] md:px-[20px] lg:px-[30px] xl:px-[40px] bg-primary-light rounded-3xl relative overflow-hidden borde '>
            <div className="relative z-20">
                <p className='font-medium text-gray-900 title-space'>Never miss an Opportunity !</p>
                <h2 className='header-lg title-space text-expanded'>Want to learn TOP 2024 IT Skills ?</h2>
                <p className='text-gray-600'>We open IT skill classes Monthly in Design, Development, Deployment, Data etc.</p>
                <div className='title-space-3xl-reverse '>
                    <p className='text-gray-600 title-space-xl'>Have something to Ask ?</p>
                    <Link
                        className="btn inline-block"
                        href={"/online-admission"}>
                        get admission enquiry
                    </Link>
                </div>
            </div>

            <div className="hidden 2xl:block">
                {/* TODO: why are the arrows opaciaty and all not being changed in mobile */}
                <Image alt='' src={"/assets/images/home/arrows-left.svg"}
                    className='bloc hidde z-10 w-[136px] h-auto absolute -top-10 -left-10  opacity-10  2xl:opacity-100 2xl:scale-100 2xl:top-[28px] 2xl:left-[38px] '
                    width={400} height={400} />
                <Image alt='' src={"/assets/images/home/arrows-right.svg"}
                    className='bloc hidde z-10 w-[144px] h-auto absolute top-[50%] -right-[100px] opacity-10 2xl:opacity-100 2xl:top-[88px] 2xl:right-[30px]'
                    width={400} height={400} />
            </div>

        </section>
    )
}