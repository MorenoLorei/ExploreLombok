"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [tourHarianOpen, setTourHarianOpen] = useState(false);
    const [paketTourOpen, setPaketTourOpen] = useState(false);
    const [paketHoneymoonOpen, setPaketHoneymoonOpen] = useState(false);
    const [mobileTourHarianOpen, setMobileTourHarianOpen] = useState(false);
    const [mobilePaketTourOpen, setMobilePaketTourOpen] = useState(false);
    const [mobilePaketHoneymoonOpen, setMobilePaketHoneymoonOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const tourHarianRef = useRef(null);
    const paketTourRef = useRef(null);
    const paketHoneymoonRef = useRef(null);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 500);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close desktop dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (tourHarianRef.current && !tourHarianRef.current.contains(event.target)) {
                setTourHarianOpen(false);
            }
            if (paketTourRef.current && !paketTourRef.current.contains(event.target)) {
                setPaketTourOpen(false);
            }
            if (paketHoneymoonRef.current && !paketHoneymoonRef.current.contains(event.target)) {
                setPaketHoneymoonOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                scrolled ? "bg-white shadow-md" : "bg-transparent shadow-none"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/explorelombok.png"
                            alt="ExploreLombok Logo"
                            width={180}
                            height={40}
                            className={`h-10 w-auto transition-all duration-300 ${
                                scrolled ? "opacity-100" : "opacity-90"
                            }`}
                            priority
                        />
                    </Link>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link
                            href="#hero"
                            className={`hover:text-yellow-600 transition-colors ${
                                scrolled ? "text-gray-800" : "text-white"
                            }`}
                        >
                            Home
                        </Link>

                        {/* Tour Harian Dropdown */}
                        <div className="relative" ref={tourHarianRef}>
                            <button
                                className={`hover:text-yellow-600 flex items-center transition-colors ${
                                    scrolled ? "text-gray-800" : "text-white"
                                }`}
                                onClick={() => setTourHarianOpen(!tourHarianOpen)}
                            >
                                Tour Harian ▾
                            </button>
                            {tourHarianOpen && (
                                <div
                                    className={`absolute mt-2 w-56 rounded-lg shadow-lg border z-50 ${
                                        scrolled
                                            ? "bg-white text-gray-800"
                                            : "bg-black/80 text-white"
                                    }`}
                                >
                                    <Link href="tours/trip-gili" className="block px-4 py-2 hover:bg-yellow-600 hover:text-white">
                                        Trip Harian Gili Trawangan
                                    </Link>
                                    <Link href="tours/trip-sasak" className="block px-4 py-2 hover:bg-yellow-600 hover:text-white">
                                        Trip Harian Sasak
                                    </Link>
                                    <Link href="tours/trip-pantaipink" className="block px-4 py-2 hover:bg-yellow-600 hover:text-white">
                                        Trip Harian Pantai Pink
                                    </Link>
                                    <Link href="tours/trip-gili-nanggu" className="block px-4 py-2 hover:bg-yellow-600 hover:text-white">
                                        Trip Harian Gili Nanggu
                                    </Link>
                                    <Link href="tours/trip-air-terjun" className="block px-4 py-2 hover:bg-yellow-600 hover:text-white">
                                        Trip Harian Air Terjun
                                    </Link>
                                    <Link href="tours/trip-sembalun" className="block px-4 py-2 hover:bg-yellow-600 hover:text-white">
                                        Trip Harian Sembalun
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Paket Tour Dropdown */}
                        <div className="relative" ref={paketTourRef}>
                            <button
                                className={`hover:text-yellow-600 flex items-center transition-colors ${
                                    scrolled ? "text-gray-800" : "text-white"
                                }`}
                                onClick={() => setPaketTourOpen(!paketTourOpen)}
                            >
                                Paket Tour ▾
                            </button>
                            {paketTourOpen && (
                                <div
                                    className={`absolute mt-2 w-56 rounded-lg shadow-lg border z-50 ${
                                        scrolled
                                            ? "bg-white text-gray-800"
                                            : "bg-black/80 text-white"
                                    }`}
                                >
                                    <Link href="packet/2H1M" className="block px-4 py-2 hover:bg-yellow-600 hover:text-white">
                                        Paket 2HARI 1MALAM
                                    </Link>
                                    <Link href="packet/3H2M" className="block px-4 py-2 hover:bg-yellow-600 hover:text-white">
                                        Paket 3HARI 2MALAM
                                    </Link>
                                    <Link href="packet/4H3M" className="block px-4 py-2 hover:bg-yellow-600 hover:text-white">
                                        Paket 4HARI 3MALAM
                                    </Link>
                                    <Link href="packet/5H4M" className="block px-4 py-2 hover:bg-yellow-600 hover:text-white">
                                        Paket 5HARI 4MALAM
                                    </Link>
                                    <Link href="packet/Tour-komodo3H2M" className="block px-4 py-2 hover:bg-yellow-600 hover:text-white">
                                        Paket KOMODO 3HARI 2MALAM
                                    </Link>
                                    <Link href="packet/Tour-komodo4H3M" className="block px-4 py-2 hover:bg-yellow-600 hover:text-white">
                                        Paket KOMODO 4HARI 3MALAM
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Paket Honeymoon Dropdown */}
                        <div className="relative" ref={paketHoneymoonRef}>
                            <button
                                className={`hover:text-yellow-600 flex items-center transition-colors ${
                                    scrolled ? "text-gray-800" : "text-white"
                                }`}
                                onClick={() => setPaketHoneymoonOpen(!paketHoneymoonOpen)}
                            >
                                Paket Honeymoon ▾
                            </button>
                            {paketHoneymoonOpen && (
                                <div
                                    className={`absolute mt-2 w-56 rounded-lg shadow-lg border z-50 ${
                                        scrolled
                                            ? "bg-white text-gray-800"
                                            : "bg-black/80 text-white"
                                    }`}
                                >
                                    <Link href="packet/honeymoon3H2M" className="block px-4 py-2 hover:bg-yellow-600 hover:text-white">
                                        Honeymoon 3H2M
                                    </Link>
                                    <Link href="packet/honeymoon4H3M" className="block px-4 py-2 hover:bg-yellow-600 hover:text-white">
                                        Honeymoon 4H3M
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            href="#car-rental"
                            className={`hover:text-yellow-600 transition-colors ${
                                scrolled ? "text-gray-800" : "text-white"
                            }`}
                        >
                            Sewa Mobil
                        </Link>
                        <Link
                            href="/kebijakan"
                            className={`hover:text-yellow-600 transition-colors ${
                                scrolled ? "text-gray-800" : "text-white"
                            }`}
                        >
                            Kebijakan Privasi
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className={`md:hidden focus:outline-none ${
                            scrolled ? "text-gray-800" : "text-white"
                        }`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className={`md:hidden shadow-lg ${scrolled ? "bg-white" : "bg-black/20 backdrop-blur-md"}`}>
                    <Link
                        href="/"
                        className={`block px-4 py-3 hover:bg-white/20 transition-colors ${
                            scrolled ? "text-gray-800" : "text-white"
                        }`}
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>

                    {/* Mobile Tour Harian Dropdown */}
                    <div className={`border-t ${scrolled ? "border-gray-200" : "border-white/20"}`}>
                        <button
                            onClick={() => setMobileTourHarianOpen(!mobileTourHarianOpen)}
                            className={`w-full text-left px-4 py-3 hover:bg-white/20 flex justify-between items-center transition-colors ${
                                scrolled ? "text-gray-800" : "text-white"
                            }`}
                        >
                            <span>Tour Harian</span>
                            {mobileTourHarianOpen ? "▴" : "▾"}
                        </button>
                        {mobileTourHarianOpen && (
                            <div className={`${scrolled ? "bg-gray-50 text-gray-800" : "bg-black/10 text-white"}`}>
                                <Link href="tours/trip-gili" className="block px-6 py-2 hover:bg-yellow-600 hover:text-white" onClick={() => setIsOpen(false)}>
                                    Trip Harian Gili Trawangan
                                </Link>
                                <Link href="tours/trip-sasak" className="block px-6 py-2 hover:bg-yellow-600 hover:text-white" onClick={() => setIsOpen(false)}>
                                    Trip Harian Sasak
                                </Link>
                                <Link href="tours/trip-pantaipink" className="block px-6 py-2 hover:bg-yellow-600 hover:text-white" onClick={() => setIsOpen(false)}>
                                    Trip Harian Pantai Pink
                                </Link>
                                <Link href="tours/trip-gili-nanggu" className="block px-6 py-2 hover:bg-yellow-600 hover:text-white" onClick={() => setIsOpen(false)}>
                                    Trip Harian Gili Nanggu
                                </Link>
                                <Link href="tours/trip-air-terjun" className="block px-6 py-2 hover:bg-yellow-600 hover:text-white" onClick={() => setIsOpen(false)}>
                                    Trip Harian Air Terjun
                                </Link>
                                <Link href="tours/trip-sembalun" className="block px-6 py-2 hover:bg-yellow-600 hover:text-white" onClick={() => setIsOpen(false)}>
                                    Trip Harian Sembalun
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Paket Tour Dropdown */}
                    <div className={`border-t ${scrolled ? "border-gray-200" : "border-white/20"}`}>
                        <button
                            onClick={() => setMobilePaketTourOpen(!mobilePaketTourOpen)}
                            className={`w-full text-left px-4 py-3 hover:bg-white/20 flex justify-between items-center transition-colors ${
                                scrolled ? "text-gray-800" : "text-white"
                            }`}
                        >
                            <span>Paket Tour</span>
                            {mobilePaketTourOpen ? "▴" : "▾"}
                        </button>
                        {mobilePaketTourOpen && (
                            <div className={`${scrolled ? "bg-gray-50 text-gray-800" : "bg-black/10 text-white"}`}>
                                <Link href="packet/2H1M" className="block px-6 py-2 hover:bg-yellow-600 hover:text-white" onClick={() => setIsOpen(false)}>
                                    Paket 2HARI 1MALAM
                                </Link>
                                <Link href="packet/3H2M" className="block px-6 py-2 hover:bg-yellow-600 hover:text-white" onClick={() => setIsOpen(false)}>
                                    Paket 3HARI 2MALAM
                                </Link>
                                <Link href="packet/4H3M" className="block px-6 py-2 hover:bg-yellow-600 hover:text-white" onClick={() => setIsOpen(false)}>
                                    Paket 4HARI 3MALAM
                                </Link>
                                <Link href="packet/5H4M" className="block px-6 py-2 hover:bg-yellow-600 hover:text-white" onClick={() => setIsOpen(false)}>
                                    Paket 5HARI 4MALAM
                                </Link>
                                <Link href="packet/Tour-komodo3H2M" className="block px-6 py-2 hover:bg-yellow-600 hover:text-white" onClick={() => setIsOpen(false)}>
                                    Paket KOMODO 3HARI 2MALAM
                                </Link>
                                <Link href="packet/Tour-komodo4H3M" className="block px-6 py-2 hover:bg-yellow-600 hover:text-white" onClick={() => setIsOpen(false)}>
                                    Paket KOMODO 4HARI 3MALAM
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Paket Honeymoon Dropdown */}
                    <div className={`border-t ${scrolled ? "border-gray-200" : "border-white/20"}`}>
                        <button
                            onClick={() => setMobilePaketHoneymoonOpen(!mobilePaketHoneymoonOpen)}
                            className={`w-full text-left px-4 py-3 hover:bg-white/20 flex justify-between items-center transition-colors ${
                                scrolled ? "text-gray-800" : "text-white"
                            }`}
                        >
                            <span>Paket Honeymoon</span>
                            {mobilePaketHoneymoonOpen ? "▴" : "▾"}
                        </button>
                        {mobilePaketHoneymoonOpen && (
                            <div className={`${scrolled ? "bg-gray-50 text-gray-800" : "bg-black/10 text-white"}`}>
                                <Link href="packet/honeymoon3H2M" className="block px-6 py-2 hover:bg-yellow-600 hover:text-white" onClick={() => setIsOpen(false)}>
                                    Honeymoon 3H2M
                                </Link>
                                <Link href="packet/honeymoon4H3M" className="block px-6 py-2 hover:bg-yellow-600 hover:text-white" onClick={() => setIsOpen(false)}>
                                    Honeymoon 4H3M
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link
                        href="#car-rental"
                        className={`block px-4 py-3 hover:bg-white/20 transition-colors ${
                            scrolled ? "text-gray-800" : "text-white"
                        }`}
                        onClick={() => setIsOpen(false)}
                    >
                        Sewa Mobil
                    </Link>
                    <Link
                        href="/kebijakan"
                        className={`block px-4 py-3 hover:bg-white/20 transition-colors ${
                            scrolled ? "text-gray-800" : "text-white"
                        }`}
                        onClick={() => setIsOpen(false)}
                    >
                        Kebijakan Privasi
                    </Link>
                </div>
            )}
        </nav>
    );
}
