import EmailVerificationForm from "@/form/EmailVerificationForm";
import React from "react";
import BreadCrumb from "../SharedComponents/BreadCrumb";

const EmailVerificationMain = () => {
    return (
        <>
            <BreadCrumb title='E-posta Doğrulama' />
            <section className='login__area pt-110 pb-110'>
                <div className='container'>
                    <div className='login__inner p-relative z-index-1'>
                        <div className='row justify-content-center'>
                            <div className='col-xl-6 col-lg-8 col-md-10'>
                                <div className='login__wrapper'>
                                    <div className='login__top mb-30 text-center'>
                                        <h3 className='login__title'>
                                            Doğrulama Kodunuzu Girin
                                        </h3>
                                        <p>
                                            E-postanızı kontrol edin, size bir
                                            doğrulama kodu gönderdik.
                                        </p>
                                    </div>
                                    <EmailVerificationForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EmailVerificationMain;
