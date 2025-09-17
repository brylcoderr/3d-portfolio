import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import FloatingTechBackground from "@/components/floating-tech-background"
import { PerformanceProvider, PerformanceToggle } from "@/components/performance-manager"
import "./globals.css"

export const metadata: Metadata = {
  title: "Full Stack Developer Portfolio | 5+ Years Experience",
  description:
    "Professional Full Stack Developer with over 5 years of experience in designing, developing, and deploying dynamic web solutions. Specializing in modern web technologies, APIs, and scalable applications.",
  generator: "v0.app",
  keywords: "Full Stack Developer, Web Development, React, Node.js, APIs, Database Design, Frontend, Backend",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="cupcake" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'cupcake';
                  document.documentElement.setAttribute('data-theme', theme);
                  console.log('[v0] Theme initialized:', theme);
                } catch (e) {
                  console.log('[v0] Theme initialization failed:', e);
                  document.documentElement.setAttribute('data-theme', 'cupcake');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        <PerformanceProvider>
          <ThemeProvider attribute="data-theme" defaultTheme="cupcake" enableSystem={false}>
            <FloatingTechBackground />
            <div className="relative z-10">
              <Suspense fallback={null}>{children}</Suspense>
            </div>
            <PerformanceToggle />
            <Analytics />
          </ThemeProvider>
        </PerformanceProvider>
      </body>
    </html>
  )
}
