import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-50 mt-20 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Logo dan Slogan */}
                    <div className="text-center md:text-left md:col-span-1">
                        <h3 className="text-3xl font-bold text-amber-300">ExploreLombok</h3>
                        {/* Changed to text-gray-300 for a clear, readable slogan */}
                        <p className="mt-2 text-gray-300">Petualangan Anda dimulai di sini.</p>
                    </div>

                    {/* Tautan Navigasi */}
                    <div className="text-center md:text-left md:col-span-1">
                        <h4 className="text-lg font-semibold text-white mb-4">Navigasi</h4>
                        <ul className="space-y-2">
                            <li>
                                {/* Changed to hover:text-amber-200 for high-contrast on hover */}
                                <Link href="#home" className="hover:text-amber-200 transition-colors duration-300">Kembali ke atas</Link>
                            </li>
                            <li>
                                {/* Changed to hover:text-amber-200 for high-contrast on hover */}
                                <Link href="#produk" className="hover:text-amber-200 transition-colors duration-300">Jelajahi</Link>
                            </li>
                            <li>
                                {/* Changed to hover:text-amber-200 for high-contrast on hover */}
                                <Link href="/kebijakan" className="hover:text-amber-200 transition-colors duration-300">Privasi</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Tautan Media Sosial */}
                    <div className="text-center md:text-left md:col-span-1">
                        <h4 className="text-lg font-semibold text-white mb-4">Ikuti Kami</h4>
                        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-6 text-xl">
                            {/* Changed to hover:text-amber-200 for high-contrast on hover */}
                            <a href="https://web.facebook.com/ahmed.sukur.180" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition-colors duration-300">Facebook</a>
                            {/* Changed to hover:text-amber-200 for high-contrast on hover */}
                            <a href="https://www.instagram.com/explorelombok_bali?utm_source=ig_web_button_share_sheet&igsh=MWsxdWhzNG1vZ3BiMQ==" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition-colors duration-300">Instagram</a>
                            {/* Changed to hover:text-amber-200 for high-contrast on hover */}
                            <a href="https://wa.me/6285337452003" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition-colors duration-300">WhatsApp</a>
                            {/* Changed to hover:text-amber-200 for high-contrast on hover */}
                            <a href="https://www.tiktok.com/@explorelombok_bali_bajo" aria-label="Tiktok" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition-colors duration-300">Tiktok</a>
                        </div>
                    </div>
                </div>

                {/* Hak Cipta */}
                <div className="mt-16 pt-8 border-t border-gray-700 text-center">
                    {/* Changed to text-gray-300 for a clear, readable copyright notice */}
                    <p className="text-gray-300 text-sm">
                        © {new Date().getFullYear()} ExploreLombok. Semua hak cipta dilindungi.
                    </p>
                </div>
            </div>
        </footer>
    );
}