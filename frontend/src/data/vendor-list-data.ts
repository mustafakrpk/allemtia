import { vendorType } from "@/interFace/interFace";
import brand1 from "../../public/assets/img/vendor/Logo/TrendyThreads.png";
import brand2 from "../../public/assets/img/vendor/Logo/ChicWardrobe.png";
import brand3 from "../../public/assets/img/vendor/Logo/StyleHub.png";
import brand4 from "../../public/assets/img/vendor/Logo/FashionFusion.png";

// vendor data

import vendor1 from "../../public/assets/img/vendor/banner/1.png";
import vendor2 from "../../public/assets/img/vendor/banner/2.png";
import vendor3 from "../../public/assets/img/vendor/banner/3.png";
import vendor4 from "../../public/assets/img/vendor/banner/4.png";

export const vendor_data: vendorType[] = [
    {
        id: 1,
        vendor: "TrendyThreads",
        verified: true,
        vendorStatus: "Top Seller",
        Items: 150,
        Sells: 200,
        vendorId: "v-00001",
        description:
            "Welcome to TrendyThreads, where fashion meets comfort! Dive into our collection of the latest trends in clothing, offering an eclectic mix of styles for every occasion. From casual tees to elegant dresses, we curate pieces that exude confidence and style. Explore our virtual shelves and discover your next wardrobe staple!",
        averageRating: 80,
        totalRating: 320,
        vendorImg: brand1,
        vendorBanner: vendor1,
    },
    {
        id: 2,
        vendor: "ChicWardrobe",
        verified: true,
        vendorStatus: "Best Seller",
        Items: 89,
        Sells: 430,
        vendorId: "v-00002",
        description:
            "Indulge in the epitome of sophistication at ChicWardrobe, your go-to destination for timeless elegance. Immerse yourself in our meticulously curated selection of apparel, meticulously crafted to elevate your style game. Whether you're searching for a classic shirt or a statement piece, our collection promises to infuse your wardrobe with chic flair and effortless grace.",
        averageRating: 2,
        totalRating: 170,
        vendorImg: brand2,
        vendorBanner: vendor2,
    },
    {
        id: 3,
        vendor: "StyleHub",
        verified: false,
        vendorStatus: "Level 2 Seller",
        Items: 50,
        Sells: 140,
        vendorId: "v-00003",
        description:
            "Welcome to StyleHub, where individuality reigns supreme! Our diverse range of fashion-forward garments celebrates the uniqueness of every style enthusiast. From cutting-edge streetwear to sophisticated ensembles, we offer a curated selection that empowers you to express your personality with confidence. Step into our StyleHub and unleash your fashion potential.",
        averageRating: 3,
        totalRating: 256,
        vendorImg: brand3,
        vendorBanner: vendor3,
    },
    {
        id: 4,
        vendor: "FashionFusion",
        verified: true,
        vendorStatus: "Featured Seller",
        Items: 150,
        Sells: 200,
        vendorId: "v-00004",
        description:
            "Embark on a journey of style evolution with FashionFusion, your ultimate destination for sartorial innovation. Our collection seamlessly blends contemporary trends with timeless classics, resulting in a fusion of fashion that is both modern and enduring. Discover the perfect synthesis of style and substance as you explore our eclectic array of garments, designed to inspire and captivate",
        averageRating: 5,
        totalRating: 26,
        vendorImg: brand4,
        vendorBanner: vendor4,
    },
];
