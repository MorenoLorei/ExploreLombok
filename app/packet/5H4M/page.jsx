"use client";
import { useState } from "react";
import LightboxImage from "@/section/components/imageopener";

export default function PaketTourLombok5H4M() {
    const [activePackage, setActivePackage] = useState("A");

    return (
        <div className="max-w-5xl mx-auto p-6 bg-gray-50 min-h-screen font-sans text-gray-800">
            {/* Header */}
            <div className="bg-white rounded-xl p-8 text-center mb-12 shadow-sm border border-gray-200">
                <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4 tracking-wide">
                    EXPLORE LOMBOK
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
                    Paket Tour Lombok 5 Hari 4 Malam
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                    Liburan ke Lombok tidak lagi sulit karena <strong className="text-blue-600">EXPLORE LOMBOK</strong> hadir untuk Anda. Banyak hal yang bisa dilakukan untuk membahagiakan keluarga dan orang-orang tercinta, salah satunya mengajak berwisata di Lombok dengan keindahan alam, budaya, tradisi yang masih menjadi daya tarik tersendiri di Pulau Lombok. Kami menawarkan paket tour Lombok selama <strong className="text-blue-600">5 hari 4 malam</strong> diantaranya ada Paket A, Paket B, Paket C, paket dengan hotel, paket tanpa hotel, paket tournya saja.
                </p>
            </div>

            {/* Package Selector */}
            <div className="mb-8 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="flex flex-wrap border-b border-gray-200">
                    <button
                        className={`flex-1 py-4 px-2 text-center font-bold transition-colors duration-200 ${activePackage === "A" ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-blue-50"}`}
                        onClick={() => setActivePackage("A")}
                    >
                        Paket A
                    </button>
                    <button
                        className={`flex-1 py-4 px-2 text-center font-bold transition-colors duration-200 ${activePackage === "B" ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-blue-50"}`}
                        onClick={() => setActivePackage("B")}
                    >
                        Paket B
                    </button>
                    <button
                        className={`flex-1 py-4 px-2 text-center font-bold transition-colors duration-200 ${activePackage === "C" ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-blue-50"}`}
                        onClick={() => setActivePackage("C")}
                    >
                        Paket C
                    </button>
                    <button
                        className={`flex-1 py-4 px-2 text-center font-bold transition-colors duration-200 ${activePackage === "no-hotel" ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-blue-50"}`}
                        onClick={() => setActivePackage("no-hotel")}
                    >
                        Tanpa Hotel
                    </button>
                </div>
            </div>

            {/* Paket A */}
            {activePackage === "A" && (
                <div className="bg-white rounded-xl p-8 mb-8 shadow-sm border border-gray-200">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2 border-gray-200">Paket Tour Lombok 5 Hari 4 Malam (Paket A)</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-blue-700">HARI 1. SASAK TOUR + MANDALIKA (L,D)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Desa Sukarara: Tempat Kerajinan Kain Tenun songket dan berfoto baju adat lombok (free)</li>
                                <li>Desa Sade/ende: Tempat rumah adat tradisional lombok</li>
                                <li>Makan siang area kuta mandalika</li>
                                <li>Pantai kuta mandalika</li>
                                <li>Berfoto di tugu sirkuit mandalika</li>
                                <li>Pantai Tanjung Aan</li>
                                <li>Bukit Merese</li>
                                <li>Makan malam di Restoran khas lombok ayam taliwang</li>
                                <li>Check In Hotel</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-blue-700">HARI 2. GILI TRAWANGAN TOUR (B,L,D)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Jemput di hotel setelah breakfast</li>
                                <li>Pelabuhan penyeberangan ke gili trawangan</li>
                                <li>Acara bebas di gili trawangan</li>
                                <li>Makan siang di restoran gili trawangan</li>
                                <li>Bukit malaka/Bukit malimbu</li>
                                <li>Sunset di pura batu bolong/pantai senggigi</li>
                                <li>Makan malam di restoran mataram</li>
                                <li>Kembali ke hotel</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-blue-700">HARI 3: TRIP GILI NANGGU & KEDIS (B,L,D)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Jemput di hotel setelah breakfast</li>
                                <li>Menuju pelabuhan tawun sekotong</li>
                                <li>Gili nanggu</li>
                                <li>Gili kedis</li>
                                <li>Makan siang</li>
                                <li>Desa banyumulek</li>
                                <li>Makan malam</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-blue-700">HARI 4: TRIP AIR TERJUN DESA SENARU, SENDANG GILA & TIU KELEP (B,L,D)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Jemput di hotel setelah breakfast</li>
                                <li>Desa senaru</li>
                                <li>Air Terjun Sendang gila</li>
                                <li>Air Terjun Tiu Kelep</li>
                                <li>Makan siang</li>
                                <li>Bukit malimbu</li>
                                <li>Villa hantu senggigi spot foto</li>
                                <li>Makan malam</li>
                                <li>Kembali ke hotel</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-blue-700">HARI 5: CITY TOUR – AIRPORT (B,L)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Jemput di hotel setelah breakfast langsung check out hotel</li>
                                <li>Pusat oleh-oleh khas lombok, kaos lombok, makanan dan souvenir mutiara</li>
                                <li>Islamic center NTB</li>
                                <li>Makan siang</li>
                                <li>Desa banyumulek: tempat kerajinan gerabah dari tanah liat</li>
                                <li>Antar ke Airport</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg text-center">
                            <p className="text-gray-700 font-medium">
                                Detail Harga Paket Tour Lombok 5 Hari 4 Malam (Paket A) ini sesuai dengan jumlah peserta dan hotel pilihan Anda.
                            </p>
                        </div>
                        <div className="text-center">
                            <LightboxImage
                                src="/tourimage/5H4MAR.png"
                                alt="Detail Harga Paket A"
                                width={500}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Paket B */}
            {activePackage === "B" && (
                <div className="bg-white rounded-xl p-8 mb-8 shadow-sm border border-gray-200">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2 border-gray-200">Paket Tour Lombok 5 Hari 4 Malam (Paket B)</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-blue-700">HARI 1. SASAK TOUR + MANDALIKA (L,D)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Desa Sukarara : Tempat Kerajinan Kain Tenun songket dan berfoto baju adat lombok (free)</li>
                                <li>Desa Sade/ende : Tempat rumah adat tradisional lombok</li>
                                <li>Makan siang area kuta mandalika</li>
                                <li>Pantai kuta mandalika</li>
                                <li>Berfoto di tugu sirkuit mandalika</li>
                                <li>Pantai Tanjung Aan</li>
                                <li>Bukit Merese</li>
                                <li>Makan malam di Restoran khas lombok ayam taliwang</li>
                                <li>Check In Hotel</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-blue-700">HARI 2. GILI TRAWANGAN TOUR (B,L,D)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Jemput di hotel setelah breakfast</li>
                                <li>Pelabuhan penyeberangan ke gili trawangan</li>
                                <li>Acara bebas di gili trawangan</li>
                                <li>Makan siang di restoran gili trawangan</li>
                                <li>Bukit malaka/Bukit malimbu</li>
                                <li>Sunset di pura batu bolong/pantai senggigi</li>
                                <li>Makan malam di restoran mataram</li>
                                <li>Kembali ke hotel</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-blue-700">HARI 3. TRIP PANTAI PINK (B,L,D)</h3>
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
                                <li>Kembali ke hotel</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-blue-700">HARI 4. TRIP SEMBALUN (B,L,D)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Jemput di hotel setelah breakfast</li>
                                <li>Bukit pusuk sembalun</li>
                                <li>Bukit selong</li>
                                <li>Makan siang</li>
                                <li>Kebun stroberry</li>
                                <li>Desa sembalun</li>
                                <li>Makan malam</li>
                                <li>Kembali ke hotel</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-blue-700">HARI 5. CITY TOUR – AIRPORT (B,L)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Jemput di hotel setelah breakfast langsung check out hotel</li>
                                <li>Pusat oleh-oleh khas lombok, kaos lombok, makanan dan souvenir mutiara</li>
                                <li>Islamic center NTB</li>
                                <li>Makan siang</li>
                                <li>Desa banyumulek: tempat kerajinan gerabah dari tanah liat</li>
                                <li>Antar ke Airport</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg text-center">
                            <p className="text-gray-700 font-medium">
                                Detail Harga Paket Tour Lombok 5 Hari 4 Malam (Paket B) ini sesuai dengan jumlah peserta dan hotel pilihan Anda.
                            </p>
                        </div>
                        <div className="text-center">
                            <LightboxImage
                                src="/tourimage/5H4MBR.png"
                                alt="Detail Harga Paket B"
                                width={500}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Paket C */}
            {activePackage === "C" && (
                <div className="bg-white rounded-xl p-8 mb-8 shadow-sm border border-gray-200">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2 border-gray-200">Paket Tour Lombok 5 Hari 4 Malam (Paket C)</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-blue-700">HARI 1. SASAK TOUR + MANDALIKA (L,D)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Desa Sukarara : Tempat Kerajinan Kain Tenun songket dan berfoto baju adat lombok (free)</li>
                                <li>Desa Sade/ende : Tempat rumah adat tradisional lombok</li>
                                <li>Makan siang area kuta mandalika</li>
                                <li>Pantai kuta mandalika</li>
                                <li>Berfoto di tugu sirkuit mandalika</li>
                                <li>Pantai Tanjung Aan</li>
                                <li>Bukit Merese</li>
                                <li>Makan malam di Restoran khas lombok ayam taliwang</li>
                                <li>Check In Hotel</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-blue-700">HARI 2. TRIP 3 GILI (GILI AIR, GILI MENO, GILI TRAWANGAN + SNORKELING)</h3>
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
                                <li>Makan malam</li>
                                <li>Kembali ke hotel</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-blue-700">HARI 3. TRIP GILI NANGGU & KEDIS (B,L,D)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Jemput di hotel setelah breakfast</li>
                                <li>Menuju pelabuhan tawun sekotong</li>
                                <li>Gili nanggu</li>
                                <li>Gili kedis</li>
                                <li>Makan siang</li>
                                <li>Desa banyumulek</li>
                                <li>Makan malam</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-blue-700">HARI 4. TRIP AIR TERJUN DESA SENARU, SENDANG GILA & TIU KELEP (B,L,D)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Jemput di hotel setelah breakfast</li>
                                <li>Desa senaru</li>
                                <li>Air Terjun Sendang gila</li>
                                <li>Air Terjun Tiu Kelep</li>
                                <li>Makan siang</li>
                                <li>Bukit malimbu</li>
                                <li>Villa hantu senggigi spot foto</li>
                                <li>Makan malam</li>
                                <li>Kembali ke hotel</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-blue-700">HARI 5. CITY TOUR – AIRPORT (B,L)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Jemput di hotel setelah breakfast langsung check out hotel</li>
                                <li>Pusat oleh-oleh khas lombok, kaos lombok, makanan dan souvenir mutiara</li>
                                <li>Islamic center NTB</li>
                                <li>Makan siang</li>
                                <li>Desa banyumulek: tempat kerajinan gerabah dari tanah liat</li>
                                <li>Antar ke Airport</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg text-center">
                            <p className="text-gray-700 font-medium">
                                Detail Harga Paket Tour Lombok 5 Hari 4 Malam (Paket C) ini sesuai dengan jumlah peserta dan hotel pilihan Anda.
                            </p>
                        </div>
                        <div className="text-center">
                            <LightboxImage
                                src="/tourimage/5H4MCR.png"
                                alt="Detail Harga Paket C"
                                width={500}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Tanpa Hotel */}
            {activePackage === "no-hotel" && (
                <div className="bg-white rounded-xl p-8 mb-8 shadow-sm border border-orange-200">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2 border-gray-200">
                        Pilihan Kedua Paket Tour Lombok 5 Hari 4 Malam Tanpa Hotel
                        <span className="bg-orange-100 text-orange-800 text-sm px-2 py-1 rounded-full ml-2 font-bold uppercase">Hemat</span>
                    </h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-blue-700">HARI 1. SASAK TOUR + MANDALIKA (L,D)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Jemput di Bandara International Lombok</li>
                                <li>Sasak Tour</li>
                                <li>Makan siang</li>
                                <li>Makan malam</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-blue-700">HARI 2. PINK BEACH TOUR (B,L,D)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Makan pagi</li>
                                <li>Pink Beach Tour</li>
                                <li>Makan siang</li>
                                <li>Makan malam</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-blue-700">HARI 3. TOUR TIGA GILI (GILI TRAWANGAN, GILI AIR, GILI MENO) (B,L,D)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Makan pagi</li>
                                <li>Tour Tiga Gili</li>
                                <li>Makan siang</li>
                                <li>Makan malam</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-blue-700">HARI 4. TOUR AIR TERJUN (B,L,D)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Makan pagi</li>
                                <li>Tour Air Terjun</li>
                                <li>Makan siang</li>
                                <li>Makan malam</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-blue-700">HARI 5. CITY TOUR – AIRPORT (B,L)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Makan pagi</li>
                                <li>City Tour</li>
                                <li>Makan siang</li>
                                <li>Antar ke Airport</li>
                            </ul>
                        </div>
                        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 text-center">
                            <p className="text-gray-700 font-medium">
                                Detail Harga Paket Tour Lombok 5 Hari 4 Malam Tanpa Hotel ini sesuai dengan jumlah peserta.
                            </p>
                        </div>
                        <div className="text-center">
                            <LightboxImage
                                src="/tourimage/5H4MNHR.png"
                                alt="Harga Paket Tanpa Hotel"
                                width={500}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Keterangan */}
            <div className="bg-white rounded-xl p-8 mb-8 shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2 border-gray-200">Keterangan</h2>
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-blue-50 p-3 rounded-lg">
                        <strong className="text-blue-700">B</strong><br/>Breakfast
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                        <strong className="text-green-700">L</strong><br/>Lunch
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                        <strong className="text-purple-700">D</strong><br/>Dinner
                    </div>
                </div>
            </div>

            {/* Informasi Harga & Ketentuan */}
            <div className="bg-white rounded-xl p-8 mb-8 shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-2 border-gray-200">Informasi Harga & Ketentuan</h2>
                <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed">
                        Harga untuk semua paket tour di atas adalah harga <strong>per orang</strong> dengan minimum peserta adalah 2 orang.
                        Bayi umur kurang dari 3 tahun <strong className="text-green-600">GRATIS</strong>, usia 3–5 tahun <strong>50%</strong>,
                        usia 6–7 tahun <strong>75%</strong>, dan usia 8 tahun ke atas <strong>100%</strong>.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-green-700">Harga Sudah Termasuk:</h3>
                        <ul className="space-y-2 text-gray-700 ml-4 list-disc">
                            {["Private transport antar jemput (driver + bensin)", "Free makan sesuai program di resto rekomendasi", "Air mineral selama tour", "Tiket wisata", "Guide", "Parkir"].map((item, index) => (
                                <li key={index}>• {item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-red-700">Harga Tidak Termasuk:</h3>
                        <ul className="space-y-2 text-gray-700 ml-4 list-disc">
                            {["Hotel", "Tiket pesawat", "Pengeluaran pribadi", "Boat & snorkeling", "High season surcharge"].map((item, index) => (
                                <li key={index}>• {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* WhatsApp Button */}
            <div className="text-center">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Hubungi Kami Sekarang!</h3>
                    <p className="text-gray-600 mb-6">Dapatkan konsultasi gratis dan penawaran terbaik untuk liburan impian Anda</p>
                    <a
                        href="https://wa.me/6285337452003?text=Halo%20Admin%20ExploreLombok,%20Minta%20Info%20Paket%20Tour%20Lombok%205%20Hari%204%20Malam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-green-600 text-white font-bold py-4 px-8 rounded-full hover:bg-green-700 transition-colors text-lg shadow-lg transform hover:scale-105"
                    >
                        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
                        </svg>
                        Pesan via WhatsApp
                    </a>
                    <p className="text-gray-600 mt-4 text-sm">Respon cepat dalam 5 menit</p>
                </div>
            </div>
        </div>
    );
}