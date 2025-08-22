import Image from "next/image";
import MainBtn from "@/components/components/Main-btn";

export default function Hero() {
    return (
        <section className="relative w-full h-[100dvh] flex items-center justify-center">
            {/* Optimized Image */}
            <Image
                src="/ocean.jpg"
                alt="Pemandangan Gunung Rinjani di Lombok, Indonesia"
                fill
                priority
                loading="eager"
                quality={80}  // Slightly reduced for faster load
                className="object-cover -z-10"
            />

            {/* Enhanced Gradient */}
            <div className="absolute inset-0 bg-black/50 -z-10"></div>

            {/* Localized Content */}
            <div className="text-center text-white z-10 px-4">
                <h1 className="text-4xl md:text-5xl font-bold">EXPLORELOMBOK</h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
                    Jelajahi surga tersembunyi Indonesia
                </p>

                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <MainBtn
                        href="/explore"
                        aria-label="Jelajahi destinasi"
                        className="bg-white text-black hover:bg-gray-100 active:scale-95 transition-transform"
                    >
                        Jelajahi
                    </MainBtn>
                    <MainBtn
                        href="/support"
                        aria-label="Hubungi layanan pelanggan"
                        className="bg-transparent text-white border-2 border-white hover:bg-white/10 active:scale-95 transition-transform"
                    >
                        Bantuan
                    </MainBtn>
                </div>
            </div>
        </section>
    );
}