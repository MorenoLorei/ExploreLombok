"use client";
import Image from "next/image";

export default function GiliNangguTour() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Snorkeling Trip Gili Nanggu
                    </h1>
                </div>

                {/* Description */}
                <div className="mb-12">
                    <p className="text-lg text-gray-700">
                        Paket Trip Gili Nanggu adalah paket wisata yang menyediakan fasilitas snorkeling untuk mengeksplor keindahan alam bawah laut di ujung barat Pulau Lombok. Perjalanan membutuhkan waktu sekitar 1 jam 20 menit dari Mataram atau 1 jam 30 menit dari Bandara Internasional Lombok.
                    </p>
                    <p className="text-lg text-gray-700 mt-4">
                        Kami menyediakan semua kebutuhan trip termasuk transportasi, makan, boat transfer, dan alat snorkeling. Anda juga akan mengunjungi Gili Sudak dan Gili Kedis yang memiliki pantai berpasir putih dan pemandangan bawah laut yang menakjubkan.
                    </p>
                </div>

                {/* Main Image */}
                <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg mb-12">
                    <Image
                        src="/tourimage/gili-nanggu.jpg"
                        alt="Gili Nanggu"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Trip Info */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Info Trip</h2>
                    <p><strong>Start:</strong> Kota Mataram / Bandara Lombok</p>
                    <p><strong>Durasi:</strong> 1 Hari</p>
                </div>

                {/* Itinerary */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Rencana Perjalanan</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Penjemputan di Airport atau lokasi yang disepakati</li>
                        <li>Perjalanan ke Dermaga Tawun Sekotong (1.5 jam)</li>
                        <li>Penyebrangan ke Gili Nanggu dengan Private Boat (10-20 menit)</li>
                        <li>Snorkeling menikmati keindahan alam bawah laut</li>
                        <li>Makan siang dan bersantai di Gili Sudak</li>
                        <li>Snorkeling atau bersantai di Gili Kedis</li>
                        <li>Kembali ke Lombok dan menuju Mataram</li>
                        <li>Kunjungi Pusat Oleh-oleh Khas Lombok (Optional)</li>
                        <li>Makan malam dan transfer kembali ke hotel</li>
                    </ul>
                </div>

                {/* Pricing */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Biaya Trip</h2>
                    <table className="w-full text-left border-collapse border border-gray-200 mb-6">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-200 px-4 py-2">Banyak Peserta</th>
                            <th className="border border-gray-200 px-4 py-2">Harga / pax</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="border px-4 py-2">2 Orang</td>
                            <td className="border px-4 py-2">Rp 570.000</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">3-4 Orang</td>
                            <td className="border px-4 py-2">Rp 435.000</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">5-6 Orang</td>
                            <td className="border px-4 py-2">Rp 355.000</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">7-10 Orang</td>
                            <td className="border px-4 py-2">Rp 318.000</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">11-15 Orang</td>
                            <td className="border px-4 py-2">Rp 258.000</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                {/* Inclusions & Exclusions */}
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Harga Termasuk</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Private AC Transport</li>
                            <li>Driver, BBM dan Parking Area</li>
                            <li>Private Boat</li>
                            <li>Snorkeling + Alat Snorkeling</li>
                            <li>1x Makan Siang</li>
                            <li>Camera Underwater</li>
                            <li>Dokumentasi dibantu Driver</li>
                            <li>Local Guide</li>
                            <li>Tiket masuk Wisata</li>
                            <li>Masker and Hand Sanitizer</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">Harga Tidak Termasuk</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Hotel, Tiket Pesawat, Pengeluaran Pribadi</li>
                            <li>Makan Malam</li>
                            <li>Lain-lain yang tidak tercantum dalam paket</li>
                        </ul>
                    </div>
                </div>

                {/* Notes */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Ketentuan</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Paket merupakan private tour (tidak digabung dengan peserta lain)</li>
                        <li>Harga dapat berubah sewaktu-waktu sebelum pembayaran DP</li>
                        <li>Harga dihitung per pax / per orang</li>
                        <li>Itinerary dan waktu fleksibel sesuai kebutuhan</li>
                        <li>Makan malam tidak termasuk (guide akan rekomendasikan tempat makan)</li>
                        <li>Pembayaran dapat dilakukan setelah program selesai</li>
                        <li>Permintaan khusus harap hubungi kami sebelumnya</li>
                    </ul>
                </div>

                {/* WhatsApp Button */}
                <div className="mt-12 text-center">
                    <a
                        href="https://wa.me/6281529408733?text=Halo, saya ingin order Trip Gili Nanggu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-all"
                    >
                        Pesan via WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}