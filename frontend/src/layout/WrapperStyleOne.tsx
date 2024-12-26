//@refresh
"use client";
import React, { useEffect } from "react";
import { animationCreate } from "@/utils/utils";
import BacktoTop from "@/components/common/backToTop/BacktoTop";
import HeaderOne from "./header/HeaderOne";
import FooterOne from "./footer/FooterOne";
import FooterTwo from "./footer/FooterTwo";
import HeaderTwo from "./header/HeaderTwo";
import HeaderThree from "./header/HeaderThree";
import HeaderFour from "./header/HeaderFour";
if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
}

interface WrapperProps {
    children: React.ReactNode;
}

const WrapperStyleOne: React.FC<WrapperProps> = ({ children }) => {
    useEffect(() => {
        setTimeout(() => {
            animationCreate();
        }, 200);
    }, []);

    return (
        <>
            <BacktoTop />
            <HeaderThree />
            {children}
            {/* <FooterOne/> */}
            <FooterTwo />
        </>
    );
};

export default WrapperStyleOne;
