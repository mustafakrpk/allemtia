import React from 'react';
import BreadCrumb from '../SharedComponents/BreadCrumb';
import WishlistArea from './WishlistArea';
import SidebarMain from '../SharedComponents/Sidebars/SidebarMain';

const WishlistMain = () => {
    return (
        <>
            <BreadCrumb title='İstek Listesi'/>
            <WishlistArea/>
            <SidebarMain/>
        </>
    );
};

export default WishlistMain;