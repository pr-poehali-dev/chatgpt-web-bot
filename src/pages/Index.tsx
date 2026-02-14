import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import ChatSection from "@/components/ChatSection";
import PricingSection from "@/components/PricingSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ChatSection />
      <PricingSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;
