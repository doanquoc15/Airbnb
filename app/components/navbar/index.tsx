import React from "react";
import Container from "../Container";
import Logo from "../common/Logo";
import Search from "../common/Search";
import MenuUser from "../common/MenuUser";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <MenuUser />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
