"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CarRental = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("/data/carRental.json");
                if (!response.ok) throw new Error("Gagal memuat data");
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                console.error("Error:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-black"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="bg-red-100 border border-red-400 text-red-700 px-8 py-6 rounded-lg max-w-md text-center">
                    <h3 className="text-xl font-bold mb-2">Error</h3>
                    <p>{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Coba Lagi
                    </button>
                </div>
            </div>
        );
    }

    return (
        <section className="py-16 bg-blue-100" id="car-rental">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        PILIHAN SEWA MOBIL LOMBOK
                    </h2>
                    <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
                    <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                        Temukan armada terlengkap untuk kenyamanan dan kebebasan menjelajahi keindahan Lombok
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((p) => (
                        <div
                            key={p.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden">
                                <div className="absolute top-4 left-4 bg-gray-700 text-white text-sm font-bold px-3 py-1 rounded-full z-10">
                                    SEWA MOBIL
                                </div>
                                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                    <Image
                                        src={p.imageUrl}
                                        alt={p.name}
                                        width={500}
                                        height={300}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                        placeholder="blur"
                                        blurDataURL="/placeholder-car.jpg"
                                        onError={(e) => {
                                            e.currentTarget.src = "/placeholder-car.jpg";
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                                </div>

                                <p className="text-gray-600 mb-4 flex-grow">{p.description}</p>
                                <p className="text-gray-800 font-bold mb-5">
                                    {p.price}/12 jam
                                </p>

                                {/* Button pinned to bottom */}

                                <Link
                                    href={p.link}
                                    className="w-full bg-blue-700 text-center text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-[1.02] mt-auto"
                                >
                                    Pesan Sekarang
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CarRental;