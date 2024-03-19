"use client";
import React from "react";
import WelcomeBanner from "./_components/WelcomeBanner.jsx";
import CourseList from "./_components/CourseList.jsx";
import SideBanners from "./_components/SideBanners.jsx";

function Courses() {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-1 p-5">
      {/* left container */}
      <div className="col-span-3">
        <WelcomeBanner />
        {/* course List section */}
        <CourseList />
      </div>
      {/* right container */}
      <SideBanners />
    </div>
  );
}

export default Courses;
