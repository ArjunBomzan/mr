import Image from 'next/image'
import Link from 'next/link'

export default function Opportunity() {
  return (
    <section className=" borde relative overflow-hidden rounded-3xl bg-primary-light px-[10px] py-[40px] text-center md:px-[20px] lg:px-[30px] xl:px-[40px] ">
      <div className="relativee z-20">
        <p className="title-space font-medium text-gray-900">
          Never miss an Opportunity !
        </p>
        <h2 className="header-lg title-space text-expanded">
          Want to learn TOP 2024 IT Skills ?
        </h2>
        <p className="text-gray-600">
          We open IT skill classes Monthly in Design, Development,
          Deployment, Data etc.
        </p>
        <div className="title-space-3xl-reverse ">
          <p className="title-space-xl text-gray-600">
            Have something to Ask ?
          </p>
          <Link
            className="btn inline-block"
            href={'/online-admission'}
          >
            get admission enquiry
          </Link>
        </div>
      </div>
      {/*  */}
      {/* <span className="absolute left-10 top-0"> one</span> */}

      <div className="hidden 2xl:block">
        {/* TODO: why are the arrows opaciaty and all not being changed in mobile */}
        <Image
          alt=""
          src={'/assets/images/home/arrows-left.svg'}
          className="bloc hidde -top-10] absolute -left-10 top-0 z-10 h-auto w-[136px]  opacity-10  2xl:left-[38px] 2xl:top-[28px] 2xl:scale-50 2xl:opacity-100 "
          width={400}
          height={400}
          style={{
            transform: 'scale(.4)',
            top: '-50px',
            left: '-100px'
          }}
        />
        <Image
          alt=""
          src={'/assets/images/home/arrows-right.svg'}
          className="bloc hidde top-[50%]] -right-[100px]] absolute right-0 top-0 z-10 h-auto w-[144px] opacity-10 2xl:right-[30px] 2xl:top-[88px] 2xl:opacity-100"
          width={400}
          height={400}
          style={{
            transform: 'scale(.4)',
            top: '-100px',
            right: '-70px'
          }}
        />
      </div>
    </section>
  )
}
