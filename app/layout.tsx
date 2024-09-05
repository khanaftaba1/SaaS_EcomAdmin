import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

// These styles apply to every route in the application
import "./globals.css";
import { ModalProvider } from "@/providers/modal-provider";

export const metadata: Metadata = {
  title: "Admin Board",
  description: "Admin Board",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
