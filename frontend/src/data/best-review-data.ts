import { UserReviewType } from "@/interFace/interFace";
import imgOne from "../../public/assets/img/testimonial/course-reviews-1.png";
import commentOne from "../../public/assets/img/testimonial/course-reviews-2.png";

export const bestReviewData: UserReviewType[] = [
    {
        id: "review-id-1",
        productName: "Organik Muz",
        review: "İnternetteki tüm jeneratörler, önceden tanımlanmış şablonları tekrar etmeye meyillidir, bu da insan yapımı pestisitler ve gübrelerle genetik olarak üretilmiş gerçek jeneratördür.",
        name: "İbrahim Yılmaz",
        img: imgOne,
        email: "ibrahim@gmail.com",
        date: "28/09/23 18:22",
        productId: "product-id-1",
        categoryName: "Taze Meyve ve Sebzeler",
        retting: 5,
    },
    {
        id: "review-id-2",
        productName: "Kach Kogozi Kabak",
        review: "İnternetteki tüm jeneratörler, önceden tanımlanmış şablonları tekrar etmeye meyillidir, bu da insan yapımı pestisitler ve gübrelerle genetik olarak üretilmiş gerçek jeneratördür.",
        name: "Sadık Demir",
        img: commentOne,
        email: "sadik@gmail.com",
        date: "11/09/23 13:32",
        productId: "product-id-2",
        categoryName: "Temel Gıda Ürünleri",
        retting: 5,
    },
    {
        id: "review-id-3",
        productName: "Çikolatalı Süt",
        review: "İnternetteki tüm jeneratörler, önceden tanımlanmış şablonları tekrar etmeye meyillidir, bu da insan yapımı pestisitler ve gübrelerle genetik olarak üretilmiş gerçek jeneratördür.",
        name: "Mehmet Taner",
        img: imgOne,
        email: "mehmet.taner@gmail.com",
        date: "06/09/23 15:36",
        productId: "product-id-13",
        categoryName: "İçecekler",
        retting: 5,
    },

    {
        id: "review-id-4",
        productName: "Organik Muz",
        review: "İnternetteki tüm jeneratörler, önceden tanımlanmış şablonları tekrar etmeye meyillidir, bu da insan yapımı pestisitler ve gübrelerle genetik olarak üretilmiş gerçek jeneratördür.",
        name: "Manuel Aksoy",
        img: commentOne,
        email: "manuel.aksoy@gmail.com",
        date: "28/09/23 18:38",
        productId: "product-id-1",
        categoryName: "Taze Meyve ve Sebzeler",
        retting: 2,
    },
];
