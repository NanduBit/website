import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kendriya Vidyalaya Sangathan | Excellence in Education Since 1963",
  description:
    "Kendriya Vidyalaya Sangathan - India's premier educational network providing quality CBSE education to 13+ lakh students across 1200+ schools nationwide. Committed to excellence in education and holistic development.",
  keywords: [
    "Kendriya Vidyalaya",
    "KVS",
    "CBSE School",
    "Central School",
    "Education India",
    "Government School",
    "Quality Education",
    "Admissions",
    "Academic Excellence",
  ],
  authors: [{ name: "Kendriya Vidyalaya Sangathan" }],
  creator: "Kendriya Vidyalaya Sangathan",
  publisher: "Ministry of Education, Government of India",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kvsangathan.nic.in",
    title: "Kendriya Vidyalaya Sangathan | Excellence in Education",
    description:
      "India's premier educational network providing quality CBSE education across 1200+ schools nationwide.",
    siteName: "Kendriya Vidyalaya Sangathan",
    images: [
      {
        url: "/kvs-logo-clean.png",
        width: 1200,
        height: 630,
        alt: "Kendriya Vidyalaya Sangathan Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kendriya Vidyalaya Sangathan | Excellence in Education",
    description:
      "India's premier educational network providing quality CBSE education across 1200+ schools nationwide.",
    images: ["/kvs-logo-clean.png"],
  },
  icons: {
    icon: [
      { url: "/kvs-logo-clean.png", sizes: "32x32", type: "image/png" },
      { url: "/kvs-logo-clean.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/kvs-logo-clean.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/kvs-logo-clean.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "education",
  classification: "Educational Institution",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="canonical" href="https://kvsangathan.nic.in" />
        <link rel="alternate" hrefLang="hi" href="https://kvsangathan.nic.in/hi" />
        <link rel="alternate" hrefLang="en" href="https://kvsangathan.nic.in" />
      </head>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" storageKey="kvs-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
