import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ContactListApi } from "../../pages/api/apiCalls";
import ReCAPTCHA from "react-google-recaptcha";

const DropMessage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const router = useRouter();
    const [submiting, setSubmiting] = useState(false);
    const [token, setToken] = useState("");
    const [error, setError] = useState("");

    const onSubmit = (data) => {
        if (!token) {
            setError("You must verify the captcha");
            return;
        }

        setSubmiting(true);
        ContactListApi({ setSubmiting, data, reset, router });
        setToken("");
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="section-p rounded-xl bg-orange-100"
        >
            <div className="title-space-3xl text-center">
                <h2 className="header-md title-space text-secondary ">
                    Tell us about yourself
                </h2>
                <p>
                    Whether you have questions or you would just like to say
                    hello, contact us.
                </p>
            </div>
            <div className="title-space-3xl  gap-x-5 md:grid md:grid-cols-2">
                <div className="form-group">
                    <label className="form-label required-field">Name</label>
                    <input
                        className="form-control"
                        placeholder="Name"
                        type="text"
                        name="name"
                        {...register("name", { required: true })}
                    />
                    {errors?.name?.type === "required" && (
                        <small className="error-message">
                            This field is required
                        </small>
                    )}
                </div>

                <div className="form-group">
                    <label className="form-label required-field">Email</label>
                    <input
                        placeholder="Email"
                        className="form-control"
                        type="email"
                        name="email"
                        {...register("email", { required: true })}
                    />
                    {errors?.name?.type === "required" && (
                        <small className="error-message">
                            This field is required
                        </small>
                    )}
                </div>
                <div className="form-group">
                    <label className="form-label required-field">Phone</label>
                    <input
                        placeholder="Phone"
                        className="form-control"
                        type="number"
                        name="mobile_no"
                        {...register("mobile_no", { required: true })}
                    />
                    {errors?.name?.type === "required" && (
                        <small className="error-message">
                            This field is required
                        </small>
                    )}
                </div>
                <div className="form-group">
                    <label className="form-label required-field">Subject</label>
                    <input
                        placeholder="Subject"
                        className="form-control"
                        type="text"
                        name="subject"
                        {...register("subject", { required: true })}
                    />
                    {errors?.name?.type === "required" && (
                        <small className="error-message">
                            This field is required
                        </small>
                    )}
                </div>
                <div className="form-group col-span-2 ">
                    <label className="form-label required-field">
                        Any Queries
                    </label>
                    <textarea
                        className="form-control"
                        placeholder="Queries"
                        name="message"
                        rows={5}
                        {...register("message", { required: true })}
                    />
                    {errors?.name?.type === "required" && (
                        <small className="error-message">
                            This field is required
                        </small>
                    )}
                </div>
                <div>
                    <ReCAPTCHA
                        sitekey="6LdOx-IlAAAAAOvVO0qqqq6_EFe6V1Rqip_s55QN"
                        onChange={(e) => {
                            setToken(e);
                            setError("");
                        }}
                    />
                    {error && <p>{error}</p>}
                </div>
            </div>

            <div className="flex justify-center md:justify-end ">
                <button
                    type="submit"
                    name="name"
                    className="btn-secondary-simple btn"
                    disabled={submiting}
                >
                    {submiting ? (
                        <div>
                            <div role="status">
                                <span>Submitting...</span>
                            </div>
                        </div>
                    ) : (
                        <>Submit</>
                    )}
                </button>
            </div>
        </form>
    );
};

export default DropMessage;
