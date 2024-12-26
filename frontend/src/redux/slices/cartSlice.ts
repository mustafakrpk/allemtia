"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import { ProductsType } from "@/interFace/interFace";
import { toast } from "sonner";

interface CartState {
    cartProducts: ProductsType[];
}

const initialState: CartState = {
    cartProducts: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        cart_product: (state, { payload }: PayloadAction<ProductsType>) => {
            const productIndex = state.cartProducts.findIndex(
                (item) => item.id === payload.id
            );

            if (productIndex >= 0) {
                const toastId = toast.loading("");
                state.cartProducts[productIndex].totalCart! += 1;
                toast.info("Ürün Miktarı Artırıldı", {
                    id: toastId,
                    duration: 1000,
                });
            } else {
                const now = moment();
                const orderDate = now.format("MM/DD/YY hh:mm a");

                const tempProduct = {
                    ...payload,
                    totalCart: 1,
                    orderDate: orderDate,
                };
                state.cartProducts.push(tempProduct);
                const toastId = toast.loading("");
                const capitalizedproductNameName =
                    payload.title.charAt(0).toUpperCase() +
                    payload.title.slice(1);
                toast.success(`${capitalizedproductNameName} sepete eklendi`, {
                    id: toastId,
                    duration: 1000,
                });
            }
        },
        cart_group_product: (
            state,
            { payload }: PayloadAction<ProductsType[]>
        ) => {
            const toastId = toast.loading("");
            payload.forEach((product) => {
                const productIndex = state.cartProducts.findIndex(
                    (item) => item.id === product.id
                );
                if (productIndex >= 0) {
                    state.cartProducts[productIndex].totalCart! += 1;
                    toast.info("Ürün Miktarı Artırıldı", {
                        id: toastId,
                        duration: 1000,
                    });
                } else {
                    const now = moment();
                    const orderDate = now.format("MM/DD/YY hh:mm a");

                    const tempProduct = {
                        ...product,
                        totalCart: 1,
                        orderDate: orderDate,
                    };
                    state.cartProducts.push(tempProduct);
                    const capitalizedProductName =
                        product.title.charAt(0).toUpperCase() +
                        product.title.slice(1);
                    toast.success(`${capitalizedProductName} sepete eklendi`, {
                        id: toastId,
                        duration: 1000,
                    });
                }
            });
        },
        remove_cart_product: (
            state,
            { payload }: PayloadAction<ProductsType>
        ) => {
            const toastId = toast.loading("");
            state.cartProducts = state.cartProducts.filter(
                (item) => item.id !== payload.id
            );
            toast.error(`Ürün sepetinizden kaldırıldı`, {
                id: toastId,
                duration: 1000,
            });
        },
        clear_cart: (state) => {
            const confirmMsg = window.confirm(
                "Tüm sepet öğelerinizi silmek istediğinizden emin misiniz?"
            );
            if (confirmMsg) {
                state.cartProducts = [];
            }
        },
        decrease_quantity: (
            state,
            { payload }: PayloadAction<ProductsType>
        ) => {
            const cartIndex = state.cartProducts.findIndex(
                (item) => item.id === payload.id
            );

            if (cartIndex >= 0) {
                const totalCart = state.cartProducts[cartIndex]?.totalCart ?? 0;

                if (totalCart > 1) {
                    const toastId = toast.loading("");
                    state.cartProducts[cartIndex].totalCart = totalCart - 1;
                    toast.success("Miktar Azaltıldı", {
                        id: toastId,
                        duration: 1000,
                    });
                } else {
                    const toastId = toast.loading("");
                    toast.error(`Miktar 1'den az olamaz`, {
                        id: toastId,
                        duration: 1000,
                    });
                }
            }
        },
    },
});

export const {
    cart_product,
    cart_group_product,
    remove_cart_product,
    clear_cart,
    decrease_quantity,
} = cartSlice.actions;

export default cartSlice.reducer;
