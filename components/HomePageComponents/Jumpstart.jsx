const JumpstartChild = ({ icon, title, info }) => {
  return (
    <div className='flex flex-col items-center md:w-1/2 md:w-[30%]'>
      <div className="border-green-500 border-2 rounded-full p-4">
        {icon}
      </div>
      <h4 className='pt-3 text-2xl font-bold text-center text-green-500'>{title}</h4>
      <p className='text-center'>
        {info}
      </p>
    </div>
  )
}

const Jumpstart = () => {
  return (
    <section className='flex flex-col px-5 py-20 md:space-y-9 h-max sm:pt-24 sm:px-10 md:px-20 lg:px-40 xl:px-48 bg-neutral-100 '>
      <div className='flex flex-col'>
        <p className="w-full mb-5 text-sm font-medium tracking-widest text-center text-green-500">WHY BUSINESSES CHOOSE US</p>
        <h3 className='w-full mb-5 text-2xl font-bold text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Benifits of joining Mind Risers</h3>
        {/* <p className='w-full text-center'>
          A few things we can boast about
        </p> */}
      </div>
      <div className="flex flex-col items-center justify-between space-y-9 md:space-y-0 md:flex-row md:space-x-5 flex-nowrap py-7 ">
        <JumpstartChild
          // icon={
          //   <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-green-500" viewBox="0 0 20 20" fill="currentColor">
          //     <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          //   </svg>
          // }
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-8 h-8 fill-green-500" fill="currentColor">
              <path d="M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
            </svg>
          }
          title="Small Groups"
          info="With small groups of students, our instructors can work closely with each student."
        />
        <JumpstartChild
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 h-8 fill-green-500" fill="currentColor">
              <path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 248H128V192H48V248zM48 296V360H128V296H48zM176 296V360H272V296H176zM320 296V360H400V296H320zM400 192H320V248H400V192zM400 408H320V464H384C392.8 464 400 456.8 400 448V408zM272 408H176V464H272V408zM128 408H48V448C48 456.8 55.16 464 64 464H128V408zM272 192H176V248H272V192z" />
            </svg>
          }
          // icon={
          //   <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-green-500" viewBox="0 0 20 20" fill="currentColor">
          //     <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
          //   </svg>
          // }
          title="Flexible Class Schedule"
          info="Our class schedules are flexible on weekdays, weekend or evenings to suit your schedule."
        />
        <JumpstartChild
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-8 h-8 fill-green-500" fill="currentColor">
              <path d="M184 88c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zM568 88c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm8 157.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 160c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
            </svg>
          }
          // icon={
          //   <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-green-500" viewBox="0 0 20 20">
          //     <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
          //   </svg>
          // }
          title="Experienced Instructions"
          info="Our instructors follow a modified and personalized approach to engage students during class."
        />
      </div>
    </section>
  )
}

export default Jumpstart
