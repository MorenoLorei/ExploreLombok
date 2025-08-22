"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const dropdownRef = useRef(null);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) { // Change 100 to your desired scroll threshold
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
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
                        <Link href="/" className={`hover:text-yellow-600 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                            Home
                        </Link>
                        <Link href="/explore" className={`hover:text-yellow-600 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                            Explore
                        </Link>

                        {/* Dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                className={`hover:text-yellow-600 flex items-center transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                Services ▾
                            </button>
                            {dropdownOpen && (
                                <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                                    <Link
                                        href="/support"
                                        className="block px-4 py-2 hover:bg-gray-100 transition-colors text-gray-800"
                                        onClick={() => setDropdownOpen(false)}
                                    >
                                        Customer Service
                                    </Link>
                                    <Link
                                        href="/packages"
                                        className="block px-4 py-2 hover:bg-gray-100 transition-colors text-gray-800"
                                        onClick={() => setDropdownOpen(false)}
                                    >
                                        Tour Packages
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="block px-4 py-2 hover:bg-gray-100 transition-colors text-gray-800"
                                        onClick={() => setDropdownOpen(false)}
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link href="/about" className={`hover:text-yellow-600 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                            About
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

            {/* Mobile dropdown - Now transparent when not scrolled */}
            {isOpen && (
                <div className={`md:hidden shadow-lg ${scrolled ? 'bg-white' : 'bg-black/20 backdrop-blur-md'}`}>
                    <Link
                        href="/"
                        className={`block px-4 py-3 hover:bg-white/20 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/explore"
                        className={`block px-4 py-3 hover:bg-white/20 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
                        onClick={() => setIsOpen(false)}
                    >
                        Explore
                    </Link>

                    {/* Mobile Dropdown */}
                    <div className={`border-t ${scrolled ? 'border-gray-200' : 'border-white/20'}`}>
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className={`w-full text-left px-4 py-3 hover:bg-white/20 flex justify-between items-center transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
                        >
                            <span>Services</span>
                            {dropdownOpen ? (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                            ) : (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            )}
                        </button>
                        {dropdownOpen && (
                            <div className={`${scrolled ? 'bg-gray-50' : 'bg-black/10 backdrop-blur-md'}`}>
                                <Link
                                    href="/support"
                                    className={`block px-6 py-2 hover:bg-white/20 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
                                    onClick={() => {
                                        setIsOpen(false);
                                        setDropdownOpen(false);
                                    }}
                                >
                                    Customer Service
                                </Link>
                                <Link
                                    href="/packages"
                                    className={`block px-6 py-2 hover:bg-white/20 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
                                    onClick={() => {
                                        setIsOpen(false);
                                        setDropdownOpen(false);
                                    }}
                                >
                                    Tour Packages
                                </Link>
                                <Link
                                    href="/contact"
                                    className={`block px-6 py-2 hover:bg-white/20 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
                                    onClick={() => {
                                        setIsOpen(false);
                                        setDropdownOpen(false);
                                    }}
                                >
                                    Contact Us
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link
                        href="/about"
                        className={`block px-4 py-3 hover:bg-white/20 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </Link>
                </div>
            )}
        </nav>
    );
}