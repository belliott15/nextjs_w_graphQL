import Image from "next/image.js";
import React from "react";

export default function CourseItem({ course }) {
  return (
    <div className=" border rounded-xl hover:shadow-sm hover:shadow-yellow-400 cursor-pointer pb-2">
      <Image
        src={course?.banner.url}
        alt={`${course.name} banner`}
        width={500}
        height={150}
        className="rounded-t-xl"
      />
      {course.chapter.length == 0 ? (
        <div>
          <h2 className="font-medium">{course.name}</h2>
          <h2 className="text-[12px] text-gray-400">{course.author}</h2>
          <div className="flex gap-2 mt-2">
            <Image src="/youtube.png" alt="youtube" height={5} width={20} />
            <h4 className="text-gray-400 text-[12px]">Watch on Youtube</h4>
            {course.free ? (
              <p className="text-[12px] text-primary transform -rotate-45">
                Free
              </p>
            ) : (
              <p className="text-[12px] text-blue-500 transform -rotate-45">
                Paid
              </p>
            )}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="font-medium">{course.name}</h2>
          <h2 className="text-[12px] text-gray-400">{course.author}</h2>
          <div className="flex gap-2 mt-2">
            <Image src="/favicon.png" alt="Chapter" height={20} width={20} />
            <h4 className="text-gray-400 text-[12px]">Chapter</h4>
            {course.free ? (
              <p className="text-[12px] text-primary transform -rotate-45">
                Free
              </p>
            ) : (
              <p className="text-[12px] text-blue-600 transform -rotate-45">
                Paid
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
