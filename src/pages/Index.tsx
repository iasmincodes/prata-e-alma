import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import AtelierSection from "@/components/AtelierSection";
import ContactSection from "@/components/ContactSection";
import InstagramSection from "@/components/InstagramSection";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <GallerySection />
        <AboutSection />
        <AtelierSection />
        <ContactSection />
        <InstagramSection />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
};

export default Index;
