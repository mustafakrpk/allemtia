import React from "react";
import cardImg1 from "../../../public/assets/img/cards/card-1.png";
import cardImg2 from "../../../public/assets/img/cards/card-2.png";
import cardImg3 from "../../../public/assets/img/cards/card-3.png";
import cardImg4 from "../../../public/assets/img/cards/card-4.png";
import appStore1 from "../../../public/assets/img/apps/app-store-1.png";
import appStore2 from "../../../public/assets/img/apps/app-store-2.png";
import Image from "next/image";
import Link from "next/link";
import HelpLIneIcon from "@/svg/HelpLIneIcon";

const FooterOne = () => {
    return (
        <>
            <footer data-background='' className='footer1-bg'>
                <section className='footer-area footer-area1 footer-area1-bg pt-95 pb-55'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-3 col-md-6 col-sm-6'>
                                <div className='footer-widget footer1-widget footer1-widget1 mb-40'>
                                    <div className='footer-widget-title'>
                                        <h4>Bilgi</h4>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link href='/about'>
                                                Hakkımızda
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
                                                İade ve İptal Politikası
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-6'>
                                <div className='footer-widget footer1-widget footer1-widget2 mb-40'>
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
                                                Çimento ve Harç
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
                                                Elektrik ve Aydınlatma
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-6'>
                                <div className='footer-widget footer1-widget footer1-widget3 mb-40'>
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
                                                İade ve İptal Politikası
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='/privecy-policy'>
                                                Kargo ve Teslimat
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='/track-order'>
                                                Sipariş Takibi
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='/shop-full-4-column'>
                                                Mağazalar ve Depolar
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-6'>
                                <div className='footer-widget footer1-widget footer1-widget4 mb-40'>
                                    <div className='footer-widget-title'>
                                        <h4>Bülten</h4>
                                    </div>
                                    <p className='mb-20'>
                                        Kampanyalar, yeni malzemeler ve sektörle
                                        ilgili güncellemeler hakkında bilgi
                                        almak için abone olun.
                                    </p>
                                    <form
                                        action='#'
                                        className='subscribe-form subscribe-form-footer1'
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
                        </div>
                    </div>
                </section>
                <div className='footer-bottom-area footer-bottom1-area'>
                    <div className='container'>
                        <div className='footer-bottom1-inner'>
                            <div className='irc-item footer-support'>
                                <div className='irc-item-icon'>
                                    <HelpLIneIcon />
                                </div>
                                <div className='irc-item-content'>
                                    <p>09:00 - 18:00</p>
                                    <div className='support-number'>
                                        <Link href='tel:555-900-888'>
                                            555 - 900 - 888
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='cards-wrapper cards-wrapper-lines'>
                                <p>Desteklenen Kartlar</p>
                                <div className='card-links'>
                                    <ul>
                                        <li>
                                            <Link href='#'>
                                                <Image
                                                    src={cardImg1}
                                                    alt='card-img'
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='#'>
                                                <Image
                                                    src={cardImg2}
                                                    alt='card-img'
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='#'>
                                                <Image
                                                    src={cardImg3}
                                                    alt='card-img'
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='#'>
                                                <Image
                                                    src={cardImg4}
                                                    alt='card-img'
                                                />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='apps-download'>
                                <div className='apps-download-text'>
                                    <h5>Mobil Uygulamamızı İndirin</h5>
                                    <p>
                                        İlk siparişinizde ücretsiz teslimat
                                        avantajı.
                                    </p>
                                </div>
                                <div className='app-links'>
                                    <ul>
                                        <li>
                                            <Link href='#'>
                                                <Image
                                                    src={appStore1}
                                                    alt='app-img'
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='#'>
                                                <Image
                                                    src={appStore2}
                                                    alt='app-img'
                                                />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='copyright-area copyright1-area'>
                    <div className='container'>
                        <div className='copyright1-inner'>
                            <div className='copyright-text copyright1-text'>
                                Telif Hakkı ©{" "}
                                <Link href='https://erenturgut.com/'>
                                    ???
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
                            <div className='social-wrapper'>
                                <p>Bizi Takip Edin:</p>
                                <div className='social__links'>
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
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterOne;
