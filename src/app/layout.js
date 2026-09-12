import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Loader from "@/components/Loader";

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://ankushmaurya.vercel.app"),
  title: "Ankush Maurya | Full Stack Developer Lucknow",
  description:
    "Ankush Maurya – Full Stack Developer from Lucknow specializing in MERN stack, Next.js & scalable backend systems. View live projects and hire for freelance work.",
  keywords: [
    "Ankush Maurya",
    "Ankush Maurya Portfolio",
    "Ankush Maurya Lucknow",
    "Ankush Maurya Full Stack Developer Lucknow",
    "Full Stack Developer Lucknow",
    "MERN Stack Developer India",
    "Next.js Developer Portfolio",
    "Freelance Web Developer Lucknow",
    "React Developer for Hire",
    "Backend Developer Node.js Express",
    "MongoDB Developer India",
    "TypeScript Full Stack Developer",
    "Hospital Website Development",
    "AI Fashion Model Generator App",
    "Responsive Web Design Developer",
    "Scalable Backend Systems Developer",
  ],
  alternates: {
    canonical: "https://ankushmaurya.vercel.app",
  },
  openGraph: {
    title: "Ankush Maurya | Full Stack Developer Lucknow",
    description:
      "Ankush Maurya – Full Stack Developer from Lucknow specializing in MERN stack, Next.js & scalable backend systems. View live projects and hire for freelance work.",
    url: "https://ankushmaurya.vercel.app",
    siteName: "Ankush Maurya Portfolio",
    images: [
      {
        url: "/Mylogo.png",
        width: 1200,
        height: 630,
        alt: "Ankush Maurya – Full Stack Developer Lucknow",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: "/icon-192x192.png",
    apple: "/apple-icon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Ankush Maurya | Full Stack Developer",
  },
  formatDetection: {
    telephone: false,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankush Maurya | Full Stack Developer Lucknow",
    description:
      "Ankush Maurya – Full Stack Developer from Lucknow specializing in MERN stack, Next.js & scalable backend systems. View live projects and hire for freelance work.",
    images: ["/Mylogo.png"],
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://ankushmaurya.vercel.app/#person",
      name: "Ankush Maurya",
      url: "https://ankushmaurya.vercel.app",
      image: "https://ankushmaurya.vercel.app/me.jpeg",
      jobTitle: "Full Stack Developer",
      description:
        "Full Stack Developer from Lucknow, India, specializing in MERN stack, Next.js, and scalable backend systems. Available for freelance web development projects.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.linkedin.com/in/mauryaankush",
        "https://github.com/aankushmaurya",
        "https://www.instagram.com/mr.unstopable0/",
      ],
      knowsAbout: [
        "Next.js",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TypeScript",
        "MERN Stack",
        "Full Stack Development",
        "Freelance Web Development",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "BN College of Engineering & Technology",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lucknow",
          addressCountry: "IN",
        },
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://ankushmaurya.vercel.app/#website",
      url: "https://ankushmaurya.vercel.app",
      name: "Ankush Maurya – Full Stack Developer Portfolio",
      description:
        "Portfolio of Ankush Maurya, Full Stack Developer from Lucknow specializing in MERN stack, Next.js & scalable backend systems.",
      publisher: {
        "@id": "https://ankushmaurya.vercel.app/#person",
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Loader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
