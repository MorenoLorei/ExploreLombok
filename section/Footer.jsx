import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-20 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
                    {/* Logo dan Slogan */}
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-amber-400">ExploreLombok</h3>
                        <p className="mt-2 text-gray-400">Petualangan Anda dimulai di sini.</p>
                    </div>

                    {/* Tautan Navigasi */}
                    <div className="flex-1 flex justify-center md:justify-end">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-4 text-center md:text-left">
                            <a href="#" className="hover:text-green-400 transition-colors">Beranda</a>
                            <a href="#" className="hover:text-green-400 transition-colors">Jelajahi</a>
                            <a href="#" className="hover:text-green-400 transition-colors">Layanan</a>
                            <a href="#" className="hover:text-green-400 transition-colors">Tentang Kami</a>
                            <a href="#" className="hover:text-green-400 transition-colors">Kontak</a>
                            <a href="#" className="hover:text-green-400 transition-colors">Blog</a>
                            <a href="#" className="hover:text-green-400 transition-colors">Privasi</a>
                            <a href="#" className="hover:text-green-400 transition-colors">Ketentuan</a>
                        </div>
                    </div>
                </div>

                {/* Media Sosial dan Hak Cipta */}
                <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex gap-6 text-xl">
                        {/* Teks untuk ikon media sosial */}
                        <a href="https://web.facebook.com/ahmed.sukur.180" aria-label="Facebook" className="hover:text-green-400 transition-colors">Facebook</a>
                        <a href="https://www.instagram.com/explorelombok_bali?utm_source=ig_web_button_share_sheet&igsh=MWsxdWhzNG1vZ3BiMQ==" aria-label="Instagram" className="hover:text-green-400 transition-colors">Instagram</a>
                        <a href="https://wa.me/6285337452003" aria-label="WhatsApp" className="hover:text-green-400 transition-colors">WhatsApp</a>
                        <a href="https://www.tiktok.com/@explorelombok_bali_bajo" aria-label="Tiktok" className="hover:text-green-400 transition-colors">Tiktok</a>
                    </div>
                    <p className="text-gray-500 text-sm mt-4 sm:mt-0">
                        © {new Date().getFullYear()} ExploreLombok. Semua hak cipta dilindungi.
                    </p>
                </div>
            </div>
        </footer>
    );
}