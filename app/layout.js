import "../styles/globals.css";
import Navigation from "../components/Navigation.jsx";
import { Space_Grotesk } from "@next/font/google";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js"
};

const font = Space_Grotesk({ weight: ["400", "700"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My first app with Next 13</title>
      </head>
      <body className={font.className}>
        <header>
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  );
}
