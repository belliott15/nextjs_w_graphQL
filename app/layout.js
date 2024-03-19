import { Inter, Noto_Serif_Khojki } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Noto_Serif_Khojki({ subsets: ["latin"] });

export const metadata = {
  title: "Summit Skills",
  description: "Keep your outdoor skills sharper.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
