import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "react-hot-toast"
import CustomCursor from "@/components/custom-cursor"
import LoadingBar from "@/components/loading-bar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Raja Kumar - Full Stack Developer",
  description:
    "Final year CS student passionate about building digital experiences. Specializing in web development, mobile apps, and machine learning.",
  keywords: ["developer", "computer science", "web development", "react", "nextjs"],
  authors: [{ name: "Raja Kumar" }],
  openGraph: {
    title: "Raja Kumar - Full Stack Developer",
    description: "Final year CS student passionate about building digital experiences.",
    type: "website",
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
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LoadingBar />
          <CustomCursor />
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "rgba(17, 24, 39, 0.8)",
                color: "#fff",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(139, 92, 246, 0.3)",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
