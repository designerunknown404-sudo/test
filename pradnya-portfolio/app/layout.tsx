import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Pradnya Patil - Software Developer | UI/UX Designer | Full Stack Developer",
  description:
    "Professional portfolio of Pradnya Patil - MCA student and B.Sc IT graduate, specializing in Java, Python, SQL, UI/UX Design, and Full Stack Development.",
  keywords:
    "Pradnya Patil, Software Developer, UI/UX Designer, Full Stack Developer, Java, Python, Flutter, Web Development",
  authors: [{ name: "Pradnya Patil" }],
  creator: "Pradnya Patil",
  openGraph: {
    title: "Pradnya Patil - Software Developer | UI/UX Designer",
    description: "Crafting clean code, intuitive designs, and impactful digital solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pradnya Patil - Software Developer | UI/UX Designer",
    description: "Crafting clean code, intuitive designs, and impactful digital solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
