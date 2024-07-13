import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AdmissionFormApi, DropDownOptions } from "../../pages/api/apiCalls"
import ReCAPTCHA from "react-google-recaptcha";


const Admission = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const router = useRouter();
  const [submiting, setSubmiting] = useState(false);
  const [course, setCourse] = useState([]);
  const [shedule, setShedule] = useState([]);
  const [qualification, setQualification] = useState([]);
  const [token, setToken] = useState("")
  const [error, setError] = useState("")

  const onSubmit = data => {


    if (!token) {
      setError("You must verify the captcha")
      return;
    }


    setSubmiting(true)
    data = { ...data, question: data.question || "..." }
    AdmissionFormApi({ setSubmiting, data, reset, router })
    setToken("")
  }
  useEffect(() => {
    DropDownOptions({ setCourse, setShedule, setQualification })
  }, []);
  return (
    <>
      <div
        className='w-full bg-no-repeat bg-cover bg-center'
      // style={{ backgroundImage: `url(${image})`, }}
      >
        <div className="w-full flex justify-center items-center sm:p-6">
          <form className="bg-white card-shadow rounded px-8 pt-6 pb-8 sm:mb-4 lg:w-[50%] md:w-[60%] sm:w-[70%] sm:my-10 admission-container form" onSubmit={handleSubmit(onSubmit)}>

            <p className="block text-gray-700 text-2xl text-center md:text-3xl lg:text-4xl  my-6  text-center w-full">Admission Form</p>
            <div>
              <label className="admission-form-label required-field" htmlFor="full_name">Name</label>
              <input
                className="admission-form-input focus:outline-none focus:shadow-outline"
                id="full_name"
                type="text"
                placeholder="Name"
                name="full_name"
                {...register("full_name", { required: true })}
              />
              {errors?.full_name?.type === "required" && <p class="error-msg--small">This field is required</p>}
            </div>

            <div>
              <label className="admission-form-label required-field " htmlFor="email">Email</label>
              <input
                className="admission-form-input focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
                name="email"
                {...register("email", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })}
              />
              {errors?.email?.type === "required" && <p class="error-msg--small">This field is required</p>}
              {errors?.email?.type === "pattern" && <p class="error-msg--small">Invalid Email</p>}
            </div>

            <div>
              <label className="admission-form-label required-field" htmlFor="mobile_no">Phone</label>
              <input
                className="admission-form-input focus:outline-none focus:shadow-outline"
                id="mobile_no"
                type="number"
                placeholder="Phone"
                name="mobile_no"
                {...register("mobile_no", { required: true })}
              />
              {errors?.mobile_no?.type === "required" && <p class="error-msg--small">This field is required</p>}
            </div>

            <div>
              <label className="admission-form-label required-field" htmlFor="college">College / Institution Name</label>
              <input
                className="admission-form-input focus:outline-none focus:shadow-outline"
                id="college"
                type="text"
                placeholder="College / Institution Name *"
                name="college"
                {...register("college", { required: true })}
              />
              {errors?.college?.type === "required" && <p class="error-msg--small">This field is required</p>}
            </div>

            <div >
              <label className="admission-form-label required-field" htmlFor="qualification">Acedamic Status</label>
              <div className="relative">
                <select
                  className="admission-form-input"
                  id="qualification"
                  name="qualification"
                  placeholder="Your college/ Institution name *"
                  {...register("qualification", { required: true })}
                >
                  <option value="">Select</option>
                  {
                    qualification?.map((item) => {
                      return <option id={item.id} value={item.id} key={item.id}>{item.qualification}</option>
                    })
                  }
                </select>
                {errors?.qualification?.type === "required" && <p class="error-msg--small">This field is required</p>}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>

            <div >
              <label className="admission-form-label required-field" htmlFor="course">Interested Course</label>
              <div className="relative">
                <select
                  className="admission-form-input"
                  id="course"
                  name="course"
                  {...register("course", { required: true })}
                >
                  <option value="" >Select</option>
                  {
                    course?.map((item) => {
                      return <option key={item.id} value={item.id}>{item.title}</option>
                    })
                  }
                </select>
                {errors?.course?.type === "required" && <p class="error-msg--small">This field is required</p>}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>

            <div >
              <label className="admission-form-label required-field" htmlFor="shedule">Preferred Schedule</label>
              <div className="relative">
                <select className="admission-form-input"
                  id="shedule"
                  name="shedule"
                  {...register("shedule", { required: true })}
                >
                  <option value="">Select</option>
                  {
                    shedule?.map((item) => {
                      return <option key={item.id} value={item.id}>{item.shedule}</option>
                    })
                  }
                </select>
                {errors?.shedule?.type === "required" && <p class="error-msg--small">This field is required</p>}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>

            <div style={{ flex: "100%" }}>
              <label className="admission-form-label required-field" htmlFor="remarks">I want to join Mindrisers Internship program after my training is over</label>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="remarks-yes"
                  value="Yes"
                  checked
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
              {errors?.remarks?.type === "required" && <p class="error-msg--small">This field is required</p>}
            </div>
            {
              // JSON.stringify(errors)
            }

            <div>
              <label className="admission-form-label" htmlFor="question">Any queries?</label>
              <textarea className="admission-form-input focus:outline-none focus:shadow-outline"
                id="question"
                type="text"
                rows={5}
                name="question"
                {...register("question")}
              />
            </div>


            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit">
              Submit
            </button> */}
            <div className="  basis-[100%]" style={{
              flexBasis: "100%"
            }}>

              <ReCAPTCHA
                sitekey="6LdOx-IlAAAAAOvVO0qqqq6_EFe6V1Rqip_s55QN"
                onChange={(e) => {
                  setToken(e)
                  setError("")
                }}
              />
              {
                error
                &&
                <p className="error-msg--small">{error}</p>
              }
            </div>

            <button
              type='submit'
              name="name"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              disabled={submiting}
            >
              {
                submiting ?
                  <div className="flex justify-center items-center gap-2">
                    <div className="spinner-border animate-spin inline-block w-5 h-5 border-4 rounded-full" role="status">
                      <span className="visually-hidden">Loading...</span>
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