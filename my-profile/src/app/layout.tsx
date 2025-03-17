// src/app/layout.tsx
'use client';

import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* Root Layout Tags */}
      <html lang="en">
        <body>
          <header>
            <h1>My Profile</h1>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </>
  );
};

export default Layout;
