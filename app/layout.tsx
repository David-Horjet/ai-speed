import "./globals.css"
import type { Metadata } from "next"
import { Inter, Rubik_Glitch } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const glitch = Rubik_Glitch({ subsets: ["latin"], weight: "400", variable: "--font-glitch" })

export const metadata: Metadata = {
  title: "HUMAN INSIGHT × AI SPEED",
  description: "Achieve unmatched velocity in your workflow without ever compromising on strategic quality.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${glitch.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
