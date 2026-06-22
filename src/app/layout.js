import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://ankushmaurya.vercel.app"), // Use your actual domain here if different
  title: "Ankush Maurya | Portfolio",
  description: "Portfolio of Ankush Maurya, BNCET, Lucknow.",
  keywords: [
    "Ankush Maurya",
    "Ankush Maurya Portfolio",
    "Ankush Maurya BNCET",
    "Ankush Maurya LUCKNOW",
    "Ankush Maurya BNCET LUCKNOW",
    "BNCET",
    "LUCKNOW",
    "BNCET, LUCKNOW",
    "BNCET Lucknow Ankush Maurya",
    "Ankush Maurya BNCET student",
    "Ankush Maurya website",
    "Portfolio Ankush Maurya"
  ],
  openGraph: {
    title: "Ankush Maurya | Portfolio",
    description: "Portfolio of Ankush Maurya, BNCET, Lucknow.",
    images: [
      {
        url: "/me.jpeg",
        width: 1200,
        height: 630,
        alt: "Ankush Maurya - Hero Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankush Maurya | Portfolio",
    description: "Portfolio of Ankush Maurya, BNCET, Lucknow.",
    images: ["/me.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
