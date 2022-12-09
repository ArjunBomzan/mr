import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'
import { ContactListApi } from "../../pages/api/apiCalls";

const FooterContact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [submiting, setSubmiting] = useState(false);
  const router = useRouter()
  const onSubmit = data => {
    setSubmiting(true)
    ContactListApi({ setSubmiting, data, reset, router })
  };

  return (
    <div className='footer-link-divs2  footer-link-divs-lg-1 flex flex-col space-y-4' >
      <h2 className='font-sans text-white font-semibold text-xl md:pt-2'>Let&apos;s talk</h2>
      <form
        className='flex flex-col space-y-4 w-full text-sm form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="footer-form-fields"
          placeholder='Full Name'
          name='name'
          id='name'
          {...register("name", { required: true, maxLength: 20 })}
        />

        {errors?.name?.type === "required" && <p>This field is required</p>}
        <input
          className="footer-form-fields"
          placeholder='Mobile No.'
          name='mobile_no'
          id='mobile_no'
          type="number"
          {...register("mobile_no", { required: true, maxLength: 10 })}
        />
        {errors?.mobile_no?.type === "required" && <p>This field is required</p>}
        <input
          className="footer-form-fields"
          placeholder='Email'
          name='email'
          id='email'
          {...register("email", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })}
        />
        {errors?.email?.type === "required" && <p>This field is required</p>}
        {errors?.email?.type === "pattern" && <p>Invalid Email</p>}
        <button type='submit' className='w-full h-10 rounded-md bg-green-600 hover:bg-green-700 duration-200 text-white flex flex-row items-center justify-center space-x-1 px-10' disabled={submiting}>

          {
            submiting ?
              <>
                <div className="flex justify-center items-center gap-2">
                  <div className="spinner-border animate-spin inline-block w-5 h-5 border-4 rounded-full" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  Submit
                </div>
              </>
              :
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className='font-medium'>
                  Submit
                </span>
              </>
          }
        </button>
      </form>
    </div >
  )
}

export default FooterContact
