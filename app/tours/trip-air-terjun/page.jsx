"use client";
import Image from "next/image";

export default function TiuKelepWaterfallTour() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Tour Air Terjun Tiu Kelep
                    </h1>
                </div>

                {/* Description */}
                <div className="mb-12">
                    <p className="text-lg text-gray-700">
                        Berada di Desa Senaru Kabupaten Lombok Utara tepat di bawah lereng gunung Rinjani,
                        Tiu Kelep merupakan air terjun terindah yang paling banyak dikunjungi wisatawan.
                    </p>
                    <p className="text-lg text-gray-700 mt-4">
                        Air terjun Tiu Kelep merupakan tempat wisata favorit selain air terjun Sendang Gile
                        yang juga memiliki keindahan kelas dunia. Airnya yang sangat jernih dan bersih menjadikan
                        keduanya menjadi destinasi favorit para traveler maupun adventure yang menyukai panorama
                        alam hutan yang hijau dan natural.
                    </p>
                    <p className="text-lg text-gray-700 mt-4">
                        Memiliki ketinggian hampir 50 meter, membuat airnya yang jatuh dari ketinggian seakan
                        terbang ke segala arah, membuat suasananya terlihat mengagumkan. Tiu diartikan oleh
                        masyarakat sekitar berarti kolam dan Kelep berarti terbang hingga membuat air terjun
                        ini dinamakan Tiu Kelep.
                    </p>
                </div>

                {/* Main Image */}
                <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg mb-12">
                    <Image
                        src="/tourimage/tiu-kelep.jpg"
                        alt="Air Terjun Tiu Kelep"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Trip Info */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Info Trip</h2>
                    <p><strong>Start:</strong> Kota Mataram / Bandara Internasional Lombok</p>
                    <p><strong>Durasi:</strong> 1 Hari</p>
                </div>

                {/* Itinerary */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Rencana Perjalanan</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Penjemputan di Airport atau lokasi yang disepakati</li>
                        <li>Menuju ke Gunung Pusuk (Monkey Forest)</li>
                        <li>Menuju Basecamp desa wisata, jalur pendakian gunung rinjani Senaru Lombok Utara</li>
                        <li>Soft trekking menyisiri pinggiran hutan Gunung Rinjani ke air terjun Sendang Gile (air terjun pertama)</li>
                        <li>Soft trekking ke-2 menyisiri pinggiran hutan Gunung Rinjani ke air terjun Tiu Kelep (air terjun kedua) ±25 menit sambil menikmati Flora dan Fauna di kawasan Geopark Rinjani</li>
                        <li>Kembali ke Basecamp untuk makan siang</li>
                        <li>Menuju ke Masjid Kuno Bayan (Masjid pertama di pulau lombok)</li>
                        <li>Perjalanan dilanjutkan ke Pantai Senggigi, bukit malaka, Villa hantu (peserta bebas memilih objek wisata pantai)</li>
                        <li>Makan malam dan transfer kembali ke hotel/lokasi yang ditentukan</li>
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
                            <td className="border px-4 py-2">Rp 480.000</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">3-4 Orang</td>
                            <td className="border px-4 py-2">Rp 350.000</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">5-6 Orang</td>
                            <td className="border px-4 py-2">Rp 300.000</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">7-10 Orang</td>
                            <td className="border px-4 py-2">Rp 285.000</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">11-15 Orang</td>
                            <td className="border px-4 py-2">Rp 260.000</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                {/* Inclusions & Exclusions */}
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Harga Termasuk</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>AC Transport</li>
                            <li>Driver, BBM dan Parking Area</li>
                            <li>Tiket masuk Semua Objek Wisata</li>
                            <li>1x Makan Siang</li>
                            <li>Air Mineral</li>
                            <li>Dokumentasi dibantu Driver</li>
                            <li>Local Guide, Tiket Wisata</li>
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
                        href="https://wa.me/6281529408733?text=Halo, saya ingin order Tour Air Terjun Tiu Kelep"
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