import "./globals.css";

export const metadata = {
    title: "Explore Lombok | Paket Tour Lombok & Sewa Mobil Murah",
    description:
        "Jelajahi keindahan Lombok dengan paket tour eksklusif dan layanan sewa mobil terpercaya. Nikmati petualangan tak terlupakan di Gili, Mandalika, dan Rinjani dengan harga terjangkau.",
    icons: {
        icon: "/favicon.ico", // ✅ keep favicon.ico inside /public
        shortcut: "/favicon.ico",
        apple: "/explorelombok.png", // for iOS home screen
    },
    authors: [{ name: "Explore Lombok" }],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://explorelombokbali.com",
        languages: {
            "id-ID": "https://explorelombokbali.com",
            "en-US": "https://explorelombokbali.com/en",
        },
    },
    openGraph: {
        title: "Explore Lombok | Paket Tour & Sewa Mobil Murah",
        description:
            "Jelajahi surga tersembunyi Indonesia. Kami menyediakan paket wisata dan sewa mobil terlengkap di Lombok.",
        url: "https://explorelombokbali.com",
        siteName: "Explore Lombok",
        images: [
            {
                url: "https://explorelombokbali.com/bg-opengraph.png",
                width: 1200,
                height: 630,
                alt: "Pemandangan indah Lombok, Indonesia",
            },
        ],
        locale: "id_ID",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Explore Lombok | Paket Tour Lombok & Sewa Mobil Murah",
        description:
            "Jelajahi surga tersembunyi Indonesia. Kami menyediakan paket wisata dan sewa mobil terlengkap di Lombok.",
        images: [
            {
                url: "https://explorelombokbali.com/bg-opengraph.png",
                alt: "Explore Lombok image",
            },
        ],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="id">
        <body>
        {children}

        {/* ✅ JSON-LD Structured Data */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "TravelAgency",
                    name: "Explore Lombok",
                    url: "https://explorelombokbali.com",
                    logo: "https://explorelombokbali.com/explorelombok.png",
                    description:
                        "Paket tour Lombok eksklusif & sewa mobil murah di Lombok.",
                    address: {
                        "@type": "PostalAddress",
                        addressLocality: "Lombok",
                        addressRegion: "Nusa Tenggara Barat",
                        addressCountry: "ID",
                    },
                    contactPoint: {
                        "@type": "ContactPoint",
                        telephone: "+62-853-374-52003",
                        contactType: "customer service",
                        areaServed: "ID",
                        availableLanguage: ["Indonesian", "English"],
                    },
                    sameAs: [
                        "https://web.facebook.com/ahmed.sukur.180",
                        "https://www.instagram.com/explorelombok_bali",
                    ],
                    offers: {
                        "@type": "Offer",
                        priceCurrency: "IDR",
                        availability: "https://schema.org/InStock",
                        url: "https://explorelombokbali.com/packet",
                    },
                }),
            }}
        />
        </body>
        </html>
    );
}
