"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Image from "next/image";
import NavLinks from "./navLinks";

export function HamburgerOnMobile() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        {/* burget icon */}
        <svg
          viewBox="0 0 50 50"
          width="28px"
          height="28px"
          fill="white"
        >
          <defs>
            <linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{
                  stopColor: "#d058b7",
                  stopOpacity: 1,
                }}
              />
              <stop
                offset="100%"
                style={{
                  stopColor: "#644898",
                  stopOpacity: 1,
                }}
              />
            </linearGradient>
          </defs>
          <path
            d="M5 8a2 2 0 1 0 0 4h40a2 2 0 1 0 0-4H5zm0 15a2 2 0 1 0 0 4h40a2 2 0 1 0 0-4H5zm0 15a2 2 0 1 0 0 4h40a2 2 0 1 0 0-4H5z"
            fill="url(#a)"
          />
        </svg>
      </SheetTrigger>
      <SheetContent className="bg-background fc text-violet-50 border-none border ">
        <SheetHeader className="text-start h-full flex items-start justify-center">
          <SheetTitle className="pb-4 text-violet-50">Links</SheetTitle>
          <SheetDescription
            className="flex flex-col gap-4 text-2xl underline text-start underline-offset-4 decoration-[#6255C2]"
            onClick={(_) => setOpen(false)}
          >
            <NavLinks />
          </SheetDescription>
        </SheetHeader>
        <Image
          src={"/astrix.jpg"}
          width={200}
          height={100}
          alt="logo"
          className="m-auto h-auto w-auto"
        />
      </SheetContent>
    </Sheet>
  );
}
