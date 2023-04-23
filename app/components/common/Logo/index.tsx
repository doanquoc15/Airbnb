"use client";

import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      alt="logo"
      className="hidden md:block cursor-pointer"
      height="70"
      width="70"
      src="/images/logo.png"
    />
  );
};

export default Logo;
