import "./globals.css";

export const metadata = {
    title: "Explore Lombok | Paket Tour Lombok & Sewa Mobil Murah",
    description: "Jelajahi keindahan Lombok dengan paket tour eksklusif dan layanan sewa mobil terpercaya. Nikmati petualangan tak terlupakan di Gili, Mandalika, dan Rinjani dengan harga terjangkau.",
    keywords: ["explore lombok", "paket tour lombok", "sewa mobil lombok", "wisata lombok", "tour gili", "trip mandalika", "sewa avanza lombok", "travel lombok"],
    authors: [{ name: "Explore Lombok" }],
    robots: {
        index: true,
        follow: true,
    },

    openGraph: {
        title: "Explore Lombok | Paket Tour & Sewa Mobil",
        description: "Jelajahi surga tersembunyi Indonesia. Kami menyediakan paket wisata dan sewa mobil terlengkap di Lombok.",
        url: "https://explorelombok.netlify.app/",
        siteName: "Explore Lombok",
        images: [{
            url: "/bg-opengraph.png",
            width: 1200,
            height: 630,
            alt: "Pemandangan indah Lombok, Indonesia",
        }],
        locale: "id_ID",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Explore Lombok | Paket Tour lombok & Sewa Mobil",
        description: "Jelajahi surga tersembunyi Indonesia. Kami menyediakan paket wisata dan sewa mobil terlengkap di Lombok.",
        images: {
            url: "/bg-opengraph.png",
            alt: "Explore lombok image",
        }
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="id">
        <body>
        {children}
        </body>
        </html>
    );
}