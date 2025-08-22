"use client";
import Link from "next/link";
import React from "react";

export default function TripWisataSembalun() {
    return (
        <div className="max-w-5xl mx-auto p-6 bg-gray-50 min-h-screen font-sans text-gray-800">
            {/* Header Section */}
            <div className="bg-white rounded-xl p-8 text-center mb-12 shadow-sm border border-gray-200">
                <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4 tracking-wide">
                    Tour Harian
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
                    Wisata Pegunungan Sembalun
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                    Nikmati petualangan di Sembalun, desa yang dikelilingi bukit-bukit cantik di bawah kaki Gunung Rinjani, dengan panorama alam yang memukau.
                </p>
            </div>

            {/* Trip Details Section */}
            <div className="bg-white rounded-xl p-8 mb-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2 border-gray-200">
                    Deskripsi & Rencana Perjalanan
                </h2>
                <div className="space-y-4 mb-6 text-gray-700">
                    <p>
                        Sembalun adalah gerbang utama pendakian menuju Gunung Rinjani. Kawasan ini menawarkan berbagai aktivitas seru seperti Glamping, Soft Trekking, Hiking, hingga Paragliding.
                    </p>
                    <p>
                        **Start:** Kota Mataram / Bandara Internasional Lombok
                        <br />
                        **Durasi:** 1 Hari
                    </p>
                </div>

                <h3 className="text-lg font-semibold mb-3 text-blue-700">Rencana Perjalanan:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Crew kami akan menjemput anda di Airport atau lokasi yang sudah disepakati</li>
                    <li>Menuju ke Pusuk Sembalun dengan melewati hutan pinus yang sejuk dan singgah di beberapa spot foto yang menarik</li>
                    <li>Sampai di pusuk sembalun kita bisa berhenti sejenak untuk melihat Desa Sembalun dari ketinggian kurang lebih 1200 mdpl dan mengabadikan moment menggunakan video atau foto selfie dan kemudian turun ke daerah sembalun</li>
                    <li>Sampai di desa sembalun free and easy menikmati pemandangan alam di bukit selong yang terkenal</li>
                    <li>Makan siang dan cofee break di kedai sawah yang populer</li>
                    <li>Menuju ladang atau kebun apel yang bisa dipetik sendiri</li>
                    <li>Selanjutnya anda bisa memilih menginap jika memilih paket tour 2hari 1malam dan hari kedua bisa dilanjutkan menuju waterfall sendang gile dan tiu kelep ( Optional )</li>
                    <li>Tapi jika tidak, kita langsung kembali ke Mataram dan singgah di Islamic Center dan pusat oleh oleh khas lombok</li>
                    <li>Kemudian kami akan mengantar anda makan malam dan kembali ke hotel</li>
                    <li>Program tour wisata sembalun selesai</li>
                </ul>
            </div>

            {/* Pricing and Inclusions */}
            <div className="bg-white rounded-xl p-8 mb-8 shadow-sm border border-gray-200">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2 border-gray-200">
                            Biaya Trip Wisata Sembalun
                        </h2>
                        <div className="space-y-4">
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <span className="font-bold text-gray-900">2 Orang:</span> Rp 475.000 / pax
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <span className="font-bold text-gray-900">3-4 Orang:</span> Rp 410.000 / pax
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <span className="font-bold text-gray-900">5-6 Orang:</span> Rp 375.000 / pax
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <span className="font-bold text-gray-900">7-10 Orang:</span> Rp 258.000 / pax
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <span className="font-bold text-gray-900">11-15 Orang:</span> Rp 225.000 / pax
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-800">Harga Sudah Termasuk:</h3>
                        <ul className="space-y-2 text-gray-700 ml-4 list-disc">
                            <li>Private AC TRANSPORT</li>
                            <li>Driver,Bbm dan Parking Area</li>
                            <li>1 X Makan Siang</li>
                            <li>Snack Box untuk peserta minimal 10 pax</li>
                            <li>Air Mineral</li>
                            <li>Dokumentasi dibantu Driver</li>
                            <li>Local Guide, dan Tiket masuk Wisata</li>
                            <li>Masker and Hand Sanitizer</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t pt-8 border-gray-200">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">Harga Belum Termasuk:</h3>
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
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Siap untuk Petualangan di Sembalun?</h3>
                    <p className="text-gray-600 mb-6">Hubungi kami untuk detail harga dan menyusun paket perjalanan Anda yang berkesan!</p>
                    <Link
                        href="https://wa.me/6285337452003?text=halo%20admin%20explorelombok,%20saya%20tertarik%20dengan%20paket%20Trip%20Wisata%20Sembalun"
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