"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import React from "react";

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
    productId: string;
    paymentId: string;
    productName: string;
}

const RefundForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        const {
            name,
            email,
            phone,
            message,
            productId,
            paymentId,
            productName,
        } = data;
        const userInfo = {
            name,
            email,
            phone,
            message,
            productId,
            paymentId,
            productName,
        };
        // İstek gönderme işlemleri burada yapılabilir
    };

    return (
        <>
            <section className='bd-Contact__area pt-10'>
                <div className='container'>
                    <div className='row g-0 justify-content-center'>
                        <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                            <div className='bd-contact__main-wrapper mb-70'>
                                <div className='bd-section__title-wrapper'>
                                    <h3 className='bd-section__title mb-50'>
                                        İade Talebi Oluştur
                                    </h3>
                                </div>
                                <div className='bd-contact__form'>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='single-form-input'>
                                                    <input
                                                        type='text'
                                                        placeholder='Ürün ID giriniz'
                                                        {...register(
                                                            "productId",
                                                            {
                                                                required:
                                                                    "Ürün ID gereklidir",
                                                            }
                                                        )}
                                                    />
                                                    {errors.productId && (
                                                        <span className='error-message'>
                                                            {
                                                                errors.productId
                                                                    .message
                                                            }
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='single-form-input'>
                                                    <input
                                                        type='text'
                                                        placeholder='Ödeme ID giriniz'
                                                        {...register(
                                                            "paymentId",
                                                            {
                                                                required:
                                                                    "Ödeme ID gereklidir",
                                                            }
                                                        )}
                                                    />
                                                    {errors.paymentId && (
                                                        <span className='error-message'>
                                                            {
                                                                errors.paymentId
                                                                    .message
                                                            }
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='single-form-input'>
                                                    <input
                                                        type='text'
                                                        placeholder='Telefon Numaranız'
                                                        {...register("phone", {
                                                            required:
                                                                "Telefon gereklidir",
                                                        })}
                                                    />
                                                    {errors.phone && (
                                                        <span className='error-message'>
                                                            {
                                                                errors.phone
                                                                    .message
                                                            }
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='single-form-input'>
                                                    <input
                                                        type='email'
                                                        placeholder='E-posta Adresiniz'
                                                        {...register("email", {
                                                            required:
                                                                "E-posta gereklidir",
                                                        })}
                                                    />
                                                    {errors.email && (
                                                        <span className='error-message'>
                                                            {
                                                                errors.email
                                                                    .message
                                                            }
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className='col-md-12'>
                                                <div className='single-form-input'>
                                                    <input
                                                        type='text'
                                                        placeholder='Ürün Adı'
                                                        {...register(
                                                            "productName",
                                                            {
                                                                required:
                                                                    "Ürün adı gereklidir",
                                                            }
                                                        )}
                                                    />
                                                    {errors.productName && (
                                                        <span className='error-message'>
                                                            {
                                                                errors
                                                                    .productName
                                                                    .message
                                                            }
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className='col-md-12'>
                                                <div className='single-form-input'>
                                                    <textarea
                                                        id='message'
                                                        placeholder='İade sebebinizi yazınız...'
                                                        {...register(
                                                            "message",
                                                            {
                                                                required:
                                                                    "Sebep gereklidir",
                                                            }
                                                        )}
                                                    />
                                                    {errors.message && (
                                                        <span className='error-message'>
                                                            {
                                                                errors.message
                                                                    .message
                                                            }
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='contact-btn'>
                                            <button
                                                type='submit'
                                                className='fill-btn'
                                            >
                                                Gönder
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RefundForm;
