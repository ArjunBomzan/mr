import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ContactListApi, DropDownOptions } from "../../pages/api/apiCalls";

const HomeContact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const router = useRouter();
    const [submiting, setSubmiting] = useState(false);
    const onSubmit = (data) => {
        setSubmiting(true);
        ContactListApi({ setSubmiting, data, reset, router });
    };

    const [course, setCourse] = useState([]);
    useEffect(() => {
        DropDownOptions({ setCourse });
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="course" className="form-label required-field">
                    I'm Interested In
                </label>
                <div>
                    <select
                        className="form-control"
                        id="course"
                        name="course"
                        {...register("course", { required: true })}
                    >
                        <option value="" defaultValue="">
                            Select a course
                        </option>
                        {course?.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.title}
                            </option>
                        ))}
                    </select>
                    {errors?.course?.type === "required" && (
                        <p className="error-message">This field is required</p>
                    )}
                    {/* <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div> */}
                </div>
            </div>
            <div className="form-group ">
                <label className="form-label required-field">Name</label>
                <input
                    className="form-control"
                    type="text"
                    name="name"
                    {...register("name", { required: true })}
                    placeholder="Full Name"
                />
                {errors?.name?.type === "required" && (
                   <p className="error-message">This field is required</p>
                )}
            </div>

            <div className="form-group ">
                <label className="form-label required-field">Email</label>
                <input
                    className="form-control"
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                />
                {errors?.email?.type === "required" && (
                    <p className="error-message">This field is required</p>
                )}
            </div>

            <div className="form-group ">
                <label className="form-label required-field">Phone</label>
                <input
                    className="form-control"
                    type="number"
                    name="mobile_no"
                    {...register("mobile_no", { required: true })}
                    placeholder="Phone Number"
                />
                {errors?.mobile_no?.type === "required" && (
                    <p className="error-message">This field is required</p>
                )}
            </div>

            <div className="flex justify-center xl:justify-end">
                <button
                    type="submit"
                    className="btn-secondary"
                    name="name"
                    disabled={submiting}
                >
                    {submiting ? (
                        <div role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <>Submit</>
                    )}
                </button>
            </div>
        </form>
    );
};

export default HomeContact;
