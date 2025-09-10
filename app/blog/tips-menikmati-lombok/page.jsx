"use client";
import React from "react";
import Link from "next/link";
import BackToHomeButton from "@/section/components/backhomebtn";

const TipsWisataLombok = () => {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            {/* Hero / Title */}
            <header className="mb-12 text-center bg-gradient-to-r from-green-200 to-blue-200 rounded-lg py-12 px-6 shadow-md">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-900">
                    Panduan Lengkap & Tips Menikmati Wisata Lombok
                </h1>
                <p className="text-lg text-green-800 italic">
                    Tips santai buat liburan seru di Lombok, dari pantai cantik, Gili, hingga petualangan alam.
                </p>
            </header>

            <section className="space-y-12">
                {/* Tip 1 */}
                <div className="bg-white/80 p-6 rounded-lg shadow-sm">
                    <h2 className="font-bold text-2xl text-blue-600 border-l-4 border-blue-400 pl-3 mb-4">
                        Pilih Waktu Kunjungan yang Tepat
                    </h2>
                    <p>
                        Lombok memiliki iklim tropis dengan dua musim utama: musim kemarau dari Mei sampai September, dan musim hujan dari Oktober hingga April. Untuk wisata pantai, snorkeling, atau trekking ke Gunung Rinjani, sebaiknya datang saat musim kemarau untuk pengalaman terbaik.
                    </p>
                    <p>
                        Musim kemarau juga membuat jalanan lebih aman, air laut jernih, dan matahari bersinar lebih banyak. Kalau ingin menghindari keramaian, kunjungi Lombok pada weekdays atau awal musim kemarau.
                    </p>
                    <blockquote className="border-l-4 border-green-400 pl-4 italic bg-green-50 p-3 rounded my-4">
                        Tip: Hindari musim hujan jika ingin snorkeling atau naik gunung. Air terjun bisa lebih deras, tapi jalur trekking licin.
                    </blockquote>
                </div>

                {/* Tip 2 */}
                <div className="bg-white/80 p-6 rounded-lg shadow-sm">
                    <h2 className="font-bold text-2xl text-blue-600 border-l-4 border-blue-400 pl-3 mb-4">
                        Eksplorasi Pantai & Kepulauan Gili
                    </h2>
                    <p>
                        Lombok punya banyak pantai cantik yang wajib dikunjungi. Pantai Senggigi terkenal untuk sunset, Pantai Kuta Lombok cocok untuk surfing, dan Pantai Pink di selatan menawarkan pasir merah muda yang unik.
                    </p>
                    <p>
                        Jangan lupa Gili Trawangan, Gili Air, dan Gili Meno untuk snorkeling, diving, atau sekadar bersantai di tepi laut. Setiap pulau punya vibe berbeda: Gili Trawangan ramai dengan hiburan, Gili Air lebih santai, dan Gili Meno cocok untuk liburan tenang.
                    </p>
                    <blockquote className="border-l-4 border-green-400 pl-4 italic bg-green-50 p-3 rounded my-4">
                        Tip: Sewa sepeda atau jalan kaki di Gili Trawangan. Tidak ada motor, jadi lebih santai dan ramah lingkungan.
                    </blockquote>
                </div>

                {/* Tip 3 */}
                <div className="bg-white/80 p-6 rounded-lg shadow-sm">
                    <h2 className="font-bold text-2xl text-blue-600 border-l-4 border-blue-400 pl-3 mb-4">
                        Cicipi Kuliner Lokal Lombok
                    </h2>
                    <p>
                        Wisata Lombok tidak lengkap tanpa mencicipi kuliner lokal. Beberapa makanan khas yang wajib dicoba:
                    </p>
                    <ul className="list-disc pl-6 my-3">
                        <li><strong>Sate Rembiga:</strong> Daging sapi pedas yang dibakar dengan bumbu khas Lombok.</li>
                        <li><strong>Ayam Taliwang:</strong> Ayam bakar pedas manis, favorit para wisatawan.</li>
                        <li><strong>Plecing Kangkung:</strong> Sayur kangkung pedas dengan bumbu kacang dan tomat segar.</li>
                        <li><strong>Es Goyang atau Es Kelapa Muda:</strong> Segar untuk menyejukkan tubuh setelah panas di pantai.</li>
                    </ul>
                    <blockquote className="border-l-4 border-green-400 pl-4 italic bg-green-50 p-3 rounded my-4">
                        Tip: Selalu bawa botol minum dan snack lokal untuk perjalanan panjang. Banyak tempat wisata jaraknya berjauhan.
                    </blockquote>
                </div>

                {/* Tip 4 */}
                <div className="bg-white/80 p-6 rounded-lg shadow-sm">
                    <h2 className="font-bold text-2xl text-blue-600 border-l-4 border-blue-400 pl-3 mb-4">
                        Trekking & Petualangan Alam
                    </h2>
                    <p>
                        Gunung Rinjani adalah ikon Lombok untuk pecinta trekking. Tidak perlu mendaki puncak jika belum berpengalaman, cukup pilih jalur pendek ke Air Terjun Sendang Gile atau Air Terjun Tiu Kelep untuk pengalaman mendaki yang menantang tapi aman.
                    </p>
                    <p>
                        Selain Rinjani, Hutan Monyet Pusuk menawarkan pengalaman bertemu satwa liar dan udara segar. Sawah di Tetebatu atau Bukit Selong menghadirkan pemandangan hijau menenangkan.
                    </p>
                    <blockquote className="border-l-4 border-green-400 pl-4 italic bg-green-50 p-3 rounded my-4">
                        Tip: Gunakan guide lokal untuk trekking agar lebih aman dan dapat cerita menarik tentang budaya Sasak.
                    </blockquote>
                </div>

                {/* Tip 5 */}
                <div className="bg-white/80 p-6 rounded-lg shadow-sm">
                    <h2 className="font-bold text-2xl text-blue-600 border-l-4 border-blue-400 pl-3 mb-4">
                        Transportasi & Tips Keliling Pulau
                    </h2>
                    <p>
                        Transportasi umum di Lombok terbatas. Untuk fleksibilitas, sewa motor atau mobil. Jika ingin santai, jasa sopir harian bisa jadi pilihan. Pastikan juga membawa peta offline karena sinyal di beberapa daerah terbatas.
                    </p>
                    <p>
                        Untuk Gili, sepeda atau jalan kaki adalah cara terbaik, karena motor tidak diperbolehkan. Jangan lupa membawa masker atau kain penutup saat berkeliling karena beberapa jalan berdebu.
                    </p>
                    <blockquote className="border-l-4 border-green-400 pl-4 italic bg-green-50 p-3 rounded my-4">
                        Tip: Pastikan helm dan peralatan keselamatan jika menyewa motor. Jangan tergesa-gesa, nikmati setiap perjalanan.
                    </blockquote>
                </div>

                {/* Tip 6 */}
                <div className="bg-white/80 p-6 rounded-lg shadow-sm">
                    <h2 className="font-bold text-2xl text-blue-600 border-l-4 border-blue-400 pl-3 mb-4">
                        Akomodasi & Tempat Menginap
                    </h2>
                    <p>
                        Pilihan penginapan di Lombok beragam, dari homestay murah sampai resort mewah. Beberapa area populer:
                    </p>
                    <ul className="list-disc pl-6 my-3">
                        <li><strong>Senggigi:</strong> Dekat bar, restoran, dan sunset cantik.</li>
                        <li><strong>Kuta Selatan:</strong> Surfer-friendly, vibe santai.</li>
                        <li><strong>Mataram:</strong> Ibu kota, cocok untuk belanja dan kuliner lokal.</li>
                        <li><strong>Kepulauan Gili:</strong> Homestay dan villa dengan pemandangan laut langsung.</li>
                    </ul>
                    <p>
                        Pilih akomodasi sesuai gaya liburan, apakah santai di pantai, petualangan trekking, atau kombinasi keduanya.
                    </p>
                </div>

                {/* Closing */}
                <div className="bg-white/80 p-6 rounded-lg shadow-sm text-center">
                    <p className="font-semibold">
                        Dengan panduan lengkap ini, liburan di Lombok akan lebih nyaman, aman, dan tentunya penuh pengalaman tak terlupakan. Selamat menjelajah pulau cantik ini!
                    </p>
                </div>
            </section>
            <BackToHomeButton />
        </article>
    );
};

export default TipsWisataLombok;
