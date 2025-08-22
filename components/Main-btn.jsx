import Link from "next/link";

export default function MainBtn({ href, children, className }) {
    return (
        <Link
            href={href}
            className={`inline-block px-6 py-3  text-black font-semibold rounded-full hover:bg-gray-200 transition ${className}`}
        >
            {children}
        </Link>
    );
}
