"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import MainBtn from "@/components/components/Main-btn";

export default function Hero() {
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Explore Lombok – Paket Tour & Sewa Mobil Murah",
                    text: "Jelajahi keindahan Lombok, Gili, Mandalika, dan Rinjani dengan harga terjangkau.",
                    url: window.location.href,
                });
            } catch (err) {
                console.error("Error sharing:", err);
            }
        } else {
            alert("Sharing tidak didukung di browser ini. Silakan salin URL!");
        }
    };

    return (
        <section
            className="relative w-full h-[100dvh] flex flex-col items-center justify-center px-4"
            id="hero"
        >
            {/* Background Image with SEO-friendly alt */}
            <Image
                src="/ocean.webp"
                alt="Pantai berpasir putih dan Gunung Rinjani di Lombok – destinasi wisata populer di Indonesia"
                fill
                priority
                loading="eager"
                quality={85}
                className="object-cover -z-10"
            />
            <div className="absolute inset-0 bg-black/50 -z-10" />

            {/* Hero Content */}
            <div className="text-center text-white z-10 max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Explore Lombok
                </h1>
                <h2 className="mt-3 text-lg md:text-xl font-medium">
                    Nikmati liburan tak terlupakan di Gili, Mandalika, dan Rinjani
                </h2>

                {/* Short SEO paragraph */}
                <p className="mt-5 text-sm md:text-base leading-relaxed text-gray-200">
                    Explore Lombok hadir sebagai agen wisata terpercaya yang menawarkan{" "}
                    <strong>paket tour Lombok</strong> eksklusif, mulai dari wisata pantai,
                    pendakian Gunung Rinjani, hingga perjalanan ke pulau Gili yang memukau.
                    Kami juga menyediakan layanan <strong>sewa mobil murah di Lombok</strong>
                    dengan sopir berpengalaman, sehingga perjalanan Anda aman, nyaman, dan penuh kesan.
                </p>

                {/* Main Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <MainBtn
                        href="#produk"
                        aria-label="Lihat paket tour dan destinasi wisata Lombok"
                        title="Lihat paket tour Lombok terbaik"
                        className="bg-white text-black hover:bg-gray-100 active:scale-95 transition-transform"
                    >
                        Lihat Paket Tour
                    </MainBtn>
                    <MainBtn
                        href="https://wa.me/6285337452003?text=Halo%20ExploreLombok,%20saya%20ingin%20info%20paket%20tour."
                        aria-label="Hubungi Explore Lombok via WhatsApp"
                        title="Chat dengan admin Explore Lombok"
                        className="bg-transparent text-white border-2 border-white hover:bg-white/10 active:scale-95 transition-transform"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Chat WhatsApp
                    </MainBtn>
                </div>

                {/* Share Button */}
                <div className="mt-6">
                    <button
                        onClick={handleShare}
                        className="px-3 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition text-sm"
                        title="Bagikan halaman Explore Lombok"
                        aria-label="Bagikan halaman Explore Lombok"
                    >
                        Bagikan ke Teman
                    </button>
                </div>
            </div>

            {/* Scroll Hint */}
            <div className="absolute bottom-8 flex justify-center w-full z-10">
                <ChevronDownIcon
                    className="w-8 h-8 animate-bounce text-white"
                    aria-hidden="true"
                />
            </div>

            {/* Schema for Site Search + Business */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        name: "Explore Lombok",
                        url: "https://explorelombokbali.com",
                        description:
                            "Paket tour Lombok eksklusif & sewa mobil murah. Nikmati perjalanan wisata ke Gili, Mandalika, dan Rinjani bersama Explore Lombok.",
                        publisher: {
                            "@type": "Organization",
                            name: "Explore Lombok",
                            logo: {
                                "@type": "ImageObject",
                                url: "https://explorelombokbali.com/explorelombok.png",
                            },
                        },
                        potentialAction: {
                            "@type": "SearchAction",
                            target:
                                "https://explorelombokbali.com/search?q={search_term_string}",
                            "query-input": "required name=search_term_string",
                        },
                    }),
                }}
            />
        </section>
    );
}
