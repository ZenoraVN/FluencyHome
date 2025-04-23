import Topbar from "../components/Topbar";
import FeatureHeroSection from "../components/sections/feature/FeatureHeroSection";
import FeatureShowcaseSection from "../components/sections/feature/FeatureShowcaseSection";
import FeatureComparisonSection from "../components/sections/feature/FeatureComparisonSection";

const FeaturePage = () => {
  return (
    <div className="min-h-screen bg-[#f6f6f0]">
      <Topbar />
      <FeatureHeroSection />
      <FeatureShowcaseSection />
      <FeatureComparisonSection />
    </div>
  );
};

export default FeaturePage;