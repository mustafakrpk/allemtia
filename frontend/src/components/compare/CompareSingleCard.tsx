import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductsType } from "@/interFace/interFace";
import { useDispatch } from "react-redux";
import { remove_cart_compare_product } from "@/redux/slices/compareSlice";
import GetRatting from "@/hooks/GetRatting";
import { cart_product } from "@/redux/slices/cartSlice";

interface propsType {
    item: ProductsType;
}

const CompareSingleCard = ({ item }: propsType) => {
    const dispatch = useDispatch();
    const [size, setSize] = useState<string>(item?.sizeArray?.[0] as string);

    const handleAddToCart = (item: ProductsType) => {
        const newCardProduct = { ...item };
        newCardProduct.sizeArray = [size];
        dispatch(cart_product(newCardProduct));
    };

    return (
        <>
            <div>
                <div className='compare-part'>
                    <button
                        onClick={() =>
                            dispatch(remove_cart_compare_product(item))
                        }
                        type='button'
                        className='close-btn'
                    >
                        <span aria-hidden='true'>×</span>
                    </button>
                    <div className='img-secton'>
                        <div>
                            <Image
                                src={item?.productImg}
                                className='img-fluid blur-up lazyload bg-img'
                                alt=''
                            />
                        </div>
                        <Link href='#'>
                            <h5>{item?.title}</h5>
                        </Link>
                        <h5>{item?.price} TL</h5>
                        <p>
                            {item?.rating ? (
                                <>
                                    <GetRatting averageRating={item?.rating} />
                                </>
                            ) : (
                                <>
                                    <GetRatting averageRating={0} />
                                </>
                            )}
                        </p>
                    </div>
                    <div className='detail-part'>
                        <div className='title-detail'>
                            <h5>Kategori</h5>
                        </div>
                        <div className='inner-detail'>
                            <p>{item?.category}</p>
                        </div>
                    </div>
                    <div className='detail-part'>
                        <div className='title-detail'>
                            <h5>Marka Adı</h5>
                        </div>
                        <div className='inner-detail'>
                            <p>{item?.brand}</p>
                        </div>
                    </div>
                    <div className='detail-part'>
                        <div className='title-detail'>
                            <h5>Beden</h5>
                        </div>
                        <div className='inner-detail'>
                            <p>
                                {item?.sizeArray?.length ? (
                                    <>
                                        {item?.sizeArray
                                            .slice(0, -1)
                                            .map(
                                                (sizeItem) => `${sizeItem},`
                                            )}{" "}
                                        {
                                            item.sizeArray[
                                                item.sizeArray.length - 1
                                            ]
                                        }
                                    </>
                                ) : (
                                    <></>
                                )}
                            </p>
                        </div>
                    </div>

                    <div className='detail-part'>
                        <div className='title-detail'>
                            <h5>Birden Fazla Renk</h5>
                        </div>
                        <div className='inner-detail'>
                            <p>
                                {item?.productColor === true ? "Evet" : "Hayır"}
                            </p>
                        </div>
                    </div>

                    <div className='detail-part'>
                        <div className='title-detail'>
                            <h5>Renk</h5>
                        </div>
                        <div className='inner-detail'>
                            <p>Kırmızı, Mavi, Pembe</p>
                        </div>
                    </div>

                    <div className='detail-part'>
                        <div className='title-detail'>
                            <h5>Durum</h5>
                        </div>
                        <div className='inner-detail'>
                            <p>{item?.status ? item?.status : "Durum Yok"}</p>
                        </div>
                    </div>

                    <div className='detail-part'>
                        <div className='title-detail'>
                            <h5>Stok Durumu</h5>
                        </div>
                        <div className='inner-detail'>
                            <p>
                                {item?.totalProduct && item?.totalProduct > 0
                                    ? `${
                                          item?.totalProduct > 9
                                              ? `${item?.totalProduct} Ürün Mevcut`
                                              : `${item?.totalProduct} Ürün Mevcut`
                                      }`
                                    : `Ürün Mevcut Değil`}
                            </p>
                        </div>
                    </div>
                    <div className='btn-part'>
                        <button
                            type='button'
                            onClick={() => handleAddToCart(item)}
                            className='add-cart-btn'
                        >
                            <i className='fal fa-shopping-bag'></i>Sepete Ekle
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CompareSingleCard;
