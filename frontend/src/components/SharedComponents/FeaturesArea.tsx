import PaymentIcon from "@/svg/PaymentIcon";
import ReturnIcon from "@/svg/ReturnIcon";
import ShipingIcon from "@/svg/ShipingIcon";
import SupportIcon from "@/svg/SupportIcon";
import React from "react";

const FeaturesArea = () => {
    return (
        <>
            <div className='features-area features-area1'>
                <div className='container'>
                    <div className='features-wrapper'>
                        <div className='row'>
                            <div className='col-lg-3 col-md-6 col-sm-6'>
                                <div className='features-single'>
                                    <div className='irc-item'>
                                        <div className='irc-item-icon'>
                                            <ShipingIcon />
                                        </div>
                                        <div className='irc-item-content'>
                                            <div className='irc-item-heading'>
                                                Ücretsiz Kargo
                                            </div>
                                            <p>10.000₺ Üzeri Tüm Siparişlerde</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-6'>
                                <div className='features-single'>
                                    <div className='irc-item'>
                                        <div className='irc-item-icon'>
                                            <ReturnIcon />
                                        </div>
                                        <div className='irc-item-content'>
                                            <div className='irc-item-heading'>
                                                Kolay İade
                                            </div>
                                            <p>30 Gün İade Politikası</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-6'>
                                <div className='features-single'>
                                    <div className='irc-item'>
                                        <div className='irc-item-icon'>
                                            <PaymentIcon />
                                        </div>
                                        <div className='irc-item-content'>
                                            <div className='irc-item-heading'>
                                                Güvenli Ödeme
                                            </div>
                                            <p>%100 Güvenli Alışveriş</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-6'>
                                <div className='features-single'>
                                    <div className='irc-item'>
                                        <div className='irc-item-icon'>
                                            <SupportIcon />
                                        </div>
                                        <div className='irc-item-content'>
                                            <div className='irc-item-heading'>
                                                Özel Destek
                                            </div>
                                            <p>7/24 Özel Destek Hattı</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hr1'></div>
                </div>
            </div>
        </>
    );
};

export default FeaturesArea;