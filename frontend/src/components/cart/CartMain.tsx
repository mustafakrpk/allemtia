import React from 'react';
import SidebarMain from '../SharedComponents/Sidebars/SidebarMain';
import BreadCrumb from '../SharedComponents/BreadCrumb';
import CartArea from './CartArea';

const CartMain = () => {
    return (
        <>
            <BreadCrumb title='Sepet'/>
            <CartArea/>
            <SidebarMain/>
        </>
    );
};

export default CartMain;