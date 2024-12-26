"use client";

import React from "react";
import { fetchProducts, Product } from '../../api/productApi';
import { useFetch } from '../../hooks/useFetch';
import Image from "next/image";
import Link from "next/link";
import thumb from "../../../public/assets/img/about/about-thumb.jpg";
import logo from "../../../public/assets/img/about/1990.png";

const AboutArea = () => {
    const { data: products, loading, error } = useFetch<Product[]>(fetchProducts);

    return (
        <>
            <section className='about-area pb-90'>
                <div className='container container-small'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <div className='about-thumb pos-rel mb-30'>
                                <Image style={{ width: "100%", height: "auto" }} src={thumb} alt='img' />
                                <Image src={logo} alt='img' />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='about-content mb-30 align-pb-35'>
                                <h2>Moda, hayatınızda istediğiniz her şeydir.</h2>
                                <p>Anlıyoruz. Giyinmek zor olabilir...</p>
                                <Link href='/shop-sidebar-4-column' className='fill-btn'>Ürünleri Keşfet</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ürün Listesi */}
                <div className='container mt-5'>
                    <h3>Ürün Listesi</h3>
                    {loading && <p>Ürünler yükleniyor...</p>}
                    {error && <p>Hata: {error.message}</p>}
                    {products && (
                        <ul>
                            {products.map(product => (
                                <li key={product.prd_id}>
                                    {product.prd_name} - {product.prd_price} TL
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>
        </>
    );
};

export default AboutArea;
