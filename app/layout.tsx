import "./globals.scss";
import styles from "./layout.module.scss";
import { ReactNode } from "react";
import { Bacasime_Antique } from "next/font/google";
import Link from "next/link";
import Footer from "@/components/Footer/footer";

const bacasime = Bacasime_Antique({
  weight: "400",
  subsets: ['latin']
})

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className={bacasime.className}>
      <head></head>
      <body className={styles.body}>
        <header>
          <Link href="/">
            <h1>The Cantrip Café</h1>
          </Link>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default Layout;