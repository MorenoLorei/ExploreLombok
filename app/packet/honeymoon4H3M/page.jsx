"use client";
import { useState } from "react";
import Link from "next/link";

export default function PaketHoneymoon() {
    const [activePackage, setActivePackage] = useState("A");

    return (
        <div className="max-w-5xl mx-auto p-6 bg-gray-50 min-h-screen font-sans text-gray-800">
            {/* Header */}
            <div className="bg-white rounded-xl p-8 text-center mb-12 shadow-sm border border-gray-200">
                <div className="inline-block bg-pink-100 text-pink-800 px-4 py-1 rounded-full text-sm font-semibold mb-4 tracking-wide">
                    Honeymoon Tour
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
                    Paket Honeymoon Lombok 4 Hari 3 Malam
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                    Paket bulan madu di Lombok kami sajikan untuk Anda dan pasangan yang ingin honeymoon romantis di Lombok, dengan banyaknya pilihan wisata yang akan menambah kesan penuh cinta dan kasih.
                </p>
            </div>

            {/* Package Selector */}
            <div className="mb-8 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="flex flex-wrap border-b border-gray-200">
                    <button
                        className={`flex-1 py-4 px-2 text-center font-bold transition-colors duration-200 ${activePackage === "A" ? "bg-pink-600 text-white" : "text-gray-700 hover:bg-pink-50"}`}
                        onClick={() => setActivePackage("A")}
                    >
                        Paket A
                    </button>
                    <button
                        className={`flex-1 py-4 px-2 text-center font-bold transition-colors duration-200 ${activePackage === "B" ? "bg-pink-600 text-white" : "text-gray-700 hover:bg-pink-50"}`}
                        onClick={() => setActivePackage("B")}
                    >
                        Paket B
                    </button>
                    <button
                        className={`flex-1 py-4 px-2 text-center font-bold transition-colors duration-200 ${activePackage === "C" ? "bg-pink-600 text-white" : "text-gray-700 hover:bg-pink-50"}`}
                        onClick={() => setActivePackage("C")}
                    >
                        Paket C
                    </button>
                    <button
                        className={`flex-1 py-4 px-2 text-center font-bold transition-colors duration-200 ${activePackage === "no-hotel" ? "bg-pink-600 text-white" : "text-gray-700 hover:bg-pink-50"}`}
                        onClick={() => setActivePackage("no-hotel")}
                    >
                        Tanpa Hotel
                    </button>
                </div>
            </div>

            {/* Content for active package */}
            {activePackage === "A" && (
                <div className="bg-white rounded-xl p-8 mb-8 shadow-sm border border-gray-200">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2 border-gray-200">Paket Honeymoon Lombok 4 Hari 3 Malam (Paket A)</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-pink-700">HARI 1. SASAK TOUR + MANDALIKA (L, D)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Desa Sukarara : Tempat Kerajinan Kain Tenun songket dan berfoto baju adat lombok (free)</li>
                                <li>Desa Sade/ende : Tempat rumah adat tradisional lombok</li>
                                <li>makan siang area kuta mandalika</li>
                                <li>Pantai kuta mandalika</li>
                                <li>Berfoto di tugu sirkuit mandalika</li>
                                <li>Pantai Tanjung Aan</li>
                                <li>Bukit Merese</li>
                                <li>makan malam di Restoran khas lombok ayam taliwang</li>
                                <li>Check In Hotel</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-pink-700">HARI 2. TRIP GILI TRAWANGAN (B, L, D)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Jemput di hotel setelah breakfast</li>
                                <li>Menuju pelabuhan</li>
                                <li>Gili trawangan</li>
                                <li>Makan siang</li>
                                <li>Acara bebas</li>
                                <li>Kembali ke pelabuhan</li>
                                <li>Bukit malaka</li>
                                <li>Bukit malimbu</li>
                                <li>villa hantu spot foto</li>
                                <li>SPA di senggigi</li>
                                <li>Romantic dinner</li>
                                <li>kembali ke hotel</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-pink-700">HARI 3. TRIP AIR TERJUN DESA SENARU, SENDANG GILA & TIU KELEP (B, L, D)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Jemput di hotel setelah breakfast</li>
                                <li>Desa senaru</li>
                                <li>Air Terjun Sendang gila</li>
                                <li>Air Terjun Tiu Kelep</li>
                                <li>Makan siang</li>
                                <li>Bukit malimbu</li>
                                <li>Villa hantu senggigi spot foto</li>
                                <li>Makan malam</li>
                                <li>kembali ke hotel</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-pink-700">HARI 4. CITY TOUR – AIRPORT (B, L)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Jemput di hotel setelah breakfast langsung check out hotel</li>
                                <li>Pusat oleh-oleh khas lombok, kaos lombok,makanan dan souvenir mutiara</li>
                                <li>Islamic center NTB</li>
                                <li>makan siang</li>
                                <li>Desa banyumulek: tempat kerajinan gerabah dari tanah liat</li>
                                <li>Antar ke Airport</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {activePackage === "B" && (
                <div className="bg-white rounded-xl p-8 mb-8 shadow-sm border border-gray-200">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2 border-gray-200">Paket Honeymoon Lombok 4 Hari 3 Malam (Paket B)</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-pink-700">HARI 1. SASAK TOUR + MANDALIKA (L, D)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Desa Sukarara : Tempat Kerajinan Kain Tenun songket dan berfoto baju adat lombok (free)</li>
                                <li>Desa Sade/ende : Tempat rumah adat tradisional lombok</li>
                                <li>makan siang area kuta mandalika</li>
                                <li>Pantai kuta mandalika</li>
                                <li>Berfoto di tugu sirkuit mandalika</li>
                                <li>Pantai Tanjung Aan</li>
                                <li>Bukit Merese</li>
                                <li>makan malam di Restoran khas lombok ayam taliwang</li>
                                <li>Check In Hotel</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-pink-700">HARI 2. TRIP GILI TRAWANGAN (B, L, D)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Jemput di hotel setelah breakfast</li>
                                <li>Menuju pelabuhan</li>
                                <li>Gili trawangan</li>
                                <li>Makan siang</li>
                                <li>Acara bebas</li>
                                <li>Kembali ke pelabuhan</li>
                                <li>Bukit malaka</li>
                                <li>Bukit malimbu</li>
                                <li>villa hantu spot foto</li>
                                <li>SPA di senggigi</li>
                                <li>makan malam</li>
                                <li>kembali ke hotel</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-pink-700">HARI 3. TRIP GILI NANGGU, KEDIS, SUDAK (B, L, D)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Jemput di hotel setelah breakfast</li>
                                <li>Menuju pelabuhan tawun sekotong</li>
                                <li>Gili nanggu</li>
                                <li>Gili kedis</li>
                                <li>Gili sudak</li>
                                <li>Makan siang</li>
                                <li>Desa banyumulek</li>
                                <li>Makan malam</li>
                                <li>Kembali ke hotel</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-pink-700">HARI 4. CITY TOUR – AIRPORT (B, L)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Jemput di hotel setelah breakfast langsung check out hotel</li>
                                <li>Pusat oleh-oleh khas lombok, kaos lombok,makanan dan souvenir mutiara</li>
                                <li>Islamic center NTB</li>
                                <li>makan siang</li>
                                <li>Desa banyumulek: tempat kerajinan gerabah dari tanah liat</li>
                                <li>Antar ke Airport</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {activePackage === "C" && (
                <div className="bg-white rounded-xl p-8 mb-8 shadow-sm border border-gray-200">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2 border-gray-200">Paket Honeymoon Lombok 4 Hari 3 Malam (Paket C)</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-pink-700">HARI 1. SASAK TOUR + MANDALIKA (L, D)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Desa Sukarara : Tempat Kerajinan Kain Tenun songket dan berfoto baju adat lombok (free)</li>
                                <li>Desa Sade/ende : Tempat rumah adat tradisional lombok</li>
                                <li>makan siang area kuta mandalika</li>
                                <li>Pantai kuta mandalika</li>
                                <li>Berfoto di tugu sirkuit mandalika</li>
                                <li>Pantai Tanjung Aan</li>
                                <li>Bukit Merese</li>
                                <li>makan malam di Restoran khas lombok ayam taliwang</li>
                                <li>Check In Hotel</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-pink-700">HARI 2. TRIP 3 GILI (GILI AIR, GILI MENO, GILI TRAWANGAN + SNORKELING)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Jemput di hotel setelah breakfast</li>
                                <li>Menuju Pelabuhan</li>
                                <li>Menuju gili air, snorkeling spot ikan dan coral</li>
                                <li>Gili meno spot penyu, patung, ikan dan coral</li>
                                <li>Gili trawangan dan makan siang</li>
                                <li>Acara bebas di gilitrawangan</li>
                                <li>Kembali ke pelabuhan</li>
                                <li>Bukit malaka</li>
                                <li>Bukit malimbu</li>
                                <li>Villa hantu spot foto</li>
                                <li>makan malam</li>
                                <li>kembali ke hotel</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-pink-700">HARI 3. TRIP PANTAI PINK (B, L, D)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Jemput di hotel setelah breakfast</li>
                                <li>Menuju pelabuhan tanjung luar</li>
                                <li>Pulau pasir</li>
                                <li>Pantai pink 1</li>
                                <li>Makan siang</li>
                                <li>Bukit tangsi</li>
                                <li>Gili petelu</li>
                                <li>Pantai pink 2</li>
                                <li>Makan malam</li>
                                <li>kembali ke hotel</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-pink-700">HARI 4. CITY TOUR – AIRPORT (B, L)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Jemput di hotel setelah breakfast langsung check out hotel</li>
                                <li>Pusat oleh-oleh khas lombok, kaos lombok,makanan dan souvenir mutiara</li>
                                <li>Islamic center NTB</li>
                                <li>makan siang</li>
                                <li>Desa banyumulek: tempat kerajinan gerabah dari tanah liat</li>
                                <li>Antar ke Airport</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {activePackage === "no-hotel" && (
                <div className="bg-white rounded-xl p-8 mb-8 shadow-sm border border-gray-200">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2 border-gray-200">Pilihan Kedua Paket Honeymoon Lombok 4 Hari 3 Malam Tanpa Hotel</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-pink-700">HARI 1. SASAK TOUR + MANDALIKA (L, D)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Desa Sukarara : Tempat Kerajinan Kain Tenun songket dan berfoto baju adat lombok (free)</li>
                                <li>Desa Sade/ende : Tempat rumah adat tradisional lombok</li>
                                <li>makan siang area kuta mandalika</li>
                                <li>Pantai kuta mandalika</li>
                                <li>Berfoto di tugu sirkuit mandalika</li>
                                <li>Pantai Tanjung Aan</li>
                                <li>Bukit Merese</li>
                                <li>makan malam di Restoran khas lombok ayam taliwang</li>
                                <li>Check In Hotel</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-pink-700">HARI 2. TRIP 3 GILI ( GILI AIR, GILI MENO, GILI TRAWANGAN + SNORKELING)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Jemput di hotel setelah breakfast</li>
                                <li>Menuju Pelabuhan</li>
                                <li>Menuju gili air, snorkeling spot ikan dan coral</li>
                                <li>Gili meno spot penyu, patung, ikan dan coral</li>
                                <li>Gili trawangan dan makan siang</li>
                                <li>Acara bebas di gilitrawangan</li>
                                <li>Kembali ke pelabuhan</li>
                                <li>Bukit malaka</li>
                                <li>Bukit malimbu</li>
                                <li>Villa hantu spot foto</li>
                                <li>makan malam</li>
                                <li>kembali ke hotel</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-pink-700">HARI 3. TRIP PANTAI PINK (B, L, D)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Jemput di hotel setelah breakfast</li>
                                <li>Menuju pelabuhan tanjung luar</li>
                                <li>Pulau pasir</li>
                                <li>Pantai pink 1</li>
                                <li>Makan siang</li>
                                <li>Bukit tangsi</li>
                                <li>Gili petelu</li>
                                <li>Pantai pink 2</li>
                                <li>Makan malam</li>
                                <li>kembali ke hotel</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-pink-700">HARI 4. CITY TOUR – AIRPORT (B, L)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Jemput di hotel setelah breakfast langsung check out hotel</li>
                                <li>Pusat oleh-oleh khas lombok, kaos lombok,makanan dan souvenir mutiara</li>
                                <li>Islamic center NTB</li>
                                <li>makan siang</li>
                                <li>Desa banyumulek: tempat kerajinan gerabah dari tanah liat</li>
                                <li>Antar ke Airport</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {/* Keterangan */}
            <div className="bg-white rounded-xl p-8 mb-8 shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2 border-gray-200">Keterangan</h2>
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-pink-50 p-3 rounded-lg"><strong className="text-pink-700">B</strong><br/>Breakfast</div>
                    <div className="bg-pink-50 p-3 rounded-lg"><strong className="text-pink-700">L</strong><br/>Lunch</div>
                    <div className="bg-pink-50 p-3 rounded-lg"><strong className="text-pink-700">D</strong><br/>Dinner</div>
                </div>
            </div>

            {/* Informasi Harga & Ketentuan */}
            <div className="bg-white rounded-xl p-8 mb-8 shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-2 border-gray-200">Informasi Harga & Ketentuan</h2>
                <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed">
                        Harga paket Honeymoon di atas adalah harga untuk **dua (2) orang** dan berdasarkan tipe hotel.
                    </p>
                </div>

                {/* Included/Excluded Items */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-green-700">Harga Sudah Termasuk:</h3>
                        <ul className="space-y-2 text-gray-700 ml-4 list-disc">
                            <li>Hotel sesuai pilihan</li>
                            <li>Private transport antar jemput (driver + bensin)</li>
                            <li>Tiket wisata</li>
                            <li>Free makan 7x (termasuk romantic dinner)</li>
                            <li>Breakfast di hotel 3x</li>
                            <li>Decorasi honeymoon</li>
                            <li>Spa</li>
                            <li>Air mineral selama tour</li>
                            <li>private glass bottom boat plus snorkeling jika pilih paket C</li>
                            <li>private speed boat ke gili trawangan</li>
                            <li>guide</li>
                            <li>parkir</li>
                            <li>dokumentasi</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-red-700">Harga Tidak Termasuk:</h3>
                        <ul className="space-y-2 text-gray-700 ml-4 list-disc">
                            <li>Tiket pesawat</li>
                            <li>pengeluaran pribadi</li>
                            <li>high season</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* WhatsApp Button */}
            <div className="text-center">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Hubungi Kami Sekarang!</h3>
                    <p className="text-gray-600 mb-6">Dapatkan konsultasi gratis dan penawaran terbaik untuk liburan impian Anda</p>
                    <Link
                        href="https://wa.me/6281529408733?text=Halo%20Admin%20Explore%20Lombok,%20Minta%20Info%20Paket%20Honeymoon%20Lombok%204%20Hari%203%20Malam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-green-600 text-white font-bold py-4 px-8 rounded-full hover:bg-green-700 transition-colors text-lg shadow-lg transform hover:scale-105"
                    >
                        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
                        </svg>
                        Pesan via WhatsApp
                    </Link>
                    <p className="text-gray-600 mt-4 text-sm">Respon cepat dalam 5 menit</p>
                </div>
            </div>
        </div>
    );
}