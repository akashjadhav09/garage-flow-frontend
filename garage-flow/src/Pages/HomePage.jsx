import HomeIntroBanner from "../Sections/HomeIntroBanner";
import ServicesSection from "../Sections/ServicesSection";
import BrandNameStrip from "../Components/BrandNamesStrip";
import OurGarageIntroBanner from "../Sections/OurGarageIntro";
import BookServiceSection from "../Sections/BookServiceSection";

const HomePage = ()=> {
    return(
        <>
            <HomeIntroBanner />
            <ServicesSection />
            <BrandNameStrip />
            <OurGarageIntroBanner />
            <BookServiceSection />
        </>
    )
}

export default HomePage;