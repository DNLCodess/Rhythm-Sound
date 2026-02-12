import AboutUs from "@/components/AboutUs";
import BandMembers from "@/components/BandMembers";
import BookingContact from "@/components/Booking";
import Footer from "@/components/Footer";
import MediaGallery from "@/components/Gallery";
import HeroSwiper from "@/components/HeroSwiper";
import Services from "@/components/Services";
import ServicesMarquee from "@/components/ServicesMarquee";
import TopNavBar from "@/components/TopNavBar";

export const metadata = {
  title: "Rhythm & Sound Band - Premier Live Band in Nigeria",
  description:
    "Exceptional live music for weddings, corporate events, and celebrations across Nigeria.",
};

const HomePage = () => {
  return (
    <>
      <TopNavBar
        menuItems={["home", "about", "services", "team", "media", "contact"]}
        position="sticky"
      />

      <HeroSwiper />

      {/* <section>
        <ServicesMarquee />
      </section> */}

      <AboutUs />

      <Services />

      <BandMembers />

      <MediaGallery />

      <BookingContact />

      <Footer />
    </>
  );
};

export default HomePage;
