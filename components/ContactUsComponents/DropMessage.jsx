import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ContactListApi } from "../../pages/api/apiCalls";
import ReCAPTCHA from "react-google-recaptcha";

const DropMessage = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const router = useRouter();
    const [submiting, setSubmiting] = useState(false);
    const [token, setToken] = useState("")
    const [error, setError] = useState("")

    const onSubmit = data => {

        if (!token) {
            setError("You must verify the captcha")
            return;
        }


        setSubmiting(true)
        ContactListApi({ setSubmiting, data, reset, router })
        setToken("")
    };

    return (
        <div className='pagecard w-full max-h-min h-max sm:h-auto flex-1 text-black overflow-hidden'>
            <div className='flex flex-col items-center justify-start w-full h-full pt-8 pb-10 space-y-3'>
                <p className='w-full px-2  text-2xl md:text-3xl  font-semiboldd text-left mb-2 '>Drop us a message</p>
                <form className='flex flex-col w-full px-2 form' onSubmit={handleSubmit(onSubmit)}>
                    <label className=' mt-3 font-medium text-gray-500 font-md required-field'>Name</label>
                    <input
                        type='text'
                        className=' border-2 border-gray-300 rounded-md h-9 p-2'
                        name="name"
                        {...register("name", { required: true })}
                    />
                    {errors?.name?.type === "required" && <small className="text-red-500 ">This field is required</small>}

                    <label className=' mt-3 font-medium text-gray-500 font-md required-field'>Email</label>
                    <input
                        type='email'
                        className=' border-2 border-gray-300 rounded-md h-9 p-2'
                        name="email"
                        {...register("email", { required: true })}
                    />
                    {errors?.name?.type === "required" && <small className="text-red-500 ">This field is required</small>}

                    <label className=' mt-3 font-medium text-gray-500 font-md required-field'>Phone</label>
                    <input
                        type='number'
                        className=' border-2 border-gray-300 rounded-md h-9 p-2'
                        name="mobile_no"
                        {...register("mobile_no", { required: true })}
                    />
                    {errors?.name?.type === "required" && <small className="text-red-500 ">This field is required</small>}

                    <label className=' mt-3 font-medium text-gray-500 font-md required-field'>Subject</label>
                    <input
                        type='text'
                        className=' border-2 border-gray-300 rounded-md h-9 p-2'
                        name="subject"
                        {...register("subject", { required: true })}
                    />
                    {errors?.name?.type === "required" && <small className="text-red-500 ">This field is required</small>}

                    <label className=' mt-3 font-medium text-gray-500 font-md required-field'>Message</label>
                    <textarea
                        className=' border-2 border-gray-300 rounded-md h-28 p-2'
                        name="message"
                        {...register("message", { required: true })}
                    />
                    {errors?.name?.type === "required" && <small className="text-red-500 ">This field is required</small>}
                    <div className="mt-3">
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
                        className='mt-3 px-4 py-2 text-lg font-medium text-white duration-500 bg-green-500 rounded-md cursor-pointer hover:bg-slate-400 hover:text-black w-max'
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
    )
}

export default DropMessage