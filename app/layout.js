"use client"

import { usePathname } from "next/navigation";
import "./globals.css";
import Menu from "@/app/components/Menu"
import UserProvider from "./contexts/UserProvider";
import CartProvider from "./contexts/CartProvider";

export default function RootLayout({ children }) {
  const pathName = usePathname()//  /login / /profile
  return (
    <html lang="en">
      <body className="">
        <UserProvider>
          <CartProvider>
            {pathName != "/login" ? <Menu /> : null}
            {children}
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
