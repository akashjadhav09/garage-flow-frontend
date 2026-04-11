import HomeIntroBanner from "../Sections/HomeIntroBanner";
import ServicesSection from "../Sections/ServicesSection";
import BrandNameStrip from "../Components/BrandNamesStrip";
import OurGarageIntroBanner from "../Sections/OurGarageIntro";
import BookServiceSection from "../Sections/BookServiceSection";
import AddYourVehicleSection from "../Sections/AddYourVehicle";
import MyBookingsSection from "../Sections/MyBookingsSection";
import SelectYourServiceSection from "../Sections/SelectServicesSection";

import ContactUsPage from "./ContactUsPage";
const HomePage = ()=> {
    return(
        <>
            <HomeIntroBanner />
            <ServicesSection />
            <BrandNameStrip />
            <OurGarageIntroBanner />
            <BookServiceSection />
            <AddYourVehicleSection />
            <MyBookingsSection />
            <SelectYourServiceSection />
            <ContactUsPage />
        </>
    )
}

export default HomePage;