"use client";
import FacebookIcon from "@/svg/FacebookIcon";
import GoogleIcon from "@/svg/GoogleIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

interface FormData {
    email: string;
    password: string;
}

const LoginForm = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        const toastId = toast.loading("");
        const email = data.email;
        const password = data.password;
        const userInfo = {
            email,
            password,
        };
        toast.success("Giriş Başarılı", { id: toastId, duration: 1000 });
        reset();
        router.push("/");
    };

    return (
        <>
            <div className='register-area pt-120 pb-120'>
                <div className='container container-small'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='signup-form-wrapper'>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className='signup-wrapper'>
                                        <input
                                            type='email'
                                            placeholder='E-posta veya Kullanıcı Adı'
                                            {...register("email", {
                                                required: "E-posta gereklidir",
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
                                    <div className='signup-wrapper'>
                                        <input
                                            type='password'
                                            placeholder='Şifre'
                                            {...register("password", {
                                                required: "Şifre gereklidir",
                                            })}
                                        />
                                        {errors.password && (
                                            <span className='error-message'>
                                                {errors.password.message}
                                            </span>
                                        )}
                                    </div>
                                    <div className='signup-action'>
                                        <div className='course-sidebar-list'>
                                            <input
                                                className='signup-checkbo mr-1'
                                                type='checkbox'
                                                id='sing-in'
                                            />
                                            <label
                                                className='sign-check'
                                                htmlFor='sing-in'
                                            >
                                                <span>Beni hatırla</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className='sing-buttom mb-20'>
                                        <button
                                            type='submit'
                                            className='sing-btn'
                                        >
                                            Şimdi Giriş Yap
                                        </button>
                                    </div>
                                </form>

                                <div className='registered wrapper'>
                                    <div className='not-register'>
                                        <span>
                                            Henüz kayıtlı değil misiniz?
                                        </span>
                                        <span>
                                            <Link href='/register'>
                                                Kayıt Ol
                                            </Link>
                                        </span>
                                    </div>
                                    <div className='forget-password'>
                                        <Link href='/forgot-password'>
                                            Şifremi unuttum
                                        </Link>
                                    </div>
                                </div>
                                <div className='sign-social text-center'>
                                    <span>Veya ile giriş yapın</span>
                                </div>
                                <div className='sign-social-icon'>
                                    <div className='sign-facebook'>
                                        <FacebookIcon />
                                        <Link className='ml-1' href='#'>
                                            Facebook
                                        </Link>
                                    </div>
                                    <div className='sign-gmail'>
                                        <GoogleIcon />
                                        <Link className='ml-1' href='#'>
                                            Google
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
