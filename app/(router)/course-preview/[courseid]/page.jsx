"use client";

import { Video } from "lucide-react";
import React, { useEffect, useState } from "react";
import CourseVideoDescription from "./_components/CourseVideoDescription.jsx";
import GlobalApi from "@/app/_utils/GlobalApi.js";
import CourseEnrollSection from "./_components/CourseEnrollSection.jsx";
import CourseContentSection from "./_components/CourseContentSection.jsx";

export default function CoursePreview({ params }) {
  const [courseInfo, setCourseInfo] = useState();

  useEffect(() => {
    params && getCourseInfoById();
  }, [params]);

  const getCourseInfoById = () => {
    GlobalApi.getCourseById(params?.courseid).then((resp) => {
      setCourseInfo(resp?.courseList);
    });
  };

  return (
    <div className="grid  grid-cols-1 md:grid-cols-3 p-5 gap-3">
      {/* left side */}
      <section className="col-span-2 bg-white p-3 rounded-xl">
        <CourseVideoDescription courseInfo={courseInfo} />
      </section>
      {/* right side */}
      <section>
        <CourseEnrollSection />
        <CourseContentSection courseInfo={courseInfo} />
      </section>
    </div>
  );
}
