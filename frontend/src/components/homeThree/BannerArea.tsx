import React from "react";
import bannerOne from "../../../public/assets/img/category_banner/category-banner5.jpg";
import bannerTwo from "../../../public/assets/img/category_banner/category-banner6.jpg";
import Image from "next/image";
import Link from "next/link";

const BannerArea = () => {
    return (
        <>
            <div className='category-banner-area pt-30'>
                <div className='container'>
                    <div className='row'>
                        {/* Satıcı Ol Kartı */}
                        <div className='col-xl-6 col-lg-6 col-md-12'>
                            <div className='category-banner-single category-banner2 mb-30 pos-rel'>
                                <div className='category-banner-img'>
                                    <Image
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                        src={bannerOne}
                                        alt='banner-img'
                                    />
                                </div>
                                <div className='category-banner-inner'>
                                    <div className='category-banner-content'>
                                        <Link
                                            href='/become-a-seller'
                                            className='product-category'
                                        >
                                            <span>Satıcı Ol</span>
                                        </Link>
                                        <p className='category-short-desc'>
                                            Mağazanı şimdi aç ve milyonlarca
                                            müşteriye ulaş!
                                        </p>
                                        <Link
                                            href='/become-a-seller'
                                            className='border-btn'
                                        >
                                            Hemen Başla
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Alıcı Ol Kartı */}
                        <div className='col-xl-6 col-lg-6 col-md-12'>
                            <div className='category-banner-single category-banner2 mb-30 pos-rel'>
                                <div className='category-banner-img'>
                                    <Image
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                        src={bannerTwo}
                                        alt='banner-img'
                                    />
                                </div>
                                <div className='category-banner-inner'>
                                    <div className='category-banner-content'>
                                        <Link
                                            href='/shop'
                                            className='product-category'
                                        >
                                            <span>Alıcı Ol</span>
                                        </Link>
                                        <p className='category-short-desc'>
                                            İndirimli ürünler ve özel teklifler
                                            seni bekliyor!
                                        </p>
                                        <Link
                                            href='/shop'
                                            className='border-btn'
                                        >
                                            Alışverişe Başla
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hr1 mt-60'></div>
        </>
    );
};

export default BannerArea;
