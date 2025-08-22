"use client";
import Image from "next/image";
import { useState } from "react";

export default function SasakTourMandalika() {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg mb-16">
                    <Image
                        src="/tourimage/mandalika-hero.jpg"
                        alt="Mandalika Beach"
                        fill
                        className="object-cover brightness-75"
                        priority
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                                Sasak Tour Mandalika
                            </h1>
                            <p className="text-xl text-white max-w-2xl mx-auto drop-shadow-md">
                                Jelajahi Keindahan Budaya & Pantai Eksotis Lombok Selatan
                            </p>
                        </div>
                    </div>
                </div>

                {/* Intro Section */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Full Day Kuta Mandalika Tour
                    </h2>
                    <p className="text-lg text-gray-700">
                        Paket wisata yang membawa Anda mengeksplor keindahan destinasi budaya
                        dan pantai di selatan Lombok. Nikmati Desa Adat Sade, Pantai Kuta
                        Mandalika, Tanjung Aan, Bukit Merese, hingga Sirkuit MotoGP dengan
                        fasilitas lengkap.
                    </p>
                </div>

                {/* Highlights Grid */}
                <div className="bg-gray-50 p-8 rounded-2xl mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
                        Yang Anda Dapatkan
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: "🏝️",
                                title: "Pantai Eksotis",
                                desc: "Kuta, Tanjung Aan & Bukit Merese",
                            },
                            {
                                icon: "👘",
                                title: "Budaya Sasak",
                                desc: "Desa Sade & Tenun Sukarara",
                            },
                            {
                                icon: "🏍️",
                                title: "Sirkuit MotoGP",
                                desc: "Spot foto ikonik",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                            >
                                <span className="text-4xl mb-3 block">{item.icon}</span>
                                <h3 className="font-bold text-xl mb-2 text-gray-900">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Destinations Gallery */}
                <div className="my-16">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
                        Destinasi Favorit
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            {
                                img: "/mandacir.jpg",
                                alt: "Desa Sade",
                                caption: "Desa Adat Sade",
                            },
                            {
                                img: "/mandacir.jpg",
                                alt: "Pantai Tanjung Aan",
                                caption: "Pantai Tanjung Aan",
                            },
                            {
                                img: "/mandacir.jpg",
                                alt: "Bukit Merese",
                                caption: "Bukit Merese",
                            },
                            {
                                img: "/mandacir.jpg",
                                alt: "Sirkuit Mandalika",
                                caption: "Sirkuit MotoGP",
                            },
                            {
                                img: "/mandacir.jpg",
                                alt: "Tenun Sukarara",
                                caption: "Tenun Sukarara",
                            },
                            {
                                img: "/mandacir.jpg",
                                alt: "Sunset Mandalika",
                                caption: "Sunset Point",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="relative h-48 md:h-64 rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform group"
                            >
                                <Image
                                    src={item.img}
                                    alt={item.alt}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/30 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-white font-medium">{item.caption}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trip Info */}
                <div className="mb-16 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">Info Trip</h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <span className="text-2xl mr-3">⏱️</span>
                                <div>
                                    <h3 className="font-semibold text-lg">Durasi</h3>
                                    <p>08:00 - Selesai (Full Day)</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span className="text-2xl mr-3">📍</span>
                                <div>
                                    <h3 className="font-semibold text-lg">Start Point</h3>
                                    <p>Kota Mataram / Bandara Lombok</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span className="text-2xl mr-3">👥</span>
                                <div>
                                    <h3 className="font-semibold text-lg">Jenis Tour</h3>
                                    <p>Private (Tidak digabung dengan peserta lain)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                        <Image
                            src="/tourimage/mandalika-map.jpg"
                            alt="Peta Mandalika"
                            width={600}
                            height={400}
                            className="rounded-lg"
                        />
                    </div>
                </div>

                {/* Itinerary */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
                        Rencana Perjalanan
                    </h2>
                    <div className="relative">
                        <div className="absolute left-4 h-full w-0.5 bg-gray-200 md:left-1/2 md:-ml-1"></div>
                        {[
                            {
                                time: "08:00",
                                title: "Penjemputan",
                                desc: "Meet & greet di hotel/bandara",
                            },
                            {
                                time: "08:30",
                                title: "Tenun Sukarara",
                                desc: "Kunjungi sentra tenun tradisional (±25 menit dari Mataram)",
                            },
                            {
                                time: "10:00",
                                title: "Desa Sade",
                                desc: "Eksplor budaya Sasak di desa adat",
                            },
                            {
                                time: "12:00",
                                title: "Pantai Kuta",
                                desc: "Wisata pantai & makan siang",
                            },
                            {
                                time: "14:00",
                                title: "Tanjung Aan",
                                desc: "Pantai dengan pasir putih dan air jernih",
                            },
                            {
                                time: "16:00",
                                title: "Bukit Merese",
                                desc: "Trekking ringan menikmati sunset",
                            },
                            {
                                time: "18:00",
                                title: "Kembali",
                                desc: "Transfer kembali ke hotel/bandara",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className={`relative mb-8 md:flex ${
                                    i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                }`}
                            >
                                <div
                                    className={`bg-white p-6 rounded-xl shadow-md w-full md:w-5/12 relative ${
                                        i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                                    }`}
                                >
                                    <div className="absolute -left-10 top-6 w-8 h-8 rounded-full bg-green-500 border-4 border-white flex items-center justify-center text-white font-bold md:left-auto md:-right-10">
                                        {i + 1}
                                    </div>
                                    <div className="flex items-center mb-2">
                    <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full text-sm font-medium">
                      {item.time}
                    </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-700">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pricing */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
                        Biaya Tour
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                            <tr className="bg-green-600 text-white">
                                <th className="p-4 rounded-tl-xl">Jumlah Peserta</th>
                                <th className="p-4">Harga per Orang</th>
                                <th className="p-4 rounded-tr-xl">Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            {[
                                { people: 2, price: 410000 },
                                { people: 3, price: 330000 },
                                { people: 5, price: 280000 },
                                { people: 7, price: 245000 },
                                { people: 11, price: 230000 },
                            ].map((item, i) => (
                                <tr
                                    key={i}
                                    className={`${
                                        i % 2 === 0 ? "bg-gray-50" : "bg-white"
                                    } hover:bg-green-50`}
                                >
                                    <td className="p-4 font-medium">{item.people} Orang</td>
                                    <td className="p-4">Rp {item.price.toLocaleString()}</td>
                                    <td className="p-4 font-semibold">
                                        Rp {(item.people * item.price).toLocaleString()}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Inclusions & Exclusions */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-green-50 p-6 rounded-xl">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900">
                            Harga Termasuk
                        </h2>
                        <ul className="space-y-3">
                            {[
                                "Private AC Transport",
                                "Driver + BBM + Parkir",
                                "Tiket masuk semua destinasi",
                                "1x Makan Siang",
                                "Air Mineral",
                                "Dokumentasi oleh driver",
                                "Local Guide",
                                "Masker & Hand Sanitizer",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-red-50 p-6 rounded-xl">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900">
                            Harga Tidak Termasuk
                        </h2>
                        <ul className="space-y-3">
                            {[
                                "Hotel & Tiket Pesawat",
                                "Makan Malam",
                                "Pengeluaran pribadi",
                                "Aktivitas tambahan",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="text-red-600 mr-2">✗</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* FAQ */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 w-full">
                        Pertanyaan Umum
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: "Apakah bisa request destinasi lain?",
                                a: "Bisa! Tour bersifat privat dan fleksibel. Anda bisa diskusikan perubahan itinerary dengan driver/guide.",
                            },
                            {
                                q: "Bagaimana jika hujan saat tour?",
                                a: "Kami menyediakan ponco dan akan menyesuaikan itinerary dengan kondisi cuaca.",
                            },
                            {
                                q: "Apakah ada batasan usia untuk tour ini?",
                                a: "Tidak ada. Tour cocok untuk semua usia, termasuk anak-anak dan lansia.",
                            },
                            {
                                q: "Bagaimana cara pembayarannya?",
                                a: "Pembayaran bisa dilakukan cash setelah tour selesai atau transfer sebelum tour (untuk booking).",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="border border-gray-200 rounded-xl overflow-hidden"
                            >
                                <button
                                    className={`w-full p-4 text-left font-medium flex justify-between items-center ${
                                        activeAccordion === i ? "bg-gray-50" : ""
                                    }`}
                                    onClick={() => toggleAccordion(i)}
                                >
                                    <span>{item.q}</span>
                                    <span className="text-xl">
                    {activeAccordion === i ? "−" : "+"}
                  </span>
                                </button>
                                {activeAccordion === i && (
                                    <div className="p-4 pt-0 text-gray-700">{item.a}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center bg-[url('/tourimage/mandalika-cta.jpg')] bg-cover bg-center py-16 rounded-2xl shadow-inner">
                    <div className="backdrop-blur-sm bg-white/90 p-8 rounded-xl inline-block mx-4">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                            Siap Berpetualang di Mandalika?
                        </h3>
                        <p className="mb-6 text-gray-700 max-w-md mx-auto">
                            Pesan sekarang dan dapatkan pengalaman tak terlupakan di Lombok!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/6281529408733?text=Halo,%20saya%20ingin%20pesan%20Sasak%20Tour%20Mandalika"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-all shadow-lg"
                            >
                                <Image
                                    src="/whatsapp-icon.png"
                                    alt="WhatsApp"
                                    width={24}
                                    height={24}
                                    className="mr-2"
                                />
                                Pesan via WhatsApp
                            </a>
                            <a
                                href="tel:+6281529408733"
                                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-all shadow-lg"
                            >
                                <Image
                                    src="/phone-icon.png"
                                    alt="Phone"
                                    width={24}
                                    height={24}
                                    className="mr-2"
                                />
                                Telepon Kami
                            </a>
                        </div>
                        <p className="mt-4 text-sm text-gray-600">
                            Respon cepat dalam 5 menit!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}