import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Roboto } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "MyBank",
  description: "A professional banking app",
};

const roboto = Roboto({
  weight: ["400", "300", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Navbar />
        <div className="main_body">
          <Sidebar />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
