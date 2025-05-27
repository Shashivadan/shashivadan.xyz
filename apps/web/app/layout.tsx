// import { Geist, Geist_Mono } from "next/font/google";

import localFont from "next/font/local";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";

const myFont = localFont({
  src: "./my-font.woff2",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` antialiased `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
