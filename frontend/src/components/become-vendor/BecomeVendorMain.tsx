import React from 'react';
import WhySellSec from './WhySellSec';
import SellingSteps from './SellingSteps';
import SellingTutoriyal from './SellingTutoriyal';
import VendorFaq from './VendorFaq';
import BreadCrumb from '../SharedComponents/BreadCrumb';
import SidebarMain from '../SharedComponents/Sidebars/SidebarMain';

const BecomeVendorMain = () => {
    return (
        <>  <BreadCrumb title='Satıcı Olun'/>
            <WhySellSec/>
            <SellingSteps/>
            <SellingTutoriyal/>
            <VendorFaq/>
            <SidebarMain/>
        </>
    );
};

export default BecomeVendorMain;