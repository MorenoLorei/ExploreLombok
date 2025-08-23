"use client";
import Link from "next/link";
import React from "react";

export default function TripGiliNanggu() {
    return (
        <div className="max-w-5xl mx-auto p-6 bg-gray-50 min-h-screen font-sans text-gray-800">
            {/* Header Section */}
            <div className="bg-white rounded-xl p-8 text-center mb-12 shadow-sm border border-gray-200">
                <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4 tracking-wide">
                    Tour Harian
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
                    Trip Gili Nanggu
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                    Eksplor keindahan bawah laut Gili Nanggu, Gili Sudak, dan Gili Kedis. Nikmati snorkeling, berenang bersama ribuan ikan, dan bersantai di pantai berpasir putih.
                </p>
            </div>

            {/* Trip Details Section */}
            <div className="bg-white rounded-xl p-8 mb-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2 border-gray-200">
                    Deskripsi & Rencana Perjalanan
                </h2>
                <div className="space-y-4 mb-6 text-gray-700">
                    <p>
                        Paket ini menyediakan fasilitas snorkeling untuk Anda yang ingin mengeksplor keindahan alam bawah laut di ujung barat pulau Lombok. Kami telah merangkum semua keperluan trip, mulai dari transportasi hingga alat snorkeling.
                    </p>
                    <p>
                        **Start:** Kota Mataram / Bandara Lombok
                        <br />
                        **Durasi:** 1 Hari
                    </p>
                </div>

                <h3 className="text-lg font-semibold mb-3 text-blue-700">Rencana Perjalanan:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Crew kami akan menjemput anda di Airport atau lokasi yang sudah disepakati</li>
                    <li>Tiba di dermaga tawun sekotong lombok barat untuk penyebrangan ke gili nanggu sekitar 10 -20 menit dengan menggunakan Private Boat</li>
                    <li>Tiba di Gili Nanggu, kita melakukan persiapan untuk bermain Snorkling dan menikmati keindahan alam bawah laut, berenang bersama ribuan spesies ikan hias dan pemandangan coral yang sangat menakjubkan</li>
                    <li>Free and easy dan makan siang di Gili Sudak sambil bersantai menikmati keindahan alam pulau kecil ini</li>
                    <li>Menuju ke Gili Kedis dan anda bisa melanjutkan bermain Snorkling di Gili kedis dengan spot berbeda atau anda bisa bersantai sejenak sambil memotret atau selfie di pulau yang exotic ini</li>
                    <li>Setelah puas berlama lama di gili kedis kita akan Kembali ke Lombok dan menuju mataram</li>
                    <li>Mengunjungi Pusat Olleh oleh Khas Lombok ( Optional )</li>
                    <li>Makan Malam dan kami akan mengantar anda kembali ke hotel atau lokasi yang telah disepakati</li>
                </ul>
            </div>

            {/* Pricing and Inclusions */}
            <div className="bg-white rounded-xl p-8 mb-8 shadow-sm border border-gray-200">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2 border-gray-200">
                            Biaya Trip Gili Nanggu
                        </h2>
                        <div className="space-y-4">
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <span className="font-bold text-gray-900">2 Orang:</span> Rp 570.000 / pax
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <span className="font-bold text-gray-900">3-4 Orang:</span> Rp 435.000 / pax
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <span className="font-bold text-gray-900">5-6 Orang:</span> Rp 355.000 / pax
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <span className="font-bold text-gray-900">7-10 Orang:</span> Rp 318.000 / pax
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <span className="font-bold text-gray-900">11-15 Orang:</span> Rp 258.000 / pax
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-800">Harga Sudah Termasuk:</h3>
                        <ul className="space-y-2 text-gray-700 ml-4 list-disc">
                            <li>Private AC TRANSPORT</li>
                            <li>Driver,Bbm dan Parking Area</li>
                            <li>Privateboat</li>
                            <li>Snorkling + Alat Snorkling</li>
                            <li>1 X Makan Siang</li>
                            <li>Camera Underwater</li>
                            <li>Dokumentasi dibantu Driver</li>
                            <li>Local Guide</li>
                            <li>Tiket masuk Wisata</li>
                            <li>Masker and Hand Sanitizer</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t pt-8 border-gray-200">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">Harga Tidak Termasuk:</h3>
                    <ul className="space-y-2 text-gray-700 ml-4 list-disc">
                        <li>Hotel,Tiket Pesawat,Pengeluaran Pribadi</li>
                        <li>Makan Malam</li>
                        <li>Lain lain yang tidak tercantum dalam paket.</li>
                    </ul>
                </div>
            </div>

            {/* Notes and CTA */}
            <div className="bg-white rounded-xl p-8 mb-8 shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2 border-gray-200">
                    Ketentuan
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Paket diatas merupakan Private tour atau tidak di gabung dengan peserta lain</li>
                    <li>Harga dapat berubah sewaktu waktu sebelum adanya pembayaran DP</li>
                    <li>Harga dihitung per pax / per orang</li>
                    <li>Itinerary dan waktu bersifat Fleksible dapat disesuaikan dengan kebutuhan</li>
                    <li>Untuk makan malam, tidak termasuk dalam paket namun guide kami akan merekomendasikan tempat makan yang sesuai dengan keinhginan anda</li>
                    <li>Pembarayan dapat dilakukan setelah program atau trip selesai</li>
                    <li>Apabila terdapat permintaan khusus, harap menghubungi kami sebelumnya seperti surprice, perubahan destinasi dll.</li>
                </ul>
            </div>

            {/* WhatsApp Button */}
            <div className="text-center">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Siap Menjelajahi Gili Nanggu?</h3>
                    <p className="text-gray-600 mb-6">Hubungi kami untuk detail harga dan menyusun paket perjalanan Anda yang berkesan!</p>
                    <Link
                        href="https://wa.me/6285337452003?text=Halo%20Admin%ExploreLombok,%20saya%20tertarik%20dengan%20paket%20Trip%20Gili%20Nanggu"
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