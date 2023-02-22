import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ContactListApi } from "../../pages/api/apiCalls";

const DropMessage = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const router = useRouter();
    const [submiting, setSubmiting] = useState(false);
    const onSubmit = data => {
        setSubmiting(true)
        ContactListApi({ setSubmiting, data, reset, router })
    };

    return (
        <div className='pagecard w-full max-h-min h-max sm:h-auto flex-1 text-black overflow-hidden'>
            <div className='flex flex-col items-center justify-start w-full h-full pt-8 pb-10 space-y-3'>
                <h2 className='w-full px-2  text-2xl font-semibold text-left'>Drop us a message</h2>
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