import React from "react";

export default function Footer() {
    return (
        <div className="mt-20 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap justify-center gap-8">
                <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Home</a>
                <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Explore</a>
                <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Services</a>
                <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">About</a>
            </div>
            <p className="mt-6 text-center text-gray-500">
                © {new Date().getFullYear()} ExploreLombok. All rights reserved.
            </p>
        </div>
    );
};