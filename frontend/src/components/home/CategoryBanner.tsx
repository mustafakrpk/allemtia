import React from "react";

import banner1 from "../../../public/assets/img/category_banner/category-banner1.jpg";
import banner4 from "../../../public/assets/img/category_banner/category-banner4.jpg";
import banner2 from "../../../public/assets/img/category_banner/category-banner2.jpg";
import banner3 from "../../../public/assets/img/category_banner/category-banner3.jpg";
import Image from "next/image";
import Link from "next/link";

const CategoryBanner = () => {
    return (
        <>
            <div className='category-banner-area pt-30'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-4 col-lg-6 col-md-6'>
                            <div className='category-banner-single mb-30 pos-rel'>
                                <div className='category-banner-img'>
                                    <Image
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                        src={banner1}
                                        alt='banner-img'
                                    />
                                </div>
                                <div className='category-banner-inner'>
                                    <div className='category-banner-content'>
                                        <Link
                                            href='/shop-sidebar-4-column'
                                            className='product-category'
                                        >
                                            Beton & Çimento
                                        </Link>
                                        <p className='category-short-desc'>
                                            Temel Malzemeler - 2024
                                        </p>
                                        <Link
                                            href='/shop-sidebar-4-column'
                                            className='border-btn'
                                        >
                                            Daha Fazla
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-6 col-md-6 order-xl-3'>
                            <div className='category-banner-single mb-30 pos-rel'>
                                <div className='category-banner-img'>
                                    <Image
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                        src={banner4}
                                        alt='banner-img'
                                    />
                                </div>
                                <div className='category-banner-inner'>
                                    <div className='category-banner-content'>
                                        <Link
                                            href='/shop-sidebar-4-column'
                                            className='product-category'
                                        >
                                            Çelik & Donatı
                                        </Link>
                                        <p className='category-short-desc'>
                                            Yapısal Dayanım - 2024
                                        </p>
                                        <Link
                                            href='/shop-sidebar-4-column'
                                            className='border-btn'
                                        >
                                            Daha Fazla
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-4 order-xl-2'>
                            <div className='row'>
                                <div className='col-xl-12 col-lg-6 col-md-6'>
                                    <div className='category-banner-single mb-30 pos-rel'>
                                        <div className='category-banner-img'>
                                            <Image
                                                style={{
                                                    width: "100%",
                                                    height: "auto",
                                                }}
                                                src={banner2}
                                                alt='banner-img'
                                            />
                                        </div>
                                        <div className='category-banner-inner align-items-end'>
                                            <div className='category-banner-content'>
                                                <Link
                                                    href='/shop-sidebar-4-column'
                                                    className='product-category'
                                                >
                                                    Elektrik Malzemeleri
                                                </Link>
                                                <p className='category-short-desc'>
                                                    Güç Çözümleri - 2024
                                                </p>
                                                <Link
                                                    href='/shop-sidebar-4-column'
                                                    className='border-btn'
                                                >
                                                    Daha Fazla
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-12 col-lg-6 col-md-6'>
                                    <div className='category-banner-single mb-30 pos-rel'>
                                        <div className='category-banner-img'>
                                            <Image
                                                style={{
                                                    width: "100%",
                                                    height: "auto",
                                                }}
                                                src={banner3}
                                                alt='banner-img'
                                            />
                                        </div>
                                        <div className='category-banner-inner justify-content-end'>
                                            <div className='category-banner-content'>
                                                <Link
                                                    href='/shop-sidebar-4-column'
                                                    className='product-category'
                                                >
                                                    İzolasyon Malzemeleri
                                                </Link>
                                                <p className='category-short-desc'>
                                                    Enerji Verimliliği - 2024
                                                </p>
                                                <Link
                                                    href='/shop-sidebar-4-column'
                                                    className='border-btn'
                                                >
                                                    Daha Fazla
                                                </Link>
                                            </div>
                                        </div>
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

export default CategoryBanner;
