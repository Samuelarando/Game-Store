import Navbar from "../Components/Navigasi";
import Hero from "../Components/Hero"
import PromoAndCategories from "../Components/PromoAndCategories"
import FeaturedProducts from "../Components/FeaturedProducts"
import ProductListingPage from "../Components/ProductListingPage"
import Testimonials from "../Components/Testimonials";

export default function Home() {
  return (
    <div className=" text-white min-h-screen">
        <Navbar />
        <Hero />
        <PromoAndCategories />
        <FeaturedProducts />
        <ProductListingPage />
        <Testimonials />
    </div>
  );
}