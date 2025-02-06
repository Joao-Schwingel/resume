import "./globals.css"
import type { Metadata } from "next"
import type React from "react" // Import React

export const metadata: Metadata = {
  title: "JoaoSchwingel - Full Stack Developer",
  description:
    "Portfolio of John Doe, a senior full stack developer specializing in React, Node.js, and cloud technologies."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

