import Topbar from "../components/Topbar";
import GuideHeroSection from "../components/sections/guide/GuideHeroSection";
import QuickStartGuideSection from "../components/sections/guide/QuickStartGuideSection";
import FAQSection from "../components/sections/guide/FAQSection";

const GuidePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Topbar />
      <GuideHeroSection />
      <QuickStartGuideSection />
      <FAQSection />
    </div>
  );
};

export default GuidePage;