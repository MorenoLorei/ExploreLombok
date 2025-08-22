"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import MainBtn from "@/components/components/Main-btn";

export default function Hero() {
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "EXPLORELOMBOK",
                    text: "Jelajahi surga tersembunyi Indonesia!",
                    url: window.location.href,
                });
                console.log("Shared successfully");
            } catch (err) {
                console.error("Error sharing:", err);
            }
        } else {
            alert("Sharing not supported on this browser. Copy the URL instead!");
        }
    };

    return (
        <section className="relative w-full h-[100dvh] flex flex-col items-center justify-center px-4" id="hero">
            {/* Background Image */}
            <Image
                src="/ocean.jpg"
                alt="Pemandangan Gunung Rinjani di Lombok, Indonesia"
                fill
                priority
                loading="eager"
                quality={80}
                className="object-cover -z-10"
            />
            <div className="absolute inset-0 bg-black/50 -z-10"></div>

            {/* Hero Content */}
            <div className="text-center text-white z-10 max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold">EXPLORELOMBOK</h1>
                <p className="mt-4 text-lg md:text-xl">
                    Jelajahi surga tersembunyi Indonesia
                </p>

                {/* Main Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <MainBtn
                        href="#produk"
                        aria-label="Jelajahi destinasi"
                        className="bg-white text-black hover:bg-gray-100 active:scale-95 transition-transform"
                    >
                        Jelajahi
                    </MainBtn>
                    <MainBtn
                        href="https://wa.me/6285337452003?text=Halo%20Admin%20ExploreLombok,%20saya%20tertarik%20dengan%20layanan%20Anda%20dan%20ingin%20menanyakan%20beberapa%20informasi%20lebih%20lanjut.%20Terima%20kasih."
                        aria-label="Hubungi layanan pelanggan"
                        className="bg-transparent text-white border-2 border-white hover:bg-white/10 active:scale-95 transition-transform"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Bantuan
                    </MainBtn>
                </div>

                {/* Share Button (smaller & lighter) */}
                <div className="mt-6">
                    <button
                        onClick={handleShare}
                        className="px-3 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition text-sm"
                    >
                        Bagikan ke Teman
                    </button>
                </div>
            </div>

            {/* Scroll Hint */}
            <div className="absolute bottom-8 flex justify-center w-full z-10">
                <ChevronDownIcon className="w-8 h-8 animate-bounce text-white" />
            </div>
        </section>
    );
}
