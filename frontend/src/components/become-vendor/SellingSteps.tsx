import React from "react";

const SellingSteps = () => {
    return (
        <>
            <section className='product-area pb-120'>
                <div className='container container-small'>
                    <div className='row justify-content-center'>
                        <div className='col-xl-8'>
                            <div className='section-title text-center'>
                                <h2 className='section-main-title mb-35'>
                                    Satışa Başlamak İçin 6 Basit Adım
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='why_sells_card'>
                                <div className='icon_sells'>
                                    <i className='fa-regular fa-address-card'></i>
                                </div>
                                <div className='why_title'>
                                    <h4>Ücretsiz Kayıt Ol</h4>
                                </div>
                                <div className='why_description'>
                                    <p>
                                        Sadece telefon numaranızı kullanarak web
                                        sitemizden veya mobil uygulamamızdan
                                        hesabınızı oluşturun
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='why_sells_card'>
                                <div className='icon_sells'>
                                    <i className='fa-regular fa-user'></i>
                                </div>
                                <div className='why_title'>
                                    <h4>Profil Bilgilerini Ekle</h4>
                                </div>
                                <div className='why_description'>
                                    <p>
                                        E-posta adresinizi ve mağaza adınızı
                                        girerek profilinizi tamamlayın, böylece
                                        sizi tanıyabiliriz
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='why_sells_card'>
                                <div className='icon_sells'>
                                    <i className='fa-regular fa-house'></i>
                                </div>
                                <div className='why_title'>
                                    <h4>Adres Bilgilerini Ekle</h4>
                                </div>
                                <div className='why_description'>
                                    <p>
                                        İşletmenizin adres bilgilerini sağlayın,
                                        böylece hesabınızı izleyebilir,
                                        tanıyabilir ve doğrulayabiliriz
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='why_sells_card'>
                                <div className='icon_sells'>
                                    <i className='fa-duotone fa-building-columns'></i>
                                </div>
                                <div className='why_title'>
                                    <h4>Kimlik & Banka Bilgilerini Ekle</h4>
                                </div>
                                <div className='why_description'>
                                    <p>
                                        Kimlik ve işinizle ilgili bilgileri
                                        ekleyin. Ödemeler için gerekli banka
                                        bilgilerini ekleyin
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='why_sells_card'>
                                <div className='icon_sells'>
                                    <i className='fa-sharp fa-regular fa-bag-shopping'></i>
                                </div>
                                <div className='why_title'>
                                    <h4>Ürünleri Listele</h4>
                                </div>
                                <div className='why_description'>
                                    <p>
                                        Kalite kontrolünden geçtikten sonra
                                        ürünleriniz yayına girdiğinde satışa
                                        başlayabilirsiniz
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='why_sells_card'>
                                <div className='icon_sells'>
                                    <i className='fa-regular fa-headphones'></i>
                                </div>
                                <div className='why_title'>
                                    <h4>Siparişleri Al & Teslimat Planla</h4>
                                </div>
                                <div className='why_description'>
                                    <p>
                                        Ürünlerinizi listeledikten sonra Satıcı
                                        Paneli ve Satıcı Bölgesi Mobil
                                        Uygulaması ile online işinizi yönetin
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SellingSteps;
