import GlobalApi from "@/app/_utils/GlobalApi.js";
import React, { useEffect } from "react";
import VideoPlayer from "./VideoPlayer.jsx";
import Markdown from "react-markdown";

export default function CourseVideoDescription({ courseInfo }) {
  return (
    courseInfo && (
      <div>
        <h2 className="font-semibold text-[20px]">{courseInfo?.name}</h2>
        <h2 className="text-gray-500 text-[14px] mb-3">{courseInfo?.author}</h2>
        {/* video player */}
        <VideoPlayer url={courseInfo.banner.url} />
        {/* description of course */}
        <p className="mt-5 text-[17px] font-semibold">About this course:</p>
        <div>
          <Markdown className="text-[12px] font-light mt-2 leading-6">
            {courseInfo.description}
          </Markdown>
        </div>
      </div>
    )
  );
}
