import { Rubik } from "next/font/google";
import "./globals.css"

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={rubik.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
