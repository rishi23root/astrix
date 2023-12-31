import Link from "next/link";
import React from "react";

export default function NavLinks() {
  return (
    <>
      <Link href={"#service"} className="text-violet-50">
        What we do
      </Link>
      <Link href={"#about"} className="text-violet-50">
        Who are we
      </Link>
      <Link
        href={"https://www.linkedin.com/company/astrixmarketing/"}
        target="_blank"
        className="text-violet-50"
      >
        Careers
      </Link>
    </>
  );
}
