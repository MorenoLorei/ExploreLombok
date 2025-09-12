import "./globals.css";

export const metadata = {
    title: "Explore Lombok | Paket Tour Lombok & Sewa Mobil Murah",
    description:
        "Temukan pesona Lombok dengan paket tour eksklusif & sewa mobil murah. Nikmati Gili, Mandalika, hingga Rinjani dan bali dengan pengalaman tak terlupakan.",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/explorelombok.png",
    },
    authors: [{ name: "Explore Lombok" }],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://www.explorelombokbali.com",
        languages: {
            "id-ID": "https://www.explorelombokbali.com"
        },
    },
    openGraph: {
        title: "Explore Lombok | Paket Tour & Sewa Mobil Murah",
        description:
            "Temukan pesona Lombok dengan paket tour eksklusif & sewa mobil murah. Nikmati Gili, Mandalika, hingga Rinjani dan bali dengan pengalaman tak terlupakan.",
        url: "https://www.explorelombokbali.com",
        siteName: "Explore Lombok",
        images: [
            {
                url: "https://www.explorelombokbali.com/ocean.webp",
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
            "Temukan pesona Lombok dengan paket tour eksklusif & sewa mobil murah. Nikmati Gili, Mandalika, hingga Rinjani dan bali dengan pengalaman tak terlupakan.",
        images: [
            {
                url: "https://www.explorelombokbali.com/ocean.webp",
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
                    url: "https://www.explorelombokbali.com",
                    logo: "https://www.explorelombokbali.com/explorelombok.png",
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
                        url: "https://www.explorelombokbali.com/packet",
                    },
                }),
            }}
        />
        </body>
        </html>
    );
}
