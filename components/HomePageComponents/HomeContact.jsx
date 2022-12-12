import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ContactListApi, DropDownOptions } from "../../pages/api/apiCalls";

const HomeContact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const router = useRouter();
    const [submiting, setSubmiting] = useState(false);
    const onSubmit = data => {
        console.log(data)
        setSubmiting(true)
        ContactListApi({ setSubmiting, data, reset, router })
    };
    console.log(errors)

    const [course, setCourse] = useState([]);
    useEffect(() => {
        DropDownOptions({ setCourse })
    }, []);

    return (
        <div className='bg-neutral-100 flex items-center justify-center'>
            <div className='flex flex-col lg:flex-row w-full px-5 py-16 sm:px-20 lg:px-44 gap-4'>
                <div className='min-w-1/2'>
                    <h2 className="text-2xl font-bold">Request a call back</h2>
                    <p>Would you like to speak to one of our adviser over the phone?</p>
                    <p>Just submit your detials and will be in touch shortly. You can also email us if you would prefer</p>
                </div>
                <div>
                    {/* <p>I would like to discuss</p> */}
                    <form className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full form' onSubmit={handleSubmit(onSubmit)}>

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
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>

                        <div >
                            <label className='font-medium font-md admission-form-label'>Your name *</label>
                            <input
                                type='text'
                                className='admission-form-input'
                                name="name"
                                {...register("name", { required: true })}
                            />
                            {errors?.name?.type === "required" && <p>This field is required</p>}
                        </div>


                        <div>
                            <label className='font-medium font-md admission-form-label'>Your email *</label>
                            <input
                                type='email'
                                className='admission-form-input'
                                name="email"
                                {...register("email", { required: true })}
                            />
                            {errors?.name?.type === "required" && <p>This field is required</p>}

                        </div>


                        <div>
                            <label className='font-medium font-md admission-form-label'>Your Phone *</label>
                            <input
                                type='number'
                                className='admission-form-input'
                                name="mobile_no"
                                {...register("mobile_no", { required: true })}
                            />
                            {errors?.name?.type === "required" && <p>This field is required</p>}
                        </div>

                        <button
                            type='submit'
                            name="name"
                            className='px-4 py-2 text-lg font-medium text-white duration-500 bg-green-500 rounded-md cursor-pointer hover:bg-green-700 w-max'
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
                </div>
            </div>
        </div>
    )
}

export default HomeContact