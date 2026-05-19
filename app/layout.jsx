import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = "https://luisgeraldo.academy";
const siteTitle = "Luis Geraldo Campos | Investigación aplicada, datos y publicación científica";
const siteDescription =
  "Sitio personal de Luis Alberto Geraldo Campos, docente investigador, RENACYT Nivel III y especialista en métodos cuantitativos avanzados, SEM, machine learning, psicometría y publicación científica.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: "Luis Geraldo Campos",
  authors: [{ name: "Luis Alberto Geraldo Campos", url: siteUrl }],
  creator: "Luis Alberto Geraldo Campos",
  publisher: "Luis Alberto Geraldo Campos",
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    "Luis Geraldo Campos",
    "investigación aplicada",
    "RENACYT",
    "SEM",
    "machine learning",
    "psicometría",
    "publicación científica",
    "analítica de datos",
    "metodología de investigación",
  ],
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Luis Geraldo Campos",
    images: [
      {
        url: "/images/luis-geraldo.jpg",
        width: 900,
        height: 900,
        alt: "Luis Alberto Geraldo Campos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/luis-geraldo.jpg"],
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
