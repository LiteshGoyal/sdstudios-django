import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Hotel Management system",
  description: "Hotel management system build using nextjs and django",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=""
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
