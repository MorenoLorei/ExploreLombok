
import Hero from "@/components/section/Hero";
import Navbar from "@/components/components/Navbar";
import Tour from "@/components/section/Tour";
import Footer from "@/section/section/Footer";
import Paket from "@/section/section/Paket";
import HoneymoonPackages from "@/section/section/Honeymoon";
import Paketlabuanbajo from "@/section/section/labuanbajo";
import Legalitas from "@/section/section/legality";
import SocialMediaSection from "@/section/section/social";
import CarRental from "@/section/section/SewaMobil";
import BaliTour from "@/section/section/bali";
import Blog from "@/section/section/blog";
import About from "@/section/section/about";

export default function Main() {
    return (
        <>
            <Navbar/>
            <main>
                <Hero/>
                <Tour/>
                <Paket/>
                <BaliTour/>
                <Paketlabuanbajo/>
                <HoneymoonPackages/>
                <CarRental/>
                <Blog/>
                <SocialMediaSection/>
                <About />
                <Legalitas/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
}
