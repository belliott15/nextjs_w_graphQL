import Image from "next/image.js";
import React from "react";

export default function WelcomeBanner() {
  return (
    <div className="flex gap-5 items-center bg-white rounded-xl p-5">
      <Image
        src="/favicon.png"
        alt="Summit Skills Logo"
        height={100}
        width={100}
      />
      <div>
        <h2 className="font-bold text-[27px]">
          Welcome to
          <span className="text-primary"> Summit</span> Skills
        </h2>
        <h2 className="text-gray-500">
          Explore, Learn, and Build Skills to help in the great outdoors
        </h2>
      </div>
    </div>
  );
}
