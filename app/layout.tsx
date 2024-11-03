import type { Metadata } from "next";
import "./globals.css";
import PageContextProvider from "@/context/PageContext";
import ViewModeContextProvider from "@/context/ViewModeContext";
export const metadata: Metadata = {
  title: "Carey Cole Garcia • Freelancer",
  description:
    "Carey Cole Garcia is a skilled full-stack web developer specializing in modern, responsive web applications. Discover projects and solutions focused on front-end and back-end development to create seamless digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-dennis`}>
        <PageContextProvider>
          <ViewModeContextProvider>{children}</ViewModeContextProvider>
        </PageContextProvider>
      </body>
    </html>
  );
}
