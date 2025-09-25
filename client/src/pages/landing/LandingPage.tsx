import CtaSection from "./CtaSection";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import PremiumSection from "./PremiumSection";

const LandingPage = () => {
  return (
    <div className="font-sans">
      <HeroSection />
      <FeatureSection />
      <PremiumSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
