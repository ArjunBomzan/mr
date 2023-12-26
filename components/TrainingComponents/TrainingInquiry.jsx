import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ContactListApi } from "../../pages/api/apiCalls";

const TrainingInquiry = (props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const router = useRouter();
    const [submiting, setSubmiting] = useState(false);
    const onSubmit = data => {
        setSubmiting(true)
        ContactListApi({ setSubmiting, data, reset, router })
    }
    return (
        <form style={{
            position: "sticky",
            top: "100px"
        }} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full mt-5 form" id="quick_inquiry" onSubmit={handleSubmit(onSubmit)}>
            <span className="block text-lg font-bold mb-2">Quick Inquiry</span>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="username">
                    Name *
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Name"
                    name="name"
                    {...register("name", { required: true },)}
                />
                {errors?.name?.type === "required" && <p>This field is required</p>}
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="username">
                    Email *
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Email"
                    name="email"
                    {...register("email", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })}

                />
                {errors?.email?.type === "required" && <p>This field is required</p>}
                {errors?.email?.type === "pattern" && <p>Invalid Email</p>}
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="username">
                    Mobile Number *
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    placeholder="Mobile Number"
                    name="mobile_no"
                    {...register("mobile_no", { required: true })}
                />
                {errors?.mobile_no?.type === "required" && <p>This field is required</p>}
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="username">
                    Alternate Number
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    placeholder="Alternate Number"
                    name="alternate_number"
                    {...register("alternate_number")}
                />
                {errors?.alternate_number?.type === "required" && <p>This field is required</p>}
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="username">
                    Subject
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    {...register("subject")}
                />
                {errors?.subject?.type === "required" && <p>This field is required</p>}
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="username">
                    Selected Course
                </label>
                <select className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Selected Course"
                    name="select_course"
                    {...register("select_course")}
                >
                    {/* <option>Select </option> */}
                    {
                        props.course_list.map(el => {
                            return <option key={el.id} value={el.id} selected={props?.course_id == el.slug} >{el.title}</option>
                        })
                    }
                </select>
                {/* <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Selected Course"
                    name="subject"
                    value={props?.course?.data?.course[0]?.title}
                /> */}
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="username">
                    Message
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Message"
                    name="message"
                    {...register("message")}
                />
                {errors?.message?.type === "required" && <p>This field is required</p>}
            </div>
            <div className="flex items-center justify-between">
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Submit Enquiry
                </button> */}

                <button
                    type='submit'
                    name="name"
                    className='px-4 py-2 text-lg font-medium text-white duration-500 bg-green-500 rounded-md cursor-pointer hover:bg-slate-400 hover:text-black w-max'
                    disabled={submiting}
                >
                    {
                        submiting ?
                            <div className="flex justify-center items-center gap-2">
                                <div className="spinner-border animate-spin inline-block w-5 h-5 border-4 rounded-full" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                Submit Enquiry
                            </div>
                            :
                            <>
                                Submit Enquiry
                            </>
                    }
                </button>
            </div>
        </form>
    )
}

export default TrainingInquiry