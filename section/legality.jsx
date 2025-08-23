import React from 'react';
import Image from 'next/image';

const Legalitas = () => {
    return (
        <section className="bg-white py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* This div uses a padding-top trick to maintain a 16:9 aspect ratio.
                  The percentage is calculated as (image_height / image_width) * 100.
                  This makes the container's height responsive to its width.
                */}
                <div className="relative w-full pt-[56.25%] mb-6">
                    <Image
                        src="/oss-1.png"
                        alt="Legalitas document"
                        layout="fill"
                        objectFit="contain" // Ensures the entire image is visible, scaling to fit the container
                    />
                </div>

                <div className="p-6 sm:p-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
                        LEGALITAS KAMI
                    </h2>
                    <div className="text-gray-700 space-y-4">
                        <p className="text-lg">
                            Lembaga OSS Kementerian Investasi/BKPM menyatakan bahwa:
                        </p>
                        <ul className="space-y-2 text-base">
                            <li>
                                <span className="font-semibold text-gray-900">NIB:</span>
                                <span className="ml-2 font-mono text-green-600">0305230055033</span>
                            </li>
                            <li>
                                <span className="font-semibold text-gray-900">Nama Pelaku Usaha / Badan Usaha:</span>
                                <span className="ml-2 text-lg font-bold text-gray-800">PT. EXPLORE LOMBOK TOUR</span>
                            </li>
                            <li>
                                <span className="font-semibold text-gray-900">Skala Usaha:</span>
                                <span className="ml-2">Usaha Mikro</span>
                            </li>
                            <li>
                                <span className="font-semibold text-gray-900">Kode KBLI:</span>
                                <span className="ml-2">79129</span>
                            </li>
                        </ul>
                        <p className="text-lg font-medium text-gray-800 mt-4">
                            Adalah benar, sah, dan tercatat dalam data kami serta diterbitkan oleh Lembaga OSS melalui Sistem OSS Berbasis Risiko.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Legalitas;
