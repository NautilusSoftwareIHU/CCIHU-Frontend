import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
