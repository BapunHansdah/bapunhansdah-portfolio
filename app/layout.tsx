import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bapun Hansdah — Developer, Designer, Builder",
  description:
    "Full-stack developer who went from design and motion graphics to reverse engineering and building startups. Currently building cool things and helping startups with AI automation.",
    generator: 'Next.js',
  icons: {
    icon: {
      url: "/unnamed.jpg",
    },
  }
}

export const viewport = {
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
