import Image from "next/image.js";
import React from "react";

export default function VideoPlayer({ url }) {
  return (
    <div>
      <Image height={250} width={1000} alt="course banner" src={url} />
    </div>
  );
}
