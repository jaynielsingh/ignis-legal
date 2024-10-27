import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Ignis Legal",
  description:
    "Web design company for legal professionals.  Specializing in modern, responsive websites that showcase your skills and attract potential clients. Serving local and international clients. Hayward, San Jose, San Francisco, Fremont, Bay Area, Tracy, Livermore, Stockton, Sacramento, All of California.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} h-full`}>
      <body className="h-full">{children}</body>
    </html>
  );
}
