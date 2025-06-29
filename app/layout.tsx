import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kendriya Vidyalaya Sangathan - Excellence in Education Since 1963",
  description:
    "Official website of Kendriya Vidyalaya Sangathan (KVS), providing quality education to children of transferable central government employees across India.",
  keywords: "Kendriya Vidyalaya, KVS, CBSE, Education, Schools, India, Government Schools",
  authors: [{ name: "Kendriya Vidyalaya Sangathan" }],
  creator: "Kendriya Vidyalaya Sangathan",
  publisher: "Ministry of Education, Government of India",
  robots: "index, follow",
  openGraph: {
    title: "Kendriya Vidyalaya Sangathan - Excellence in Education",
    description: "Quality education for children of transferable central government employees across India",
    url: "https://kvsangathan.nic.in",
    siteName: "Kendriya Vidyalaya Sangathan",
    images: [
      {
        url: "/kvs-logo-clean.png",
        width: 1200,
        height: 630,
        alt: "Kendriya Vidyalaya Sangathan Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kendriya Vidyalaya Sangathan",
    description: "Excellence in Education Since 1963",
    images: ["/kvs-logo-clean.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
