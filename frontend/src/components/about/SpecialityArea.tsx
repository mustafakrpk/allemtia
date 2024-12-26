import CottonAndFabricIcon from "@/svg/CottonAndFabricIcon";
import FreshAndComforIcon from "@/svg/FreshAndComforIcon";
import WestrenFashionIcon from "@/svg/WestrenFashionIcon";
import React from "react";

import thumb from "../../../public/assets/img/about/speciality-thumb.jpg";
import Image from "next/image";

const SpecialityArea = () => {
    return (
        <>
            <section className='speciality-area pt-90'>
                <div className='container container-small'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <div className='speciality-content mb-30'>
                                <div className='section-title'>
                                    <h2 className='section-main-title mb-45'>
                                        Toplumda moda devrimini getirdik
                                    </h2>
                                </div>
                                <div className='speciality-points'>
                                    <div className='speciality-point-single'>
                                        <div className='irc-item'>
                                            <div className='irc-item-icon'>
                                                <WestrenFashionIcon />
                                            </div>
                                            <div className='irc-item-content'>
                                                <div className='irc-item-heading'>
                                                    Batı Modası
                                                </div>
                                                <p>
                                                    Bilgisayar ekranı önünde
                                                    değilken ya da elinde croix
                                                    şarabı ile bir aynanın
                                                    önünde olmadığında
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='speciality-point-single'>
                                        <div className='irc-item'>
                                            <div className='irc-item-icon'>
                                                <FreshAndComforIcon />
                                            </div>
                                            <div className='irc-item-content'>
                                                <div className='irc-item-heading'>
                                                    Taze & Rahat
                                                </div>
                                                <p>
                                                    Bilgisayar ekranı önünde
                                                    değilken ya da elinde croix
                                                    şarabı ile bir aynanın
                                                    önünde olmadığında
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='speciality-point-single'>
                                        <div className='irc-item'>
                                            <div className='irc-item-icon'>
                                                <CottonAndFabricIcon />
                                            </div>
                                            <div className='irc-item-content'>
                                                <div className='irc-item-heading'>
                                                    Pamuk & Kumaş
                                                </div>
                                                <p>
                                                    Bilgisayar ekranı önünde
                                                    değilken ya da elinde croix
                                                    şarabı ile bir aynanın
                                                    önünde olmadığında
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='speciality-thumb mb-30'>
                                <Image
                                    style={{ width: "100%", height: "auto" }}
                                    src={thumb}
                                    alt='img'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SpecialityArea;
