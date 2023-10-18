import Link from "next/link";
import React from "react";

export default function NavLinks() {
  return (
    <>
      <Link target="_blank"href={"#service"} className="text-violet-50">
        What we do
      </Link>
      <Link target="_blank"href={"#about"} className="text-violet-50">
        Who are we
      </Link>
      <Link target="_blank"href={"#pricing"} className="text-violet-50">
        Careers
      </Link>
    </>
  );
}
