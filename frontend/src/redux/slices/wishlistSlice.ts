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

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        wishlist_product: (state, { payload }: PayloadAction<ProductsType>) => {
            const productIndex = state.cartProducts.findIndex(
                (item) => item.id === payload.id
            );

            if (productIndex >= 0) {
                state.cartProducts[productIndex].totalCart! += 1;
                const toastId = toast.loading("");
                toast.info("Ürün istek listesi miktarı artırıldı", {
                    id: toastId,
                    duration: 1000,
                });
            } else {
                const now = moment();
                const orderDate = now.format("MM/DD/YY hh:mm a"); // Geçerli tarihi "MM/DD/YY hh:mm a" formatında biçimlendir

                const tempProduct = {
                    ...payload,
                    totalCart: 1,
                    orderDate: orderDate, // "orderDate" olarak biçimlendirilmiş tarihi ekle
                };

                state.cartProducts.push(tempProduct);
                const capitalizedCategoryName =
                    payload.title.charAt(0).toUpperCase() +
                    payload.title.slice(1);
                const toastId = toast.loading("");
                toast.success(
                    `${capitalizedCategoryName} istek listesine eklendi`,
                    {
                        id: toastId,
                        duration: 1000,
                    }
                );
            }
        },
        remove_wishlist_product: (
            state,
            { payload }: PayloadAction<ProductsType>
        ) => {
            state.cartProducts = state.cartProducts.filter(
                (item) => item.id !== payload.id
            );
            const toastId = toast.loading("");
            toast.error(`İstek listenizden kaldırıldı`, {
                id: toastId,
                duration: 1000,
            });
        },

        clear_wishlist: (state) => {
            const confirmMsg = window.confirm(
                "Tüm istek listesi öğelerinizi silmek istediğinizden emin misiniz?"
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
                    state.cartProducts[cartIndex].totalCart = totalCart - 1;
                    const toastId = toast.loading("");
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
    wishlist_product,
    remove_wishlist_product,
    clear_wishlist,
    decrease_quantity,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
