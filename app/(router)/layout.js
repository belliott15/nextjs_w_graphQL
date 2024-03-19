import React from "react";
import SideNav from "./_components/SideNav.jsx";
import Header from "./_components/Header.jsx";

function layout({ children }) {
  return (
    <div>
      <div className="fixed sm:w-64 sm:block">
        <SideNav />
      </div>
      <div className="sm:ml-64">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default layout;
