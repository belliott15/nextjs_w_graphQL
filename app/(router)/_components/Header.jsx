import { Button } from "@/components/ui/button.jsx";
import { BellDot, Search } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <div className="p-4 bg-white flex justify-between">
      <div className="flex gap-2 border rounded p-2">
        <Search className="h-5, w-5" />
        <input type="text" placeholder="search" className=" outline-none" />
      </div>
      {/* get started button / signout button */}
      <div className="flex item-center gap-4">
        <BellDot className="text-gray-500" />
        <Button>Get Started</Button>
      </div>
    </div>
  );
}
