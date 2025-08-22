"use client";
import Image from "next/image";

export default function PinkBeachTour() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Tour Pantai Pink
                    </h1>
                    <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                        Pantai Pink merupakan salah satu tempat wisata populer yang terletak di ujung timur pulau Lombok.
                        Keunikannya sebagai salah satu dari tujuh pantai di dunia dengan pasir berwarna pink membuatnya wajib dikunjungi.
                    </p>
                </div>

                {/* Main Image */}
                <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg mb-12">
                    <Image
                        src="/tourimage/pink-beach.jpg" // Replace with your image
                        alt="Pantai Pink Lombok"
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

                {/* Destinations */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Destinasi</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Pantai Pink 1</li>
                        <li>Pantai Pink 2</li>
                        <li>Bukit Tangsi</li>
                        <li>Gili Petelu (Snorkeling)</li>
                        <li>Gili Gambir (Snorkeling)</li>
                        <li>Pulau Pasir</li>
                    </ul>
                </div>

                {/* Itinerary */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Rencana Perjalanan</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Crew kami akan menjemput anda di Airport atau lokasi yang sudah disepakati</li>
                        <li>Menuju dermaga Tanjung Luar untuk penyebrangan ke Pink Beach menggunakan private boat</li>
                        <li>Snorkeling Trip di Gili Petelu dan Gili Gambir</li>
                        <li>Free time dan makan siang di Pink Beach 1</li>
                        <li>Berfoto di Bukit Tangsi</li>
                        <li>Lanjutkan ke Pink Beach 2 dan Pink Beach 3</li>
                        <li>Kunjungi Pulau Pasir (spot foto indah)</li>
                        <li>Menuju Mataram dan mengunjungi Pusat Oleh-oleh Khas Lombok</li>
                        <li>Makan malam di daerah Mataram dan transfer ke hotel - Program selesai</li>
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
                            <td className="border px-4 py-2">Rp 675.000</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">3-4 Orang</td>
                            <td className="border px-4 py-2">Rp 460.000</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">5-6 Orang</td>
                            <td className="border px-4 py-2">Rp 385.000</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">7-10 Orang</td>
                            <td className="border px-4 py-2">Rp 365.000</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">11-15 Orang</td>
                            <td className="border px-4 py-2">Rp 290.000</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                {/* Inclusions & Exclusions */}
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Harga Termasuk</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Private transport AC</li>
                            <li>Driver, BBM dan Parking Area</li>
                            <li>Private boat Snorkeling + Alat</li>
                            <li>1x Makan Siang</li>
                            <li>Snack Box Tea and Coffee Time Break</li>
                            <li>Air Mineral</li>
                            <li>Dokumentasi dibantu driver</li>
                            <li>Local Guide</li>
                            <li>Prokes (masker / sanitizer)</li>
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
                <div>
                    <h2 className="text-2xl font-bold mb-4">Ketentuan</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Paket merupakan private tour, tidak digabung dengan peserta lain</li>
                        <li>Harga dihitung per pax / per orang</li>
                        <li>Itinerary dan waktu fleksibel sesuai kebutuhan</li>
                        <li>Makan malam tidak termasuk (guide akan rekomendasikan tempat makan)</li>
                        <li>Pembayaran dapat dilakukan setelah program selesai</li>
                        <li>Permintaan khusus (surprise, perubahan destinasi) harap hubungi kami sebelumnya</li>
                    </ul>
                </div>

                {/* WhatsApp Button */}
                <div className="mt-12 text-center">
                    <a
                        href="https://wa.me/6281529408733?text=Halo, saya ingin order trip Pantai Pink"
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