import type { Metadata } from "next";
import "./globals.css";
import "@/styles/main.scss";
import ClientLayout from "./client-layout";

export const metadata: Metadata = {
  title: "Cine Vault",
  description: "Your personal movie vault",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
