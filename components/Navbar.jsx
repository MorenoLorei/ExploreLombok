"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [tourHarianOpen, setTourHarianOpen] = useState(false);
    const [paketTourOpen, setPaketTourOpen] = useState(false);
    const [paketHoneymoonOpen, setPaketHoneymoonOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const tourHarianRef = useRef(null);
    const paketTourRef = useRef(null);
    const paketHoneymoonRef = useRef(null);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdowns when clicking outside
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
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent shadow-none'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/explorelombok.png"
                            alt="ExploreLombok Logo"
                            width={180}
                            height={40}
                            className={`h-10 w-auto transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-90'}`}
                            priority
                        />
                    </Link>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="#hero" className={`hover:text-yellow-600 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                            Home
                        </Link>

                        {/* Tour Harian Dropdown */}
                        <div className="relative" ref={tourHarianRef}>
                            <button
                                className={`hover:text-yellow-600 flex items-center transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
                                onClick={() => setTourHarianOpen(!tourHarianOpen)}
                            >
                                Tour Harian ▾
                            </button>
                            {tourHarianOpen && (
                                <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                                    <Link href="tours/trip-gili" className="block px-4 py-2 hover:bg-gray-100 transition-colors text-gray-800" onClick={() => setTourHarianOpen(false)}>Trip Harian Gili Trawangan</Link>
                                    <Link href="tours/trip-sasak" className="block px-4 py-2 hover:bg-gray-100 transition-colors text-gray-800" onClick={() => setTourHarianOpen(false)}>Trip Harian Pasak</Link>
                                    <Link href="tours/trip-pantaipink" className="block px-4 py-2 hover:bg-gray-100 transition-colors text-gray-800" onClick={() => setTourHarianOpen(false)}>Trip Harian Pantai Pink</Link>
                                    <Link href="tours/trip-gili-nanggu" className="block px-4 py-2 hover:bg-gray-100 transition-colors text-gray-800" onClick={() => setTourHarianOpen(false)}>Trip Harian Gili Nanggu</Link>
                                    <Link href="tours/trip-air-terjun" className="block px-4 py-2 hover:bg-gray-100 transition-colors text-gray-800" onClick={() => setTourHarianOpen(false)}>Trip Harian Air Terjun</Link>
                                    <Link href="tours/trip-sembalun" className="block px-4 py-2 hover:bg-gray-100 transition-colors text-gray-800" onClick={() => setTourHarianOpen(false)}>Trip Harian Sembalun</Link>
                                </div>
                            )}
                        </div>

                        {/* Paket Tour Dropdown */}
                        <div className="relative" ref={paketTourRef}>
                            <button
                                className={`hover:text-yellow-600 flex items-center transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
                                onClick={() => setPaketTourOpen(!paketTourOpen)}
                            >
                                Paket Tour ▾
                            </button>
                            {paketTourOpen && (
                                <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                                    <Link href="packet/2H1M" className="block px-4 py-2 hover:bg-gray-100 transition-colors text-gray-800" onClick={() => setPaketTourOpen(false)}>Paket 2HARI 1MALAM</Link>
                                    <Link href="packet/3H2M" className="block px-4 py-2 hover:bg-gray-100 transition-colors text-gray-800" onClick={() => setPaketTourOpen(false)}>Paket 3HARI 2MALAM</Link>
                                    <Link href="packet/4H3M" className="block px-4 py-2 hover:bg-gray-100 transition-colors text-gray-800" onClick={() => setPaketTourOpen(false)}>Paket 4HARI 3MALAM</Link>
                                    <Link href="packet/5H4M" className="block px-4 py-2 hover:bg-gray-100 transition-colors text-gray-800" onClick={() => setPaketTourOpen(false)}>Paket 5HARI 4MALAM</Link>
                                    <Link href="packet/Tour-komodo3H2M" className="block px-4 py-2 hover:bg-gray-100 transition-colors text-gray-800" onClick={() => setPaketTourOpen(false)}>Paket KOMODO 3HARI 2MALAM</Link>
                                    <Link href="packet/Tour-komodo4H3M" className="block px-4 py-2 hover:bg-gray-100 transition-colors text-gray-800" onClick={() => setPaketTourOpen(false)}>Paket KOMODO 4HARI 3MALAM</Link>
                                </div>
                            )}
                        </div>

                        {/* Paket Honeymoon Dropdown */}
                        <div className="relative" ref={paketHoneymoonRef}>
                            <button
                                className={`hover:text-yellow-600 flex items-center transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
                                onClick={() => setPaketHoneymoonOpen(!paketHoneymoonOpen)}
                            >
                                Paket Honeymoon ▾
                            </button>
                            {paketHoneymoonOpen && (
                                <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                                    <Link href="packet/honeymoon3H2M" className="block px-4 py-2 hover:bg-gray-100 transition-colors text-gray-800" onClick={() => setPaketHoneymoonOpen(false)}>Honeymoon 3H2M</Link>
                                    <Link href="packet/honeymoon4H3M" className="block px-4 py-2 hover:bg-gray-100 transition-colors text-gray-800" onClick={() => setPaketHoneymoonOpen(false)}>Honeymoon 4H3M</Link>
                                </div>
                            )}
                        </div>

                        <Link href="#car-rental" className={`hover:text-yellow-600 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                            Sewa Mobil
                        </Link>
                        <Link href="/kebijakan" className={`hover:text-yellow-600 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                            Kebijakan Privasi
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className={`md:hidden focus:outline-none ${scrolled ? 'text-gray-800' : 'text-white'}`}
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
                <div className={`md:hidden shadow-lg ${scrolled ? 'bg-white' : 'bg-black/20 backdrop-blur-md'}`}>
                    <Link href="/" className={`block px-4 py-3 hover:bg-white/20 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`} onClick={() => setIsOpen(false)}>Home</Link>

                    {/* Mobile Tour Harian Dropdown */}
                    <div className={`border-t ${scrolled ? 'border-gray-200' : 'border-white/20'}`}>
                        <button onClick={() => setTourHarianOpen(!tourHarianOpen)} className={`w-full text-left px-4 py-3 hover:bg-white/20 flex justify-between items-center transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}><span>Tour Harian</span>
                            {tourHarianOpen ? <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg> : <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>}
                        </button>
                        {tourHarianOpen && (
                            <div className={`${scrolled ? 'bg-gray-50' : 'bg-black/10 backdrop-blur-md'}`}>
                                <Link href="#tour-gili-trawangan" className={`block px-6 py-2 hover:bg-white/20 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`} onClick={() => { setIsOpen(false); setTourHarianOpen(false); }}>Gili Trawangan</Link>
                                <Link href="#tour-sasak-mandalika" className={`block px-6 py-2 hover:bg-white/20 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`} onClick={() => { setIsOpen(false); setTourHarianOpen(false); }}>Sasak Mandalika</Link>
                                <Link href="#tour-pantai-pink" className={`block px-6 py-2 hover:bg-white/20 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`} onClick={() => { setIsOpen(false); setTourHarianOpen(false); }}>Pantai Pink</Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Paket Tour Dropdown */}
                    <div className={`border-t ${scrolled ? 'border-gray-200' : 'border-white/20'}`}>
                        <button onClick={() => setPaketTourOpen(!paketTourOpen)} className={`w-full text-left px-4 py-3 hover:bg-white/20 flex justify-between items-center transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}><span>Paket Tour</span>
                            {paketTourOpen ? <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg> : <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>}
                        </button>
                        {paketTourOpen && (
                            <div className={`${scrolled ? 'bg-gray-50' : 'bg-black/10 backdrop-blur-md'}`}>
                                <Link href="#tour-privat" className={`block px-6 py-2 hover:bg-white/20 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`} onClick={() => { setIsOpen(false); setPaketTourOpen(false); }}>Paket Privat</Link>
                                <Link href="#tour-grup" className={`block px-6 py-2 hover:bg-white/20 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`} onClick={() => { setIsOpen(false); setPaketTourOpen(false); }}>Paket Grup</Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Paket Honeymoon Dropdown */}
                    <div className={`border-t ${scrolled ? 'border-gray-200' : 'border-white/20'}`}>
                        <button onClick={() => setPaketHoneymoonOpen(!paketHoneymoonOpen)} className={`w-full text-left px-4 py-3 hover:bg-white/20 flex justify-between items-center transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}><span>Paket Honeymoon</span>
                            {paketHoneymoonOpen ? <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg> : <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>}
                        </button>
                        {paketHoneymoonOpen && (
                            <div className={`${scrolled ? 'bg-gray-50' : 'bg-black/10 backdrop-blur-md'}`}>
                                <Link href="#honeymoon-2d1n" className={`block px-6 py-2 hover:bg-white/20 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`} onClick={() => { setIsOpen(false); setPaketHoneymoonOpen(false); }}>Honeymoon 2D1N</Link>
                                <Link href="#honeymoon-3d2n" className={`block px-6 py-2 hover:bg-white/20 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`} onClick={() => { setIsOpen(false); setPaketHoneymoonOpen(false); }}>Honeymoon 3D2N</Link>
                            </div>
                        )}
                    </div>

                    <Link href="#sewa-mobil" className={`block px-4 py-3 hover:bg-white/20 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`} onClick={() => setIsOpen(false)}>Sewa Mobil</Link>
                    <Link href="/kebijakan" className={`block px-4 py-3 hover:bg-white/20 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`} onClick={() => setIsOpen(false)}>Kebijakan Privasi</Link>
                </div>
            )}
        </nav>
    );
}