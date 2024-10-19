"use client"

import { usePathname } from "next/navigation";
import "./globals.css";
import Menu from "@/app/components/Menu"
import UserProvider from "./contexts/UserProvider";

export default function RootLayout({ children }) {
  const pathName = usePathname()//  /login / /profile
  return (
    <html lang="en">
      <body className="">
        <UserProvider>
          {pathName != "/login" ? <Menu /> : null}
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
