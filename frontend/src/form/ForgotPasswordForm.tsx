"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
    email: string;
}

const ForgotPasswordForm = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        const email = data.email;
        const userInfo = { email };
        router.push("/forgot-code");
    };

    return (
        <>
            <div className='register-area'>
                <div className='container container-small'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='signup-form-wrapper'>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className='signup-wrapper'>
                                        <input
                                            type='email'
                                            placeholder='E-posta Adresinizi Girin'
                                            {...register("email", {
                                                required:
                                                    "E-posta adresi zorunludur",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message:
                                                        "Geçersiz e-posta adresi",
                                                },
                                            })}
                                        />
                                        {errors.email && (
                                            <span className='error-message'>
                                                {errors.email.message}
                                            </span>
                                        )}
                                    </div>

                                    <div className='sing-buttom mb-20'>
                                        <button
                                            type='submit'
                                            className='sing-btn'
                                        >
                                            Şifremi Unuttum
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPasswordForm;
