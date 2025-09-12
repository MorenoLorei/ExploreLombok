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
            id="hero"
            className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center px-4 text-center overflow-hidden"
        >
            {/* Background Image */}
            <Image
                src="/ocean.webp"
                alt="Pantai berpasir putih dengan Gunung Rinjani di Lombok – destinasi wisata populer di Indonesia"
                fill
                priority
                quality={85}
                className="object-cover -z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 -z-10" />

            {/* Hero Content */}
            <div className="z-10 max-w-3xl mx-auto text-white px-2">
                <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-tight">
                    Explore Lombok
                </h1>
                <h2 className="mt-3 text-[clamp(1.125rem,3vw,1.5rem)] font-medium text-gray-200">
                    Nikmati liburan tak terlupakan di Gili, Mandalika, dan Rinjani
                </h2>

                {/* Short SEO paragraph */}
                <p className="mt-5 text-[clamp(0.875rem,2.5vw,1rem)] leading-relaxed text-gray-200">
                    Explore Lombok adalah agen wisata terpercaya yang menghadirkan{" "}
                    <strong>paket tour Lombok</strong> eksklusif – mulai dari wisata pantai,
                    pendakian Gunung Rinjani, hingga petualangan ke{" "}
                    <strong>Pulau Gili</strong>. Kami juga menyediakan{" "}
                    <strong>sewa mobil murah di Lombok</strong> dengan sopir berpengalaman
                    untuk perjalanan aman, nyaman, dan penuh kesan.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <MainBtn
                        href="#produk"
                        aria-label="Lihat paket tour dan destinasi wisata Lombok"
                        title="Lihat paket tour Lombok terbaik"
                        className="bg-white text-black hover:bg-gray-100 active:scale-95 transition-transform text-base md:text-lg"
                    >
                        🎒 Lihat Paket Tour
                    </MainBtn>
                    <MainBtn
                        href="https://wa.me/6285337452003?text=Halo%20ExploreLombok,%20saya%20ingin%20info%20paket%20tour."
                        aria-label="Hubungi Explore Lombok via WhatsApp"
                        title="Chat dengan admin Explore Lombok"
                        className="bg-transparent text-white border-2 border-white hover:bg-white/10 active:scale-95 transition-transform text-base md:text-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        💬 Chat WhatsApp
                    </MainBtn>
                </div>

                {/* Share Button */}
                <div className="mt-6">
                    <button
                        onClick={handleShare}
                        className="px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition text-sm md:text-base"
                        title="Bagikan halaman Explore Lombok"
                        aria-label="Bagikan halaman Explore Lombok"
                    >
                        📤 Bagikan ke Teman
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

            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            name: "Explore Lombok",
                            url: "https://explorelombokbali.com",
                            description:
                                "Paket tour Lombok eksklusif & sewa mobil murah. Nikmati perjalanan wisata ke Gili, Mandalika, dan Rinjani bersama Explore Lombok.",
                            potentialAction: {
                                "@type": "SearchAction",
                                target:
                                    "https://explorelombokbali.com/search?q={search_term_string}",
                                "query-input": "required name=search_term_string",
                            },
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            name: "Explore Lombok",
                            image: "https://explorelombokbali.com/explorelombok.png",
                            url: "https://explorelombokbali.com",
                            telephone: "+62-853-374-52003",
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "Lombok",
                                addressRegion: "Nusa Tenggara Barat",
                                addressCountry: "ID",
                            },
                            sameAs: [
                                "https://web.facebook.com/ahmed.sukur.180",
                                "https://www.instagram.com/explorelombok_bali",
                            ],
                        },
                    ]),
                }}
            />
        </section>
    );
}
