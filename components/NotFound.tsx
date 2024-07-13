import Link from "next/link"

const NotFound = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-primary-light">
      <p className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl -translate-y-10">
        404: Page Not Found
      </p>
      <div className="flex gap-4">
      <Link href={"/"} className="btn-simple">Go to Home</Link>
      <Link href={"/courses"} className="btn-simple">View Courses</Link>
      </div>
    </main>
  )
}

export default NotFound
