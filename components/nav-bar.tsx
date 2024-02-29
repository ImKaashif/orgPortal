import React from "react";
import { MainNav } from "./main-nav";
import { UserNav } from "./user-nav";

function NavBar() {
  return (
    <div className="border-b sticky top-0 left-0 z-10">
      <div className="flex h-12 2xl:h-16 items-center justify-between px-4">
        <MainNav className="mx-6" />
        {/* <div className="ml-auto flex items-center space-x-4">
          <Search /> */}
          <UserNav />
        {/* </div> */}
      </div>
    </div>
  );
}

export default NavBar;
