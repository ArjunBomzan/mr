import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ContactListApi, DropDownOptions } from "../../pages/api/apiCalls"

const Admission = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const router = useRouter();
  const [submiting, setSubmiting] = useState(false);
  const [course, setCourse] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [qualification, setQualification] = useState([]);
  const onSubmit = data => {
    console.log(data)
    setSubmiting(true)
    ContactListApi({ setSubmiting, data, reset, router })
  }
  useEffect(() => {
    DropDownOptions({ setCourse, setSchedule, setQualification })
  }, []);
  return (
    <>
      <div
        className='w-full bg-no-repeat bg-cover bg-center'
      // style={{ backgroundImage: `url(${image})`, }}
      >
        <div className="w-full flex justify-center items-center p-2">
          <form className="bg-white card-shadow rounded px-8 pt-6 pb-8 mb-4 lg:w-[50%] md:w-[60%] sm:w-[70%] my-10 admission-container form" onSubmit={handleSubmit(onSubmit)}>
            <label className="block text-gray-700 text-2xl font-bold mb-2 text-center w-full">Admission Form</label>

            <div>
              <label className="admission-form-label" htmlFor="name">Full Name</label>
              <input
                className="admission-form-input focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Full Name"
                name="name"
                {...register("name", { required: true })}
              />
              {errors?.name?.type === "required" && <p>This field is required</p>}
            </div>

            <div>
              <label className="admission-form-label" htmlFor="email">Email</label>
              <input
                className="admission-form-input focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
                name="email"
                {...register("email", { required: true })}
              />
              {errors?.email?.type === "required" && <p>This field is required</p>}
            </div>

            <div>
              <label className="admission-form-label" htmlFor="mobile_no">Mobile Number *</label>
              <input
                className="admission-form-input focus:outline-none focus:shadow-outline"
                id="mobile_no"
                type="number"
                placeholder="Mobile Number"
                name="mobile_no"
                {...register("mobile_no", { required: true })}
              />
              {errors?.mobile_no?.type === "required" && <p>This field is required</p>}
            </div>

            <div>
              <label className="admission-form-label" htmlFor="college">Your college/ Institution name *</label>
              <input
                className="admission-form-input focus:outline-none focus:shadow-outline"
                id="college"
                type="text"
                placeholder="Your college/ Institution name *"
                name="college"
                {...register("college", { required: true })}
              />
              {errors?.college?.type === "required" && <p>This field is required</p>}
            </div>

            <div >
              <label className="admission-form-label" htmlFor="qualification">Your Qualification Status:*</label>
              <div className="relative">
                <select
                  className="admission-form-input"
                  id="qualification"
                  name="qualification"
                  {...register("qualification", { required: true })}
                >
                  <option></option>
                  {
                    qualification?.map((item) => {
                      return <option id={item.id} value={item.id} key={item.id}>{item.qualification}</option>
                    })
                  }
                </select>
                {errors?.qualification?.type === "required" && <p>This field is required</p>}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>

            <div >
              <label className="admission-form-label" htmlFor="course">I am interested in: *</label>
              <div className="relative">
                <select
                  className="admission-form-input"
                  id="course"
                  name="course"
                  {...register("course", { required: true })}
                >
                  <option></option>
                  {
                    course?.map((item) => {
                      return <option key={item.id} value={item.id}>{item.title}</option>
                    })
                  }
                </select>
                {errors?.course?.type === "required" && <p>This field is required</p>}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>

            <div >
              <label className="admission-form-label" htmlFor="shedule">Choose Schedule *</label>
              <div className="relative">
                <select className="admission-form-input"
                  id="shedule"
                  name="shedule"
                  {...register("shedule", { required: true })}
                >
                  <option></option>
                  {
                    schedule?.map((item) => {
                      return <option key={item.id} value={item.id}>{item.shedule}</option>
                    })
                  }
                </select>
                {errors?.shedule?.type === "required" && <p>This field is required</p>}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>

            <div style={{ flex: "100%" }}>
              <label className="admission-form-label" htmlFor="remarks">I want to join Mind Risers Internship program after my training is over. *</label>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="remarks-yes"
                  value="Yes"
                  {...register("remarks", { required: true })}
                />
                <label className="block text-gray-700 text-sm" htmlFor="remarks-yes">
                  Yes</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="remarks-no"
                  value="No"
                  {...register("remarks", { required: true })}
                />
                <label className="block text-gray-700 text-sm" htmlFor="remarks-no">
                  No</label>
              </div>
            </div>

            <div>
              <label className="admission-form-label" htmlFor="question">Any queries?</label>
              <textarea className="admission-form-input focus:outline-none focus:shadow-outline"
                id="question"
                type="text"
                placeholder="Any queries?"
                name="question"
                {...register("question")}
              />
            </div>


            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit">
              Submit
            </button> */}

            <button
              type='submit'
              name="name"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              disabled={submiting}
            >
              {
                submiting ?
                  <div class="flex justify-center items-center gap-2">
                    <div class="spinner-border animate-spin inline-block w-5 h-5 border-4 rounded-full" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    Submit
                  </div>
                  :
                  <>
                    Submit
                  </>
              }
            </button>
          </form>
        </div >
      </div >
    </>
  )
}

export default Admission