import Link from "next/link";
import React from "react";
import SidebarMain from "../SharedComponents/Sidebars/SidebarMain";

const ErrorMain = () => {
    return (
        <>
            <section className='error-area'>
                <div className='container container-small'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='error-content'>
                                <div className='error-number'>404</div>
                                <h2 className='error-text'>
                                    Üzgünüz! <br /> Sayfa {`bulunamadı`}
                                </h2>
                                <p>
                                    Aradığınız sayfa kaldırılmış, adı
                                    değiştirilmiş veya geçici olarak
                                    kullanılamıyor olabilir.
                                </p>
                                <div className='error-btn'>
                                    <Link href='/' className='fill-btn'>
                                        Anasayfaya Dön
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SidebarMain />
        </>
    );
};

export default ErrorMain;
