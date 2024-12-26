import React from "react";
import logoImg from "../../../public/assets/img/logo/logo-2-w.png";
import card1 from "../../../public/assets/img/cards/card-1.png";
import card2 from "../../../public/assets/img/cards/card-2.png";
import card3 from "../../../public/assets/img/cards/card-3.png";
import card4 from "../../../public/assets/img/cards/card-4.png";
import Image from "next/image";
import Link from "next/link";

const FooterTwo = () => {
    return (
        <>
            <footer data-background='' className='footer2-bg'>
                <section className='footer-area footer-area2 footer-area2-bg pt-95 pb-55'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6 order-xl-1'>
                                <div className='footer-widget footer2-widget footer2-widget1 mb-40'>
                                    <div className='footer-widget-logo mb-20'>
                                        <Link href='/'>
                                            <Image src={logoImg} alt='img' />
                                        </Link>
                                    </div>
                                    <p className='mb-20'>
                                        ALLEMTİA, inşaat sektörüne yönelik emtia
                                        ticareti için özel olarak tasarlanmış
                                        bir platformdur. İhtiyaçlarınıza göre
                                        çözümler sunar, ticaretinizi
                                        güçlendirir.
                                    </p>
                                    <div className='social__links social-border'>
                                        <ul>
                                            <li>
                                                <Link
                                                    target='_blank'
                                                    href='https://www.facebook.com/'
                                                >
                                                    <i className='fab fa-facebook-f'></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    target='_blank'
                                                    href='https://twitter.com/'
                                                >
                                                    <i className='fab fa-twitter'></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    target='_blank'
                                                    href='https://www.instagram.com/'
                                                >
                                                    <i className='fab fa-instagram'></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    target='_blank'
                                                    href='https://www.pinterest.com/'
                                                >
                                                    <i className='fab fa-pinterest-p'></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6 order-xl-5'>
                                <div className='footer-widget footer2-widget footer2-widget5 mb-40'>
                                    <div className='footer-widget-title'>
                                        <h4>Bülten</h4>
                                    </div>
                                    <p className='mb-20'>
                                        Yeni ürünler ve inşaat sektörü
                                        güncellemeleri hakkında bilgi sahibi
                                        olmak için abone olun!
                                    </p>
                                    <form
                                        action='#'
                                        className='subscribe-form subscribe-form-footer2'
                                    >
                                        <input
                                            type='text'
                                            placeholder='E-posta adresinizi girin'
                                        />
                                        <button type='submit'>
                                            Abone Ol
                                            <i className='fas fa-long-arrow-right'></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-4 col-md-6 col-sm-6 order-xl-2'>
                                <div className='footer-widget footer2-widget footer2-widget2 mb-40'>
                                    <div className='footer-widget-title'>
                                        <h4>Kategoriler</h4>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link href='/shop-sidebar-5-column'>
                                                Demir ve Çelik
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='/shop-sidebar-4-column'>
                                                Çimento & Harç
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='/shop-sidebar-3-column'>
                                                İzolasyon Malzemeleri
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='/shop-full-6-column'>
                                                PVC & Plastik Borular
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='/shop-full-5-column'>
                                                İnşaat Kimyasalları
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='/shop-full-4-column'>
                                                Elektrik & Aydınlatma
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-4 col-md-6 col-sm-6 order-xl-3'>
                                <div className='footer-widget footer2-widget footer2-widget3 mb-40'>
                                    <div className='footer-widget-title'>
                                        <h4>Bilgi</h4>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link href='/about'>
                                                Şirket Hakkında
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='/about'>
                                                Ödeme Yöntemleri
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='/about'>
                                                Sertifikalarımız
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='/about'>
                                                İş Ortaklarımız
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='/about'>
                                                Tedarikçi Olun
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='/privecy-policy'>
                                                İade Politikası
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-4 col-md-6 col-sm-6 order-xl-4'>
                                <div className='footer-widget footer2-widget footer2-widget4 mb-40'>
                                    <div className='footer-widget-title'>
                                        <h4>Yardım & Destek</h4>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link href='/become-vendor'>
                                                Tedarikçi Ol
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='/faq'>
                                                Sıkça Sorulan Sorular
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='/privecy-policy'>
                                                İade Politikası
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='/privecy-policy'>
                                                Kargo & Teslimat
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='/track-order'>
                                                Sipariş Takibi
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='/shop-full-4-column'>
                                                Mağaza Listesi
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='copyright-area copyright2-area'>
                    <div className='container'>
                        <div className='copyright2-inner'>
                            <div className='copyright-text copyright2-text'>
                                Telif Hakkı ©{" "}
                                <Link href='https://themeforest.net/user/bdevs/portfolio'>
                                    ALLEMTİA
                                </Link>
                                . Tüm Hakları Saklıdır.
                            </div>
                            <div className='copyright-link'>
                                <Link
                                    href='/privecy-policy'
                                    className='text-btn'
                                >
                                    Gizlilik Politikası
                                </Link>
                                <Link
                                    href='/privecy-policy'
                                    className='text-btn'
                                >
                                    Şartlar & Koşullar
                                </Link>
                                <Link
                                    href='/privecy-policy'
                                    className='text-btn'
                                >
                                    Site Haritası
                                </Link>
                            </div>
                            <div className='cards-wrapper'>
                                <p>Desteklenen Kartlar</p>
                                <div className='card-links'>
                                    <ul>
                                        <li>
                                            <Link href='#'>
                                                <Image src={card1} alt='img' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='#'>
                                                <Image src={card2} alt='img' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='#'>
                                                <Image src={card3} alt='img' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='#'>
                                                <Image src={card4} alt='img' />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterTwo;
