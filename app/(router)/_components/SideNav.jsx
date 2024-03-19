"use client";
import {
  BadgeIcon,
  BookOpen,
  GraduationCap,
  LayoutGrid,
  Mail,
} from "lucide-react";
import Image from "next/image.js";
import Link from "next/link.js";
import { usePathname } from "next/navigation.js";
import React, { useEffect } from "react";

export default function SideNav() {
  const menu = [
    {
      id: 1,
      name: "All Courses",
      icon: BookOpen,
      path: "/courses",
    },
    {
      id: 2,
      name: "Membership",
      icon: BadgeIcon,
      path: "/membership",
    },
    {
      id: 3,
      name: "Be an Instructor",
      icon: GraduationCap,
      path: "/instructor",
    },
    {
      id: 4,
      name: "Newsletter",
      icon: Mail,
      path: "/newsletter",
    },
    {
      id: 5,
      name: "Store",
      icon: LayoutGrid,
      path: "/store",
    },
  ];

  const usePath = usePathname();
  useEffect(() => {
    console.log("path", usePath);
  }, []);

  return (
    <div className="flex flex-col items-center bg-white shadow-sm border h-screen p-5 hidden sm:block ">
      <Link href={"/"} className="shadow-sm cursor-pointer">
        <Image src="/logo.png" alt="logo" width={80} height={80} />
      </Link>

      <hr className="mt-7"></hr>
      {/* menu List */}
      <div className="mt-6">
        {menu.map((item) => (
          <Link href={item.path} key={item.id}>
            <div
              className={`group flex gap-3 mt-1 p-3 text-[20px] 
            items-center text-gray-500 cursor-pointer 
            hover:bg-gray-200 hover:text-gray-900 
            rounded-md transition-all ease-in-out duration-200
            ${usePath.includes(item.path) && "bg-primary text-white"}`}
            >
              <item.icon className="group-hover:animate-bounce" />
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
