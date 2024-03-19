import GlobalApi from "@/app/_utils/GlobalApi.js";
import Image from "next/image.js";
import React, { useEffect, useState } from "react";

export default function SideBanners() {
  const [sideBanners, setSideBanners] = useState();

  useEffect(() => {
    getSideBanners();
  });

  const getSideBanners = () => {
    GlobalApi.getSideBanner().then((resp) => {
      setSideBanners(resp.sideBanners);
    });
  };
  return (
    <>
      {sideBanners?.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl p-5 md:mx-2 md:mt-0 mt-2"
        >
          <h2 className="font-bold text-primary mb-2">Local offers</h2>
          <Image
            src={item.banner.url}
            alt="banner"
            width={500}
            height={300}
            onClick={() => window.open(item.url)}
            className="rounded-xl cursor-pointer"
          />
        </div>
      ))}
    </>
  );
}
