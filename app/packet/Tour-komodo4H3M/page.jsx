"use client";
import Link from "next/link";
import BackToHomeButton from "@/section/components/backhomebtn";
import React from "react";

export default function PaketTourKomodo4H3M() {
    return (
        <div className="max-w-5xl mx-auto p-6 bg-gray-50 min-h-screen font-sans text-gray-800">
            {/* Header */}
            <div className="bg-white rounded-xl p-8 text-center mb-12 shadow-sm border border-gray-200">
                <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4 tracking-wide">
                    Private Tour
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
                    Paket Tour Komodo 4 Hari 3 Malam
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                    Nikmati petualangan laut yang menakjubkan selama 4 hari 3 malam di Komodo, dengan pengalaman menginap di hotel mewah dan juga di atas kapal Phinisi.
                </p>
            </div>

            {/* Itinerary Section */}
            <div className="bg-white rounded-xl p-8 mb-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2 border-gray-200">Rencana Perjalanan</h2>
                <div className="space-y-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-blue-700">Day 1</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Peserta di jemput oleh Team kami</li>
                            <li>Stop foto di Puncak Waringin</li>
                            <li>Sunset di Bukit Silvia</li>
                            <li>Dinner di Lokal Resto</li>
                            <li>Check in hotel dan acara bebas</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-blue-700">Day 2</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Peserta chek out hotel dan diantar ke pelabuhan</li>
                            <li>Berkunjung ke Pulau kelor adalah pulau kecil dengan pemandangan pantai dan bukit</li>
                            <li>Pulau menjerite sebagai spot snorkeling. Kita bisa melihat Ikan hias dan terumbu karang dengan air laut yg tenang.</li>
                            <li>Pulau kalong adalah pulau kecil sebagai tempat hidupnya kelelawar.</li>
                            <li>Disini sangat cocok untuk selfi dan spot poto dengan pemandangan sunset yang sangat indah.</li>
                            <li>Makan siang dan Makan malam disiapkan diatas kapal</li>
                            <li>Menginap diatas kapal</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-blue-700">Day 3</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Morning call dan mendaki ke atas puncak padar untuk menikmati sunrise</li>
                            <li>Aktivitas bebas di puncak padar</li>
                            <li>Kembali ke kapal dan sarapan pagi diatas kapal</li>
                            <li>Melanjutkan perjalanan ke Pulau komodo. Kita akan stop dan soft trekking sekitar 1 jam untuk melihat komodo dan ditemani dengan pawang (ranger).</li>
                            <li>Pantai pink adalah spot pantai dengan air laut yg bersih, jernih dan sebagai tempat pavorit untuk snorkeling.</li>
                            <li>Kembali ke labuan bajo</li>
                            <li>Dinner di lokal resto (senang mose)</li>
                            <li>Diantar ke hotel dan acara bebas</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-blue-700">Day 4: Transfer Airport</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Setelah sarapan peserta di jemput</li>
                            <li>Mencari oleh-oleh khas Labuan Bajo</li>
                            <li>Diantar ke Bandara</li>
                            <li>Program selesai</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Pricing & Inclusions */}
            <div className="bg-white rounded-xl p-8 mb-8 shadow-sm border border-gray-200">
                <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
                    <div>
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">Detail Harga</h2>
                        <p className="text-gray-700 mb-4">
                            Harga Per orang base on 6 pax
                        </p>
                        <div className="text-2xl font-bold text-gray-900 bg-gray-100 p-4 rounded-lg text-center">
                            Rp 5.500.000<span className="text-base font-normal">/pax</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-800">Harga Termasuk:</h3>
                        <ul className="space-y-2 text-gray-700 ml-4 list-disc">
                            <li>Transportasi sesuai program</li>
                            <li>2 malam stay di Laprima 4*</li>
                            <li>Sarapan pagi di Hotel dan di Kapal</li>
                            <li>Live on Board 2H1M with Phinisi</li>
                            <li>2x makan siang diatas Kapal</li>
                            <li>3x makan malam</li>
                            <li>Air Mmineral</li>
                            <li>Alat Snorkeling</li>
                            <li>Teh dan Kopi</li>
                            <li>Live Jacket</li>
                            <li>Boat Crew</li>
                            <li>Tour Guide Profesional</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t pt-8 border-gray-200">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">Harga Belum Termasuk:</h3>
                    <ul className="space-y-2 text-gray-700 ml-4 list-disc">
                        <li>Flight Tiket (Return)</li>
                        <li>Tips Crew Kapal/Guide</li>
                        <li>Tiket Taman Nasional</li>
                    </ul>
                </div>
            </div>

            {/* Notes */}
            <div className="bg-white rounded-xl p-8 mb-8 shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2 border-gray-200">Catatan Penting</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Paket tour bersifat tentative</li>
                    <li>Paket tour yg kami tawarkan masih fleksibel, bisa menyesuaikan ulang sesuai dengan kebutuhan anda</li>
                    <li>Kalau ada hal-hal yg ingin ditanyakan silahkan jangan sungkan untuk menghubungi kami</li>
                </ul>
            </div>

            {/* WhatsApp Button */}
            <div className="text-center">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Tertarik dengan Paket Ini?</h3>
                    <p className="text-gray-600 mb-6">Hubungi kami untuk mendapatkan informasi lengkap dan penawaran terbaik!</p>
                    <Link
                        href="https://wa.me/6285337452003?text=Halo%20Admin%20ExploreLombok,%20Minta%20Info%20Paket%20Tour%20Komodo%204%20Hari%203%20Malam"
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
            <BackToHomeButton />
        </div>
    );
}