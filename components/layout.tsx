import React from "react";
import NavBar from "./nav-bar";

function Layout({children, ...props}:React.HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      <div className="md:hidden"></div>
      <div className="hidden flex-col md:flex h-screen">
        <NavBar />
        <div className="flex-1 space-y-4 p-6 pt-3 h-[calc(100%-5rem)]">
            {children}
        </div>
      </div>
    </>
  );
}

export default Layout;
