import { REM } from "next/font/google";
import Image from "next/image";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";

import "./globals.css";

import AppProvidersWrapper from "@/components/AppsProviderWrapper";
import BackToTop from "@/components/BackToTop";

const rem = REM({
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Rhythm & Sound Band - Premier Live Band in Nigeria",
    template: "%s | Rhythm & Sound Band",
  },
  description:
    "Rhythm & Sound Band delivers exceptional live music for weddings, corporate events, birthdays, church services, and celebrations across Nigeria. Over 10 years of experience with 15+ talented musicians.",
  keywords: [
    "live band Nigeria",
    "wedding band Lagos",
    "corporate event band",
    "Nigerian live music",
    "party band Nigeria",
    "church music band",
    "live band for hire",
    "Rhythm & Sound Band",
    "professional band Nigeria",
    "event entertainment Lagos",
  ],
  authors: [{ name: "Rhythm & Sound Band" }],
  creator: "Rhythm & Sound Band",
  publisher: "Rhythm & Sound Band",
  metadataBase: new URL("https://rhythmandsound.com"), // Replace with actual domain
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://rhythmandsound.com", // Replace with actual domain
    title: "Rhythm & Sound Band - Premier Live Band in Nigeria",
    description:
      "Exceptional live music for weddings, corporate events, and celebrations across Nigeria. Over 10 years of experience.",
    siteName: "Rhythm & Sound Band",
    images: [
      {
        url: "/og-image.jpg", // Add an Open Graph image
        width: 1200,
        height: 630,
        alt: "Rhythm & Sound Band performing live",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhythm & Sound Band - Premier Live Band in Nigeria",
    description:
      "Exceptional live music for weddings, corporate events, and celebrations across Nigeria.",
    images: ["/og-image.jpg"], // Add a Twitter card image
    creator: "@rhythmandsound", // Replace with actual Twitter handle
  },
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
  verification: {
    google: "your-google-verification-code", // Add Google Search Console verification
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

const splashScreenStyles = `
#splash-screen {
  position: fixed;
  top: 50%;
  left: 50%;
  background: white;
  display: flex;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 1;
  transition: all 15s linear;
  overflow: hidden;
}

#splash-screen.remove {
  animation: fadeout 0.7s forwards;
  z-index: 0;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
`;

// Script to prevent flash of wrong theme
const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  })();
`;

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "Rhythm & Sound Band",
  description:
    "Premier live band in Nigeria specializing in weddings, corporate events, and celebrations",
  url: "https://rhythmandsound.com", // Replace with actual domain
  logo: "https://rhythmandsound.com/logo.png", // Replace with actual logo URL
  image: "https://rhythmandsound.com/og-image.jpg", // Replace with actual image URL
  telephone: "+234-806-849-4766",
  email: "Officialrhythmandsound@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  areaServed: {
    "@type": "Country",
    name: "Nigeria",
  },
  genre: [
    "Live Music",
    "Wedding Music",
    "Corporate Events",
    "Gospel",
    "Afrobeat",
  ],
  foundingDate: "2013",
  memberOf: {
    "@type": "Organization",
    name: "Nigerian Entertainment Industry",
  },
  offers: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Live Band Performance",
      description: "Professional live music for all event types",
    },
  },
  sameAs: [
    "https://facebook.com/rhythmandsound", // Replace with actual social links
    "https://instagram.com/rhythmandsound",
    "https://twitter.com/rhythmandsound",
    "https://youtube.com/@rhythmandsound",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <style>{splashScreenStyles}</style>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Theme Color */}
        <meta name="theme-color" content="#ea580c" />
      </head>

      <body className={rem.className}>
        <div id="splash-screen">
          <Image
            alt="Rhythm & Sound Band Logo"
            width={355}
            height={83}
            src={"/logo-dark.png"}
            style={{ height: "10%", width: "auto" }}
            priority
          />
        </div>
        <NextTopLoader color="#ea580c" showSpinner={false} />
        <div id="__next_splash">
          <AppProvidersWrapper>
            {children}
            <BackToTop />
            <Toaster richColors />
          </AppProvidersWrapper>
        </div>
      </body>
    </html>
  );
}
