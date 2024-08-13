'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from 'next/link';

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href="/home">
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>
        <HoveredLink href="/project">
          <MenuItem setActive={setActive} active={active} item="Project" />
        </HoveredLink>
        <Link href="/experience">
          <MenuItem setActive={setActive} active={active} item="Experience" />
        </Link>
        <Link href="/contact">
          <MenuItem setActive={setActive} active={active} item="Contact" />
        </Link>
        <Link href="/about">
          <MenuItem setActive={setActive} active={active} item="About" />
        </Link>
      </Menu>  
    </div>
  )
}

export default Navbar