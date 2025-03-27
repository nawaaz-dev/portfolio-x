import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nawaaz Kortiwala | Portfolio",
  description:
    "Explore Nawaaz Kortiwala's portfolio, showcasing projects, skills, and professional experience.",
  applicationName: "Nawaaz Kortiwala Portfolio",
  authors: [{ name: "Nawaaz Kortiwala", url: "https://nawaaz.dev" }],
  keywords: [
    "Nawaaz Kortiwala",
    "Portfolio",
    "Web Developer",
    "Frontend Developer",
    "Projects",
    "Skills",
    "Experience",
  ],
  creator: "Nawaaz Kortiwala",
  publisher: "Nawaaz Kortiwala",
  themeColor: "#ffa500",
  colorScheme: "dark",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Nawaaz Kortiwala | Portfolio",
    description:
      "Explore Nawaaz Kortiwala's portfolio, showcasing projects, skills, and professional experience.",
    url: "https://nawaaz.dev",
    siteName: "Nawaaz Kortiwala Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dbjar1kvg/image/upload/v1743065357/akStVl81_400x400_mqfhct.jpg",
        width: 1200,
        height: 630,
        alt: "Nawaaz Kortiwala Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nawaaz Kortiwala | Portfolio",
    description:
      "Explore Nawaaz Kortiwala's portfolio, showcasing projects, skills, and professional experience.",
    site: "@nawaazkortiwala", // Replace with your Twitter handle
    creator: "@nawaazkortiwala", // Replace with your Twitter handle
    images: [
      "https://res.cloudinary.com/dbjar1kvg/image/upload/v1743065357/akStVl81_400x400_mqfhct.jpg",
    ],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://nawaaz.dev",
    languages: {
      "en-US": "https://nawaaz.dev",
    },
  },
  other: {
    "msapplication-TileColor": "#ffa500",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
