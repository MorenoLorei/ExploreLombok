"use client";

import Image from "next/image";

export default function About() {
    return (
        <section
            id="about"
            className="relative w-full py-16 px-6 md:px-12 bg-gray-50"
        >
            {/* Text */}
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-7">
                    Tentang <span className="text-orange-600">ExploreLombokBali</span>
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>ExploreLombokBali</strong> adalah <strong>agen tour & travel resmi </strong>
                    yang berdiri berkat dedikasi <strong>Ahmed Sukur</strong>, seorang putra daerah Lombok
                    yang memiliki visi untuk memperkenalkan keindahan Lombok dan Bali ke seluruh dunia.
                    Dengan pengalaman bertahun-tahun dalam industri pariwisata, beliau mendirikan ExploreLombokBali
                    untuk memberikan layanan perjalanan terbaik, aman, dan terpercaya.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Sebagai <strong>tour operator terpercaya di Lombok</strong>, kami menawarkan berbagai
                    pilihan <strong>paket wisata Lombok murah</strong>, tour Bali, petualangan ke Gili Islands,
                    perjalanan eksotis ke Mandalika, hingga pendakian Gunung Rinjani. Ribuan wisatawan lokal maupun
                    mancanegara telah merasakan pengalaman liburan berkesan bersama kami, baik untuk liburan keluarga,
                    perjalanan bulan madu, gathering perusahaan, maupun wisata petualangan.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Selain paket wisata, <strong>ExploreLombokBali</strong> juga menyediakan layanan
                    <strong> sewa mobil di Lombok dengan sopir profesional</strong>. Layanan ini memudahkan
                    Anda menjelajahi pulau dengan lebih nyaman, fleksibel, dan efisien. Kami memahami bahwa setiap
                    perjalanan memiliki kebutuhan yang berbeda, sehingga kami menghadirkan armada kendaraan yang bersih,
                    terawat, dan siap menunjang perjalanan Anda selama berada di Lombok dan Bali.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Kami percaya bahwa liburan bukan sekadar perjalanan, melainkan sebuah pengalaman hidup. Dengan lebih
                    dari 5 tahun pengalaman, tim kami berkomitmen untuk memberikan pelayanan ramah, harga kompetitif, serta
                    rekomendasi destinasi terbaik sesuai minat dan kebutuhan Anda. Mulai dari <strong>wisata pantai di Lombok</strong>,
                    <strong> snorkeling di Gili Trawangan</strong>, <strong> surfing di Mandalika</strong>, hingga
                    <strong> trekking Gunung Rinjani</strong>, semua dapat Anda nikmati bersama ExploreLombokBali.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Bersama <strong>Ahmed Sukur</strong> dan tim ExploreLombokBali, jadikan liburan Anda ke Lombok dan Bali
                    lebih bermakna. Kami siap menjadi <strong>partner perjalanan terbaik</strong> untuk menjelajahi surga tropis
                    Indonesia dengan pelayanan yang profesional, ramah, dan penuh dedikasi. 🌴✨
                </p>
            </div>

            {/* SEO Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TravelAgency",
                        name: "Explore Lombok Bali",
                        founder: {
                            "@type": "Person",
                            name: "Ahmed Sukur",
                            jobTitle: "Founder"
                        },
                        url: "https://explorelombokbali.com",
                        logo: "https://explorelombokbali.com/explorelombok.png",
                        description:
                            "Explore Lombok Bali adalah agen tour & travel terpercaya yang menawarkan paket wisata Lombok murah, tour Bali, Gili, Mandalika, pendakian Gunung Rinjani, serta layanan sewa mobil dengan sopir profesional.",
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Lombok",
                            addressRegion: "Nusa Tenggara Barat",
                            addressCountry: "ID",
                        },
                        contactPoint: {
                            "@type": "ContactPoint",
                            telephone: "+62-853-374-52003",
                            contactType: "customer service",
                            areaServed: "ID",
                            availableLanguage: ["Indonesian", "English"],
                        },
                        sameAs: [
                            "https://web.facebook.com/ahmed.sukur.180",
                            "https://www.instagram.com/explorelombok_bali",
                        ],
                    }),
                }}
            />
        </section>
    );
}
