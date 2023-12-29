import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ContactListApi } from "../../pages/api/apiCalls";

const TrainingInquiry = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);

    const onSubmit = (data) => {
        setSubmitting(true);
        ContactListApi({ setSubmitting, data, reset, router });
    };

    return (
        <form
            style={{}}
            id="quick_inquiry"
            onSubmit={handleSubmit(onSubmit)}
            className="custom-sidebar sticky top-[10px] max-h-screen self-start overflow-y-auto rounded-xl bg-orange-100 p-5"
        >
            <h2 className="sub-header mb-5 font-semibold text-secondary" id="quick-enquiry">
                Quick Enquiry
            </h2>
            <div className="">
                <div className="form-group">
                    <label htmlFor="name" className="form-label required-field">
                        Name
                    </label>
                    <input
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        {...register("name", { required: true })}
                    />
                    {errors?.name?.type === "required" && (
                        <p className="error-message">This field is required</p>
                    )}
                </div>
                <div className="form-group">
                    <label
                        className="form-label required-field"
                        htmlFor="email"
                    >
                        Email
                    </label>

                    <input
                        placeholder="Email"
                        name="email"
                        className="form-control"
                        {...register("email", {
                            required: true,
                            pattern:
                                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        })}
                    />
                    {errors?.email?.type === "required" && (
                        <p className="error-message">This field is required</p>
                    )}
                    {errors?.email?.type === "pattern" && <p>Invalid Email</p>}
                </div>
                <div className="form-group">
                    <label
                        htmlFor="mobile_no"
                        className="form-label required-field"
                    >
                        Mobile Number{" "}
                    </label>
                    <input
                        type="number"
                        placeholder="Mobile Number"
                        name="mobile_no"
                        className="form-control"
                        {...register("mobile_no", { required: true })}
                    />
                    {errors?.mobile_no?.type === "required" && (
                        <p className="error-message">This field is required</p>
                    )}
                </div>
                {/* ... (other form fields) ... */}
                <div className="form-group">
                    <label htmlFor="subject" className="form-label ">
                        Subject
                    </label>
                    <input
                        type="text"
                        placeholder="Subject"
                        className="form-control"
                        name="subject"
                        {...register("subject")}
                    />
                    {errors?.subject?.type === "required" && (
                        <p className="error-message">This field is required</p>
                    )}
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="select_course">
                        Selected Course
                    </label>
                    <select
                        placeholder="Selected Course"
                        name="select_course"
                        className="form-control"
                        {...register("select_course")}
                    >
                        {" "}
                        <option>Select</option>
                        {props.course_list.map((el) => (
                            <option
                                key={el.id}
                                value={el.id}
                                selected={router.query.slug == el.slug}
                            >
                                {el.title}
                            </option>
                        ))}
                    </select>
                   
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        placeholder="Message"
                        name="message"
                        className="form-control"
                        {...register("message")}
                    />
                    {errors?.message?.type === "required" && (
                        <p className="error-message">This field is required</p>
                    )}
                </div>
                <div>
                    <div className="title-space-3xl-reverse flex  lg:justify-end">
                        <button
                            type="submit"
                            name="name"
                            className="btn-secondary-simple   "
                            disabled={submitting}
                        >
                            {submitting ? <>Loading...</> : <>Submit Enquiry</>}
                        </button>
                    </div>
                    
                </div>
            </div>
        </form>
    );
};

export default TrainingInquiry;
