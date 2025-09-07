import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fable Frame - Professional Web Development & Digital Solutions for Small Businesses",
    template: "%s | Fable Frame"
  },
  description: "Transform your business with custom website development, e-commerce solutions, and digital services. Fable Frame creates professional, responsive websites that convert visitors into customers. Serving automotive, healthcare, education, finance, and more industries.",
  keywords: [
    "web development",
    "website design",
    "small business websites",
    "custom web development",
    "e-commerce development",
    "responsive web design",
    "SEO optimization",
    "digital marketing",
    "mobile app development",
    "website maintenance",
    "business websites",
    "portfolio websites",
    "automotive websites",
    "healthcare websites",
    "restaurant websites",
    "real estate websites",
    "education websites",
    "finance websites",
    "professional web design",
    "affordable web solutions"
  ],
  authors: [{ name: "Fable Frame" }],
  creator: "Fable Frame",
  publisher: "Fable Frame",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://fableframe.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fableframe.in",
    title: "Fable Frame - Professional Web Development & Digital Solutions",
    description: "Transform your business with custom website development, e-commerce solutions, and digital services. We create professional, responsive websites that convert visitors into customers.",
    siteName: "Fable Frame",
    images: [
      {
        url: "/fableframe.png",
        width: 1200,
        height: 630,
        alt: "Fable Frame - Professional Web Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fable Frame - Professional Web Development & Digital Solutions",
    description: "Transform your business with custom website development, e-commerce solutions, and digital services. We create professional, responsive websites that convert visitors into customers.",
    images: ["/fableframe.png"],
    creator: "@fableframe",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fable Frame",
    url: "https://fableframe.com",
    logo: "https://fableframe.com/fableframe.png",
    description: "Professional web development and digital solutions for small businesses. We create custom websites, e-commerce solutions, and mobile apps that convert visitors into customers.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-XXX-XXX-XXXX",
      contactType: "customer service",
      availableLanguage: "English"
    },
    sameAs: [
      "https://twitter.com/fableframe",
      "https://linkedin.com/company/fableframe",
      "https://instagram.com/fableframe"
    ],
    offers: [
      {
        "@type": "Service",
        name: "Custom Website Development",
        description: "Professional custom website development for small businesses",
        provider: {
          "@type": "Organization",
          name: "Fable Frame"
        }
      },
      {
        "@type": "Service", 
        name: "E-commerce Development",
        description: "Complete e-commerce solutions with seamless checkout experiences",
        provider: {
          "@type": "Organization",
          name: "Fable Frame"
        }
      },
      {
        "@type": "Service",
        name: "Mobile App Development", 
        description: "Custom mobile applications for iOS and Android",
        provider: {
          "@type": "Organization",
          name: "Fable Frame"
        }
      },
      {
        "@type": "Service",
        name: "SEO Optimization",
        description: "Search engine optimization services to improve online visibility",
        provider: {
          "@type": "Organization",
          name: "Fable Frame"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cal.com" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Fable Frame" />
        <meta name="application-name" content="Fable Frame" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="apple-touch-icon" href="/fableframe.png" />
        <link rel="icon" type="image/png" href="/fableframe.png" />
        <link rel="alternate icon" href="/fableframe.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
