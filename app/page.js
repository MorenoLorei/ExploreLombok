
import Hero from "@/components/section/Hero";
import Navbar from "@/components/components/Navbar";
import Tour from "@/components/section/Tour";
import Footer from "@/section/section/Footer";
import Paket from "@/section/section/Paket";
import HoneymoonPackages from "@/section/section/Honeymoon";
import Paketlabuanbajo from "@/section/section/labuanbajo";
import SewaMobil from "@/section/section/SewaMobil";

export default function Main() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Tour />
                <Paket />
                <Paketlabuanbajo />
                <HoneymoonPackages />
                <SewaMobil />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}
