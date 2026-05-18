import "./globals.css";
import "lenis/dist/lenis.css";
import SmoothScroll from "@/components/SmoothScroll";

const siteUrl = "https://portfolio-y9sn.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Deepanshu Pal | MERN Stack Developer",
    template: "%s | Deepanshu Pal",
  },

  description:
    "Deepanshu Pal is a MERN Stack Developer skilled in React.js, Next.js, Node.js, Express.js, MySQL, MongoDB and Tailwind CSS. Explore projects, skills, education and contact details.",

  keywords: [
    "Deepanshu Pal",
    "Deepanshu Pal Portfolio",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Node.js Developer",
    "Web Developer India",
    "MySQL Developer",
    "MongoDB Developer",
    "Tailwind CSS Developer",
  ],

  authors: [{ name: "Deepanshu Pal" }],
  creator: "Deepanshu Pal",
  publisher: "Deepanshu Pal",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Deepanshu Pal | MERN Stack Developer",
    description:
      "Portfolio of Deepanshu Pal, a MERN Stack Developer skilled in React.js, Next.js, Node.js, Express.js, MySQL and MongoDB.",
    url: siteUrl,
    siteName: "Deepanshu Pal Portfolio",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Deepanshu Pal Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Deepanshu Pal | MERN Stack Developer",
    description:
      "Explore Deepanshu Pal's portfolio, projects, skills, education and contact details.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}