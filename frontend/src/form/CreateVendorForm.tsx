"use client";

import NiceSelectTwo from "@/components/common/NiceSelectTwo";
import { GenderData } from "@/data/nice-select-data";
import useGlobalContext from "@/hooks/use-context";
import FacebookIcon from "@/svg/FacebookIcon";
import GoogleIcon from "@/svg/GoogleIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

interface FormData {
    shopName: string;
    bankAccountNumber: string;
    email: string;
    busnessAddress: string;
    phone: string;
    password: string;
    gender: string;
}

const CreateVendorForm = () => {
    const router = useRouter();
    const { niceSelectData } = useGlobalContext();
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        const toastId = toast.loading("");
        const shopName = data.shopName;
        const bankAccountNumber = data.bankAccountNumber;
        const email = data.email;
        const busnessAddress = data.busnessAddress;
        const phone = data.phone;
        const password = data.password;
        const gender = niceSelectData;
        const userInfo = {
            shopName,
            bankAccountNumber,
            email,
            busnessAddress,
            phone,
            password,
            gender,
        };
        toast.success("Satıcı Başarıyla Oluşturuldu", {
            id: toastId,
            duration: 1000,
        });
        router.push("/email-verificaiton");
    };

    const selectHandler = () => {};
    return (
        <>
            <div className='register-area pt-120 pb-120'>
                <div className='container container-small'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='signup-form-wrapper'>
                                {/* Form */}
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='signup-wrapper'>
                                                <input
                                                    type='text'
                                                    placeholder='Mağaza Adınızı Girin'
                                                    {...register("shopName", {
                                                        required:
                                                            "Mağaza Adı gerekli",
                                                    })}
                                                />
                                                {errors.shopName && (
                                                    <span className='error-message'>
                                                        {
                                                            errors.shopName
                                                                .message
                                                        }
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='signup-wrapper'>
                                                <input
                                                    type='text'
                                                    placeholder='Banka Hesap Numarası'
                                                    {...register(
                                                        "bankAccountNumber",
                                                        {
                                                            required:
                                                                "Banka Hesap Numarası gerekli",
                                                        }
                                                    )}
                                                />
                                                {errors.bankAccountNumber && (
                                                    <span className='error-message'>
                                                        {
                                                            errors
                                                                .bankAccountNumber
                                                                .message
                                                        }
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='signup-wrapper'>
                                                <input
                                                    type='text'
                                                    placeholder='İş Adresi'
                                                    {...register(
                                                        "busnessAddress",
                                                        {
                                                            required:
                                                                "İş Adresi gerekli",
                                                        }
                                                    )}
                                                />
                                                {errors.busnessAddress && (
                                                    <span className='error-message'>
                                                        {
                                                            errors
                                                                .busnessAddress
                                                                .message
                                                        }
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='signup-wrapper'>
                                                <input
                                                    type='email'
                                                    placeholder='E-posta'
                                                    {...register("email", {
                                                        required:
                                                            "E-posta gerekli",
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
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='signup-wrapper'>
                                                <input
                                                    type='text'
                                                    placeholder='Telefon Numarası'
                                                    {...register("phone", {
                                                        required:
                                                            "Telefon gerekli",
                                                        minLength: 10,
                                                    })}
                                                />
                                                {errors.phone && (
                                                    <span className='error-message'>
                                                        {errors.phone.message}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='signup-wrapper'>
                                                <input
                                                    className='password_input'
                                                    type={
                                                        showPassword
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    placeholder='Satıcı Şifresi Oluştur'
                                                    {...register("password", {
                                                        required:
                                                            "Şifre gerekli",
                                                        minLength: 6,
                                                    })}
                                                />
                                                <span className='input-icon'>
                                                    <button
                                                        type='button'
                                                        onClick={() =>
                                                            setShowPassword(
                                                                !showPassword
                                                            )
                                                        }
                                                        className='password-toggle-btn'
                                                    >
                                                        <i
                                                            className={
                                                                showPassword
                                                                    ? "fa-solid fa-eye"
                                                                    : "fa-regular fa-eye-slash"
                                                            }
                                                        ></i>
                                                    </button>
                                                </span>
                                                {errors.password && (
                                                    <span className='error-message'>
                                                        {
                                                            errors.password
                                                                .message
                                                        }
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className='sing-buttom mb-20'>
                                        <button
                                            type='submit'
                                            className='sing-btn'
                                        >
                                            Satıcı Olarak Kayıt Ol
                                        </button>
                                    </div>
                                </form>
                                {/* End Form */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateVendorForm;
