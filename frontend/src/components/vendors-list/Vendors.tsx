import React from "react";
import SingleVendorCard from "./SingleVendorCard";
import { vendor_data } from "@/data/vendor-list-data";

const Vendors = () => {
    return (
        <>
            <section className='product-area pt-120 pb-120'>
                <div className='container container-small'>
                    <h2 className='section-main-title section-title text-center mb-50'>
                        Öne Çıkan Satıcılar
                    </h2>
                    <div className='row'>
                        {vendor_data?.map((item) => (
                            <div
                                key={item.id}
                                className='col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12'
                            >
                                <SingleVendorCard item={item} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='hr1 mt-60'></div>
            </section>
        </>
    );
};

export default Vendors;
