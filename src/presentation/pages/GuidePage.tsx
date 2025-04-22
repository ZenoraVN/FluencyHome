import Topbar from "../components/Topbar";
import GuideHeroSection from "./sections/guide/GuideHeroSection";
import QuickStartGuideSection from "./sections/guide/QuickStartGuideSection";
import GuideFAQSection from "./sections/guide/GuideFAQSection";

const GuidePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Topbar />
      <GuideHeroSection />
      <QuickStartGuideSection />
      <GuideFAQSection />
    </div>
  );
};

export default GuidePage;