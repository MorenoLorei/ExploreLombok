"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("/data/blog.json");
                if (!response.ok) throw new Error("Gagal memuat data");
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                console.error("Error:", err);
                setError(err.message || "Terjadi kesalahan");
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
        <section className="py-16 bg-white" id="tour">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        BLOG
                    </h2>
                    <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
                    <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                        Temukan tips and trick seputar berpetualang di lombok
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex space-x-6 pb-4">
                        {products.map((p) => (
                            <div
                                key={p.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 flex flex-col min-w-[300px] max-w-[320px]"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                        <Image
                                            src={p.imageUrl}
                                            alt={p.name}
                                            width={500}
                                            height={300}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                            loading="lazy"
                                            placeholder="blur"
                                            blurDataURL="/placeholder.png"
                                            onError={(e) => {
                                                e.currentTarget.src = "/placeholder.png";
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {p.name}
                                    </h3>
                                    <p className="text-gray-600 mb-5 flex-grow">{p.description}</p>

                                    <Link
                                        href={p.link}
                                        className="w-full bg-black text-center text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-[1.02] mt-auto"
                                    >
                                        Baca
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
