"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import HamburgerIcon from "@/components/hamburger-icon";
import { useState } from "react";
import NavLinks from "./nav-links";
import XIcon from "@/components/x-icon";

export default function NavHeaderMobile({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center text-zinc-100">
          <Image
            src={"/assets/images/logo.png"}
            alt={"logo"}
            width={55}
            height={55}
          />
          <h1>LearnFast</h1>
        </div>
        <div className="flex items-center gap-4 justify-between text-gray-300 flex-wrap">
          <Button onClick={() => setShowMenu(!showMenu)}>
            {!showMenu ? <HamburgerIcon /> : <XIcon width={45} height={45} />}
          </Button>
        </div>
      </div>
      {showMenu && (
        <div className="mb-5 mt-3 min-h-svh">
          <Separator className="bg-white" />
          {/* included the signout button as children so that it can operate as a server component */}
          {children}
          <div className="ml-5" onClick={() => setShowMenu(!showMenu)}>
            <NavLinks />
          </div>
        </div>
      )}
    </>
  );
}
