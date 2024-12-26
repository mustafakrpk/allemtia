"use client";
import {
    cart_product,
    clear_cart,
    decrease_quantity,
    remove_cart_product,
} from "@/redux/slices/cartSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const CartArea = () => {
    const [onChangeSearch, setOnChangeSearch] = useState<string>("");
    const [searchValue, setSearchValue] = useState<string>("");

    const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setOnChangeSearch(event.target.value);
    };

    const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSearchValue(onChangeSearch);
    };
    const dispatch = useDispatch();
    const cartProducts = useSelector(
        (state: RootState) => state.cart.cartProducts
    );
    const totalPrice = cartProducts.reduce(
        (total, product) =>
            total + (product?.price ?? 0) * (product?.totalCart ?? 0),
        0
    );

    const handleChange = (e: any) => {};

    return (
        <>
            <section className='cart-area pt-100 pb-100'>
                <div className='container container-small'>
                    {cartProducts?.length ? (
                        <>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='table-content table-responsive'>
                                        <table className='table'>
                                            <thead>
                                                <tr>
                                                    <th className='product-thumbnail'>
                                                        Görseller
                                                    </th>
                                                    <th className='cart-product-name'>
                                                        Ürün
                                                    </th>
                                                    <th className='cart-product-name'>
                                                        Renk
                                                    </th>
                                                    <th className='product-price'>
                                                        Birim Fiyat
                                                    </th>
                                                    <th className='product-quantity'>
                                                        Miktar
                                                    </th>
                                                    <th className='product-quantity'>
                                                        Beden
                                                    </th>
                                                    <th className='product-subtotal'>
                                                        Toplam
                                                    </th>
                                                    <th className='product-remove'>
                                                        Kaldır
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartProducts?.map((item) => {
                                                    const productPrice =
                                                        (item.price ?? 0) *
                                                        (item.totalCart ?? 0);
                                                    return (
                                                        <tr key={item?.id}>
                                                            <td className='product-thumbnail'>
                                                                <Link href='/shop-details'>
                                                                    <Image
                                                                        width={
                                                                            50
                                                                        }
                                                                        height={
                                                                            50
                                                                        }
                                                                        style={{
                                                                            width: "auto",
                                                                            height: "auto",
                                                                        }}
                                                                        src={
                                                                            item?.productImg
                                                                        }
                                                                        alt='img'
                                                                    />
                                                                </Link>
                                                            </td>
                                                            <td className='product-name'>
                                                                <Link href='/shop-details'>
                                                                    {
                                                                        item?.title
                                                                    }
                                                                </Link>
                                                            </td>
                                                            <td className='product-name'>
                                                                <Link href='/shop-details'>
                                                                    {
                                                                        item?.primaryColor
                                                                    }
                                                                </Link>
                                                            </td>
                                                            <td className='product-price'>
                                                                <span className='amount'>
                                                                    ₺
                                                                    {
                                                                        item?.price
                                                                    }
                                                                    .00
                                                                </span>
                                                            </td>
                                                            <td className='product-quantity text-center'>
                                                                <div className='product-quantity mt-10 mb-10'>
                                                                    <div className='product-quantity-form'>
                                                                        <form
                                                                            onSubmit={(
                                                                                e
                                                                            ) =>
                                                                                e.preventDefault()
                                                                            }
                                                                        >
                                                                            <button
                                                                                onClick={() =>
                                                                                    dispatch(
                                                                                        decrease_quantity(
                                                                                            item
                                                                                        )
                                                                                    )
                                                                                }
                                                                                className='cart-minus'
                                                                            >
                                                                                <i className='far fa-minus'></i>
                                                                            </button>
                                                                            <input
                                                                                className='cart-input'
                                                                                type='text'
                                                                                onChange={
                                                                                    handleChange
                                                                                }
                                                                                value={
                                                                                    item.totalCart
                                                                                }
                                                                            />
                                                                            <button
                                                                                onClick={() =>
                                                                                    dispatch(
                                                                                        cart_product(
                                                                                            item
                                                                                        )
                                                                                    )
                                                                                }
                                                                                className='cart-plus'
                                                                            >
                                                                                <i className='far fa-plus'></i>
                                                                            </button>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className='product-subtotal'>
                                                                <span className='amount'>
                                                                    {
                                                                        item
                                                                            ?.sizeArray?.[0]
                                                                    }
                                                                </span>
                                                            </td>
                                                            <td className='product-subtotal'>
                                                                <span className='amount'>
                                                                    ₺
                                                                    {
                                                                        productPrice
                                                                    }
                                                                    .00
                                                                </span>
                                                            </td>
                                                            <td className='product-remove'>
                                                                <button
                                                                    type='button'
                                                                    onClick={() =>
                                                                        dispatch(
                                                                            remove_cart_product(
                                                                                item
                                                                            )
                                                                        )
                                                                    }
                                                                >
                                                                    <i className='fa fa-times'></i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className='coupon-all'>
                                                <form
                                                    onSubmit={
                                                        handleSearchSubmit
                                                    }
                                                    className='coupon d-flex align-items-center'
                                                >
                                                    <input
                                                        id='coupon_code'
                                                        className='input-text'
                                                        name='coupon_code'
                                                        value={onChangeSearch}
                                                        onChange={
                                                            handleSearchInputChange
                                                        }
                                                        placeholder='Kupon kodu'
                                                        type='text'
                                                    />
                                                    <button
                                                        className='fill-btn'
                                                        name='apply_coupon'
                                                        type='submit'
                                                    >
                                                        Kuponu Uygula
                                                    </button>
                                                </form>
                                                <div className='coupon2'>
                                                    <button
                                                        onClick={() =>
                                                            dispatch(
                                                                clear_cart()
                                                            )
                                                        }
                                                        className='fill-btn'
                                                        name='update_cart'
                                                        type='submit'
                                                    >
                                                        Sepeti Temizle
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-5 ml-auto'>
                                            <div className='cart-page-total'>
                                                <h2>Sepet Toplamı</h2>
                                                <ul className='mb-20'>
                                                    <li>
                                                        İndirim <span></span>
                                                    </li>
                                                    <li>
                                                        Ara Toplam{" "}
                                                        <span>
                                                            ₺{totalPrice}.00
                                                        </span>
                                                    </li>
                                                    <li>
                                                        Toplam{" "}
                                                        <span>
                                                            ₺{totalPrice}.00
                                                        </span>
                                                    </li>
                                                </ul>
                                                <Link
                                                    className='border-btn'
                                                    href='/checkout'
                                                >
                                                    Ödeme Yap
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p className='text-center pt-20'>Sepetiniz Boş</p>
                    )}
                </div>
            </section>
        </>
    );
};

export default CartArea;
