import React, { PropsWithChildren } from "react";
import { SideNavBar } from "app/navigation/navbar"


const Layout = ({ children }: PropsWithChildren) => {

  return (
    <>
      <SideNavBar />
      {children}
    </>
  );
};
export default Layout;