import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AdmissionFormApi, DropDownOptions } from "../../pages/api/apiCalls";
import ReCAPTCHA from "react-google-recaptcha";

const AdmissionForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const router = useRouter();
    const [submiting, setSubmiting] = useState(false);
    const [course, setCourse] = useState([]);
    const [shedule, setShedule] = useState([]);
    const [qualification, setQualification] = useState([]);
    const [token, setToken] = useState("");
    const [error, setError] = useState("");

    const onSubmit = (data) => {
        if (!token) {
            setError("You must verify the captcha");
            return;
        }

        setSubmiting(true);
        data = { ...data, question: data.question || "..." };
        AdmissionFormApi({ setSubmiting, data, reset, router });
        setToken("");
    };
    useEffect(() => {
        DropDownOptions({ setCourse, setShedule, setQualification });
    }, []);

    console.log(shedule);
    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-xl bg-orange-100 p-[20px] md:p-[40px]"
            >
                <div className="gap-x-5 md:grid md:grid-cols-2 ">
                    <div className="form-group">
                        <label
                            className="form-label required-field"
                            htmlFor="full_name"
                        >
                            Name
                        </label>
                        <input
                            className="form-control"
                            id="full_name"
                            type="text"
                            placeholder="Name"
                            name="full_name"
                            {...register("full_name", { required: true })}
                        />
                        {errors?.full_name?.type === "required" && (
                            <p className="error-message">
                                This field is required
                            </p>
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
                            className="form-control"
                            id="email"
                            type="text"
                            placeholder="Email"
                            name="email"
                            {...register("email", {
                                required: true,
                                pattern:
                                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                            })}
                        />
                        {errors?.email?.type === "required" && (
                            <p className="error-message">
                                This field is required
                            </p>
                        )}
                        {errors?.email?.type === "pattern" && (
                            <p>Invalid Email</p>
                        )}
                    </div>

                    <div className="form-group">
                        <label
                            className="form-label required-field"
                            htmlFor="mobile_no"
                        >
                            Phone
                        </label>
                        <input
                            className="form-control"
                            id="mobile_no"
                            type="number"
                            placeholder="Phone"
                            name="mobile_no"
                            {...register("mobile_no", { required: true })}
                        />
                        {errors?.mobile_no?.type === "required" && (
                            <p className="error-message">
                                This field is required
                            </p>
                        )}
                    </div>

                    <div className="form-group">
                        <label
                            className="form-label required-field"
                            htmlFor="college"
                        >
                            College / Institution Name
                        </label>
                        <input
                            className="form-control"
                            id="college"
                            type="text"
                            placeholder="College / Institution Name *"
                            name="college"
                            {...register("college", { required: true })}
                        />
                        {errors?.college?.type === "required" && (
                            <p className="error-message">
                                This field is required
                            </p>
                        )}
                    </div>

                    <div className="form-group">
                        <label
                            className="form-label required-field"
                            htmlFor="qualification"
                        >
                            Academic Status
                        </label>
                        <div>
                            <select
                                className="form-control"
                                id="qualification"
                                name="qualification"
                                placeholder="Your college/ Institution name *"
                                {...register("qualification", {
                                    required: true,
                                })}
                            >
                                <option value=""  className="text-red-500 ttext-[rgb(104,97,99)]">Select one</option>
                                <option value="" selected className="text-red-500 ttext-[rgb(104,97,99)]">Select two</option>

                                {qualification?.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.qualification}
                                    </option>
                                ))}
                            </select>
                            {errors?.qualification?.type === "required" && (
                                <p className="error-message">
                                    This field is required
                                </p>
                            )}
                            <div></div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label
                            className="form-label required-field"
                            htmlFor="course"
                        >
                            Interested Course
                        </label>
                        <div>
                            <select
                                className="form-control"
                                id="course"
                                name="course"
                                {...register("course", { required: true })}
                            >
                                <option value="">Select</option>
                                {course?.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.title}
                                    </option>
                                ))}
                            </select>
                            {errors?.course?.type === "required" && (
                                <p className="error-message">
                                    This field is required
                                </p>
                            )}
                            <div></div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label
                            className="form-label required-field"
                            htmlFor="shedule"
                        >
                            Preferred Schedule
                        </label>
                        <div>
                            <select
                                className="form-control"
                                id="shedule"
                                name="shedule"
                                {...register("shedule", { required: true })}
                            >
                                <option value="">Select</option>
                                {shedule?.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.shedule}
                                    </option>
                                ))}
                            </select>
                            {errors?.shedule?.type === "required" && (
                                <p className="error-message">
                                    This field is required
                                </p>
                            )}
                            <div></div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label
                            className="form-label required-field"
                            htmlFor="remarks"
                        >
                            I want to join MindRisers Internship program after
                            my training is over
                        </label>
                        <div className="flex gap-[30px]">
                            <div className="flex items-center ">
                                <input
                                    className="mr-2"
                                    type="radio"
                                    id="remarks-yes"
                                    value="Yes"
                                    checked
                                    {...register("remarks", { required: true })}
                                />
                                <label className=" " htmlFor="remarks-yes">
                                    Yes
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    className="mr-2"
                                    type="radio"
                                    id="remarks-no"
                                    value="No"
                                    {...register("remarks", { required: true })}
                                />
                                <label className=" " htmlFor="remarks-no">
                                    No
                                </label>
                            </div>
                        </div>
                        {errors?.remarks?.type === "required" && (
                            <p className="error-message">
                                This field is required
                            </p>
                        )}
                    </div>

                    <div className="form-group col-span-2">
                        <label className="form-label " htmlFor="question">
                            Any queries?
                        </label>
                        <textarea
                            className="form-control"
                            id="question"
                            rows={5}
                            name="question"
                            {...register("question")}
                        />
                    </div>
                </div>

                <div className="md:mt-5 md:flex items-end justify-between ">
                    <div className="">
                        <ReCAPTCHA
                            sitekey="6LdOx-IlAAAAAOvVO0qqqq6_EFe6V1Rqip_s55QN"
                            onChange={(e) => {
                                setToken(e);
                                setError("");
                            }}
                        />
                        {error && <p>{error}</p>}
                    </div>
                    <button
                        className="  mt-5  btn-secondary-simple"
                        type="submit"
                        name="name"
                        disabled={submiting}
                    >
                        {submiting ? (
                            <div role="status">
                                <span>Loading...</span>
                            </div>
                        ) : (
                            <>Submit</>
                        )}
                    </button>
                </div>
            </form>
        </>
    );
};

export default AdmissionForm;
