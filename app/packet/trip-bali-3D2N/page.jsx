"use client";
import Link from "next/link";
import React from "react";
import BackToHomeButton from "@/section/components/backhomebtn";

export default function TripBali3D2N() {
    return (
        <div className="max-w-5xl mx-auto p-6 bg-orange-50 min-h-screen font-sans text-gray-800">
            {/* Header Section */}
            <div className="bg-white rounded-xl p-8 text-center mb-12 shadow-lg border border-orange-200">
                <div className="inline-block bg-orange-100 text-orange-900 px-4 py-1 rounded-full text-sm font-semibold mb-4 tracking-wide border border-orange-200">
                    Paket Tour Bali
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-orange-900 leading-tight">
                    Trip Bali 3 Hari 2 Malam
                </h1>
                <p className="text-gray-800 text-lg leading-relaxed max-w-3xl mx-auto">
                    Jelajahi keindahan Pulau Dewata dengan paket lengkap 3 hari 2 malam. Nikmati pantai eksotis, budaya yang memukau, dan pengalaman tak terlupakan di Bali.
                </p>
            </div>

            {/* Trip Details Section */}
            <div className="bg-white rounded-xl p-8 mb-8 shadow-lg border border-orange-200">
                <h2 className="text-2xl font-bold mb-6 text-orange-900 border-b pb-2 border-orange-200">
                    Rencana Perjalanan
                </h2>

                {/* Day 1 */}
                <div className="mb-6 pb-6 border-b border-orange-100">
                    <h3 className="text-xl font-semibold mb-3 text-orange-800">
                        Hari 1 - Penjemputan di Bandara Ngurah Rai
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-800 ml-4">
                        <li>Penjemputan di Bandara Ngurah Rai oleh tim kami</li>
                        <li>Menuju Pantai Melasti untuk menikmati pemandangan pantai yang indah</li>
                        <li>Makan siang di restoran yang direkomendasikan</li>
                        <li>Kunjungi Pantai Pandawa yang terkenal dengan tebing kapurnya</li>
                        <li>Mengunjungi Pura Uluwatu (jika waktu memungkinkan) untuk melihat sunset</li>
                        <li>Check-in ke hotel</li>
                        <li>Makan malam</li>
                    </ul>
                </div>

                {/* Day 2 */}
                <div className="mb-6 pb-6 border-b border-orange-100">
                    <h3 className="text-xl font-semibold mb-3 text-orange-800">
                        Hari 2 - Eksplorasi Tanah Lot & Bedugul
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-800 ml-4">
                        <li>Sarapan di hotel</li>
                        <li>Penjemputan untuk perjalanan ke Tanah Lot</li>
                        <li>Mengunjungi Pura Tanah Lot yang terkenal dengan pemandangan lautnya</li>
                        <li>Melanjutkan perjalanan ke Bedugul Temple</li>
                        <li>Makan siang</li>
                        <li>Menikmati sunset di Pantai Kuta</li>
                        <li>Berbelanja oleh-oleh khas Bali di Krisna Oleh-Oleh (souvenir, kaos, snack, dll)</li>
                        <li>Kembali ke hotel</li>
                    </ul>
                </div>

                {/* Day 3 */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-orange-800">
                        Hari 3 - Desa Penglipuran & Kepulangan
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-800 ml-4">
                        <li>Sarapan di hotel</li>
                        <li>Check-out dari hotel</li>
                        <li>Mengunjungi Desa Penglipuran, desa terindah dan terbersih di Bali</li>
                        <li>Diantar ke Bandara Ngurah Rai untuk penerbangan pulang</li>
                    </ul>
                </div>
            </div>

            {/* Pricing and Inclusions */}
            <div className="bg-white rounded-xl p-8 mb-8 shadow-lg border border-orange-200">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-orange-900 border-b pb-2 border-orange-200">
                            Paket Harga Trip Bali 3D2N
                        </h2>
                        <div className="space-y-4">
                            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                                <span className="font-bold text-orange-900">Paket Hotel Bintang 2:</span>
                                <div className="text-lg font-semibold mt-1 text-orange-800">IDR 1.850.000 / orang</div>
                                <p className="text-sm text-gray-800 mt-1">Menginap di hotel bintang 2 terkenal</p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                <span className="font-bold text-green-900">Paket Hotel Bintang 3:</span>
                                <div className="text-lg font-semibold mt-1 text-green-800">IDR 2.550.000 / orang</div>
                                <p className="text-sm text-gray-800 mt-1">Menginap di Sunday Hotel Sunset Kuta</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-orange-900">
                            Harga Sudah Termasuk:
                        </h3>
                        <ul className="space-y-2 text-gray-800 ml-4 list-disc">
                            <li>Transportasi AC selama tour</li>
                            <li>Driver profesional, BBM, dan parkir</li>
                            <li>Akomodasi hotel sesuai pilihan (2 atau 3 malam)</li>
                            <li>Makan sesuai program (2x sarapan, 2x makan siang, 2x makan malam)</li>
                            <li>Tiket masuk objek wisata</li>
                            <li>Air mineral selama perjalanan</li>
                            <li>Dokumentasi dibantu driver</li>
                            <li>Guide lokal</li>
                            <li>Prokes (masker/sanitizer)</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t pt-8 border-orange-200">
                    <h3 className="text-lg font-semibold mb-3 text-orange-900">
                        Harga Tidak Termasuk:
                    </h3>
                    <ul className="space-y-2 text-gray-800 ml-4 list-disc">
                        <li>Tiket pesawat pulang-pergi</li>
                        <li>Pengeluaran pribadi</li>
                        <li>Makan di luar program</li>
                        <li>Aktivitas tambahan yang tidak tercantum dalam itinerary</li>
                        <li>Asuransi perjalanan</li>
                    </ul>
                </div>
            </div>

            {/* Notes and CTA */}
            <div className="bg-white rounded-xl p-8 mb-8 shadow-lg border border-orange-200">
                <h2 className="text-xl font-bold mb-4 text-orange-900 border-b pb-2 border-orange-200">
                    Ketentuan
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-800">
                    <li>Paket merupakan private tour (tidak digabung dengan peserta lain)</li>
                    <li>Harga dihitung per orang dengan minimal 2 peserta</li>
                    <li>Itinerary dan waktu bersifat fleksibel dan dapat disesuaikan dengan kebutuhan</li>
                    <li>Pembayaran dapat dilakukan setelah program selesai atau dengan DP 50%</li>
                    <li>Untuk permintaan khusus (romantic dinner, surprise, dll) harap menghubungi kami sebelumnya</li>
                    <li>Harga dapat berubah selama musim tinggi (high season) dan hari libur nasional</li>
                </ul>
            </div>

            {/* WhatsApp Button */}
            <div className="text-center">
                <div className="bg-white rounded-xl p-8 shadow-lg border border-orange-200">
                    <h3 className="text-xl font-bold mb-4 text-orange-900">Siap Menjelajahi Keindahan Bali?</h3>
                    <p className="text-gray-800 mb-6">Hubungi kami untuk informasi lebih detail dan pemesanan paket tour!</p>
                    <Link
                        href="https://wa.me/6285337452003?text=Halo Admin ExploreLombok, Minta Info Trip Bali 3 Hari 2 Malam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-green-700 text-white font-bold py-4 px-8 rounded-lg hover:bg-green-800 transition-colors text-lg"
                        aria-label="Pesan via WhatsApp"
                    >
                        <svg
                            className="w-6 h-6 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M17.472 14.382c..." />
                        </svg>
                        Pesan via WhatsApp
                    </Link>
                    <p className="text-gray-700 mt-4 text-sm">Respon cepat dalam 5 menit</p>
                </div>
            </div>
            <BackToHomeButton />
        </div>
    );
}
