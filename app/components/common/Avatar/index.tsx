import React from "react";
import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      alt="avatar"
      className="hidden md:block cursor-pointer rounded-full"
      height="30"
      width="30"
      src="/images/avatar_user.jpg"
    />
  );
};

export default Avatar;
