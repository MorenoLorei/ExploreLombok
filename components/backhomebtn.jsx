import Link from "next/link";
import React from "react";

const BackToHomeButton = () => {
    return (
        <div className="text-center mt-12">
            <Link href="/" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors">
                ← Kembali ke Beranda
            </Link>
        </div>
    );
};

export default BackToHomeButton;
