import React from "react";
import CategoryBanner from "./CategoryBanner";
import ProductArea from "./ProductArea";
import FeaturedProduct from "./FeaturedProduct";
import CategoryArea from "./CategoryArea";
import FeaturesArea from "../SharedComponents/FeaturesArea";
import SidebarMain from "../SharedComponents/Sidebars/SidebarMain";
import HeroBannerSec from "./HeroBannerSec";
import BannerArea from "../homeThree/BannerArea";
import Vendors from "../vendors-list/Vendors";
import BreadCrumb from "../SharedComponents/BreadCrumb";
const HomeMain = () => {
    return (
        <>
            <HeroBannerSec />
            <CategoryBanner />
            <Vendors />
            <FeaturedProduct />
            <ProductArea />
            <FeaturesArea />
            <CategoryArea />
            <BannerArea />
            <SidebarMain />
        </>
    );
};

export default HomeMain;
