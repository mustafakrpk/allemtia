import React from "react";
import BreadCrumb from "../SharedComponents/BreadCrumb";
import FaqContent from "./FaqContent";
import FaqFormMain from "./FaqFormMain";
import SidebarMain from "../SharedComponents/Sidebars/SidebarMain";

const FaqMain = () => {
  return (
    <>
      <BreadCrumb title="SSS" />
      <FaqContent />
      <FaqFormMain />
      <SidebarMain/>
    </>
  );
};

export default FaqMain;
