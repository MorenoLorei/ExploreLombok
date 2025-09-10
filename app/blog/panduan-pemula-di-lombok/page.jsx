"use client";
import React from "react";
import BackToHomeButton from "@/section/components/backhomebtn";

const PanduanPemulaLombok = () => {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            {/* Hero / Title */}
            <header className="mb-12 text-center bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg py-12 px-6 shadow-md">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-900">
                    Panduan Santai untuk Pemula di Lombok
                </h1>
                <p className="text-lg text-purple-800 italic">
                    Liburan di Lombok nggak perlu ribet! Ini tips dari aku buat pemula.
                </p>
            </header>

            {/* Content */}
            <section className="space-y-12">
                {/* Introduction */}
                <div className="bg-white/80 p-6 rounded-lg shadow-sm">
                    <p>
                        Baru pertama kali ke Lombok? Tenang, dengan sedikit persiapan, perjalananmu bakal lebih lancar dan menyenangkan. Mulai dari mengenal budaya sampai merencanakan aktivitas seru, semua bisa diatur sebelum sampai.
                    </p>
                    <p>
                        Di sini aku rangkum semua hal penting yang perlu kamu tahu supaya liburan pertamamu di Lombok berjalan mulus dan penuh petualangan.
                    </p>
                </div>

                {/* Transportasi */}
                <div className="bg-white/80 p-6 rounded-lg shadow-sm">
                    <h2 className="font-bold text-2xl text-pink-600 border-l-4 border-pink-400 pl-3 mb-4">
                        Cara ke Lombok & Transportasi
                    </h2>
                    <p>
                        Untuk sampai ke Lombok gampang banget. Ada Bandara Internasional Lombok yang menerima banyak penerbangan. Dari Bali juga bisa naik kapal cepat, pesawat, atau feri umum.
                    </p>
                    <p>
                        Transportasi umum terbatas, jadi kalau mau keliling pulau lebih leluasa, sewa mobil atau skuter aja. Atau kalau mau santai, bisa pakai jasa sopir.
                    </p>
                    <blockquote className="border-l-4 border-purple-400 pl-4 italic bg-purple-50 p-3 rounded my-4">
                        Tip: Sewa skuter kalau mau keliling pulau dengan cepat, lebih fleksibel!
                    </blockquote>
                </div>

                {/* Cuaca */}
                <div className="bg-white/80 p-6 rounded-lg shadow-sm">
                    <h2 className="font-bold text-2xl text-pink-600 border-l-4 border-pink-400 pl-3 mb-4">
                        Cuaca
                    </h2>
                    <p>
                        Lombok itu tropis dan hangat. Musim hujan biasanya dari Oktober sampai April, sementara musim kemarau dari Mei sampai September.
                    </p>
                    <p>
                        Tips: bawa pakaian ringan, sunblock, dan topi. Baju renang? Pakai cuma di pantai aja. Sarung juga handy, bisa dibeli di sana kalau perlu.
                    </p>
                </div>

                {/* Mata Uang & Kebutuhan */}
                <div className="bg-white/80 p-6 rounded-lg shadow-sm">
                    <h2 className="font-bold text-2xl text-pink-600 border-l-4 border-pink-400 pl-3 mb-4">
                        Mata Uang & Kebutuhan Sehari-hari
                    </h2>
                    <p>
                        Di Lombok, kita pakai Rupiah (IDR). Uang tunai masih paling banyak dipakai, tapi di kota besar kartu juga diterima.
                    </p>
                    <p>
                        Untuk kebutuhan medis dan perlengkapan pribadi, terutama di kota kecil, agak sulit dicari. Jadi pastikan bawa persediaan cukup dari rumah.
                    </p>
                </div>

                {/* Budaya & Agama */}
                <div className="bg-white/80 p-6 rounded-lg shadow-sm">
                    <h2 className="font-bold text-2xl text-pink-600 border-l-4 border-pink-400 pl-3 mb-4">
                        Budaya & Agama
                    </h2>
                    <p>
                        Mayoritas penduduk Lombok muslim dan sebagian besar adalah suku Sasak. Mereka sangat menjaga tradisi, jadi hormati aturan lokal saat berkunjung.
                    </p>
                </div>

                {/* Petualangan */}
                <div className="bg-white/80 p-6 rounded-lg shadow-sm">
                    <h2 className="font-bold text-2xl text-pink-600 border-l-4 border-pink-400 pl-3 mb-4">
                        Petualangan & Tempat Menarik
                    </h2>
                    <p>
                        Mau trekking? Gunung Rinjani siap menantangmu, tapi kalau belum siap mendaki, cukup jelajahi Taman Nasional Gunung Rinjani sehari aja. Pemandangannya tetap keren!
                    </p>
                    <p>
                        Hutan Monyet Pusuk seru buat ketemu monyet-monyet lucu, dan sawah Tetebatu atau Bukit Selong menawarkan panorama hijau yang bikin adem mata.
                    </p>
                    <p>
                        Pantai Pink wajib dikunjungi—pasirnya merah muda! Paling cantik saat matahari terbit atau terbenam.
                    </p>
                </div>

                {/* Akomodasi */}
                <div className="bg-white/80 p-6 rounded-lg shadow-sm">
                    <h2 className="font-bold text-2xl text-pink-600 border-l-4 border-pink-400 pl-3 mb-4">
                        Tempat Menginap
                    </h2>
                    <p>
                        Pilihan utama biasanya di Senggigi atau Kuta. Senggigi terkenal dengan bar, restoran, dan sunset-nya. Kuta selatan populer buat peselancar. Mataram memberi nuansa kota dan pusat belanja.
                    </p>
                    <p>
                        Jangan lupa Kepulauan Gili—Gili Meno, Gili Trawangan, dan Gili Air. Tiap pulau punya vibes unik, dari yang tenang sampai nightlife seru.
                    </p>
                    <p>
                        Mau sehari atau seminggu di Lombok, pulau ini punya segalanya buat liburan santai atau penuh petualangan. Siap-siap jatuh cinta sama Lombok!
                    </p>
                </div>
            </section>
            <BackToHomeButton />
        </article>
    );
};

export default PanduanPemulaLombok;
