import HomeIntroBanner        from "../Sections/HomeIntroBanner";
import ServicesSection        from "../Sections/ServicesSection";
import BrandNameStrip         from "../Components/BrandNamesStrip";
import OurGarageIntroBanner   from "../Sections/OurGarageIntro";
import BookServiceSection      from "../Sections/BookServiceSection";
import AddYourVehicleSection  from "../Sections/AddYourVehicle";
import MyBookingsSection      from "../Sections/MyBookingsSection";
import SelectYourServiceSection from "../Sections/SelectServicesSection";
import Navbar                 from "../Sections/Navbar";
import Footer                 from "../Sections/Footer";
import ContactUsPage          from "./ContactUsPage";

/* ─────────────────────────────────────────────
   Thin wrapper that gives every section its
   scroll-target ID and consistent spacing.
───────────────────────────────────────────── */
const Section = ({ id, children, className = "" }) => (
  <section
    id={id}
    className={`scroll-mt-16 ${className}`}   /* scroll-mt offsets sticky navbar height */
  >
    {children}
  </section>
);

const HomePage = () => (
  <div className="min-h-screen" style={{ backgroundColor: "#E8EDF7" }}>
    <Navbar />

    {/* ── Centred, max-width content column ── */}
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 grid gap-8">

      {/* ① Hero */}
      <Section id="home">
        <HomeIntroBanner />
      </Section>

      {/* ② Services strip — 4-col grid inside the component */}
      <Section id="services">
        <ServicesSection />
      </Section>

      {/* ③ Brand logos */}
      <Section id="brands">
        <BrandNameStrip />
      </Section>

      {/* ④ Add Vehicle  +  Service Selection  (2-col) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <Section id="add-vehicle">
          <AddYourVehicleSection />
        </Section>
        <Section id="select-service">
          <SelectYourServiceSection />
        </Section>
      </div>

      {/* ⑤ Book Service  +  My Bookings  (2-col) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <Section id="book-service">
          <BookServiceSection />
        </Section>
        <Section id="bookings">
          <MyBookingsSection />
        </Section>
      </div>

      {/* ⑥ Our Garage */}
      <Section id="garage">
        <OurGarageIntroBanner />
      </Section>

      {/* ⑦ Contact */}
      <Section id="contact">
        <ContactUsPage />
      </Section>

    </div>

    <Footer />
  </div>
);

export default HomePage;