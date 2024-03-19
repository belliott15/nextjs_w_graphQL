import { Button } from "@/components/ui/button.jsx";
import React from "react";

export default function CourseEnrollSection() {
  const membership = true;

  return (
    <div className="p-3 text-center rounded-sm bg-primary">
      {/* conditional on user membership */}
      {membership ? (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-[22px] font-bold text-white">
            Enroll in the course
          </h2>
          <h2 className="font-light text-[16px]">
            Enroll now to start learning
          </h2>
          <Button className="bg-white rounded-lg text-primary hover:bg-white hover:text-black">
            Enroll Now
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-[22px] font-bold text-white">
            Start your membership today
          </h2>
          <h2 className="font-light text-[16px]">
            Learn anything with our monthly membership package starting at $4.99
          </h2>
          <Button className="bg-white rounded-lg text-primary hover:bg-white hover:text-black ">
            Buy Membership
          </Button>
        </div>
      )}
    </div>
  );
}
