"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

function Header() {
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="flex items-center justify-between p-4 bg-secondary shadow-md">
      <Image src="/logo1.svg" width={160} height={100} alt="logo1" />

      <ul className="flex gap-6 items-center text-lg">
        <li className="hover:text-primary hover:font-bold transition-all cursor-pointer">Dashboard</li>
        <li className="hover:text-primary hover:font-bold transition-all cursor-pointer">Questions</li>
        <li className="hover:text-primary hover:font-bold transition-all cursor-pointer">Upgrade</li>
        <li className="hover:text-primary hover:font-bold transition-all cursor-pointer">How it works</li>
       
      </ul>

      <UserButton />
    </div>
  );
}

export default Header;

