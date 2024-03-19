import { Lock, Play } from "lucide-react";
import React, { useState } from "react";

export default function CourseContentSection({ courseInfo }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="p-3 bg-white rounded-sm">
      <h2>Content</h2>
      {courseInfo?.chapter?.map((chapter, index) => (
        <div key={chapter.id}>
          <h2
            className={`p-2 text-[14px] flex justify-between items-center 
          border rounded-sm px-4 cursor-pointer mt-2
           hover:bg-gray-300 hover:text-gray-500
           ${activeIndex == index && "bg-primary text-white"}`}
          >
            {index + 1}. {chapter.name}
            {activeIndex == index ? (
              <Play className="h-4 w-4" />
            ) : (
              <Lock className="h-4 w-4" />
            )}
          </h2>
        </div>
      ))}
    </div>
  );
}
