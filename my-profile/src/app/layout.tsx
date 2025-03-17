"use client";
import Header from "@/components/layout/Header";
import "@/styles/globals.css";
import { ReactNode } from "react";
import Sidebar from "@/components/layout/Sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />

      <html lang="en">
        <head>
          <title>My Profile</title> {/* เพิ่ม title ที่นี่ */}
        </head>

        <body className="flex flex-col h-screen"> {/* ใช้ flex-col เพื่อจัดทุกอย่างในแนวตั้ง */}
          <div className="flex flex-1"> {/* ใช้ flex และให้เนื้อหาหลักขยายตัว */}
            <Sidebar />
            <main className="flex-1 p-4"> {/* ใช้ flex-1 เพื่อให้ main ใช้พื้นที่ที่เหลือ */}
              {children}
            </main>
          </div>
        </body>
      </html>
    </>
  );
};

export default Layout;
