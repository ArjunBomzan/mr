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
                <p className="header-md title-space text-secondary ">
                    Tell us about yourself
                </p>
                <p>
                    Whether you have questions or you would just like to say
                    hello, contact us.
                </p>
            </div>
            <div className="title-space-3xl  grid gap-x-5 md:grid-cols-2"></div>
            <div className="form-group">
                <label className="form-label">Name</label>
                <input
                    className="form-control"
                    type="text"
                    name="name"
                    {...register("name", { required: true })}
                />
                {errors?.name?.type === "required" && (
                    <small>This field is required</small>
                )}
            </div>

            <div className="form-group">
                <label className="form-label">Email</label>
                <input
                    className="form-control"
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                />
                {errors?.name?.type === "required" && (
                    <small>This field is required</small>
                )}
            </div>
            <div className="form-group">
                <label className="form-label">Phone</label>
                <input
                    className="form-control"
                    type="number"
                    name="mobile_no"
                    {...register("mobile_no", { required: true })}
                />
                {errors?.name?.type === "required" && (
                    <small>This field is required</small>
                )}
            </div>
            <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                    className="form-control"
                    type="text"
                    name="subject"
                    {...register("subject", { required: true })}
                />
                {errors?.name?.type === "required" && (
                    <small>This field is required</small>
                )}
            </div>
            <div className="form-group">
                <label className="form-label">Any Queries</label>
                <textarea
                    name="message"
                    {...register("message", { required: true })}
                />
                {errors?.name?.type === "required" && (
                    <small>This field is required</small>
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
            <button type="submit" name="name" disabled={submiting}>
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
        </form>
    );
};

export default DropMessage;
