import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "SpringDjango Studios | Build custom websites",
  description: "professional websites tailored to your needs—fast, reliable, and at an unbeatable price. Choose your tech stack—Django, Java, or anything else ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=""
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
