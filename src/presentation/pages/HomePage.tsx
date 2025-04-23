import Topbar from "../components/Topbar";
import HeroSection from "../components/sections/Home/HeroSection";
import DownloadSection from "../components/sections/Home/DownloadSection";
import FeaturesSection from "../components/sections/Home/FeaturesSection";
import StudyMethodsSection from "../components/sections/Home/StudyMethodsSection";
import TestimonialsSection from "../components/sections/Home/TestimonialsSection";
import FAQSection from "../components/sections/guide/FAQSection";
import StatisticsSection from "../components/sections/Home/StatisticsSection";
import QuizSection from "../components/sections/Home/QuizSection";
import CTASection from "../components/sections/Home/CTASection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#f6f6f0]">
      <Topbar />
      <HeroSection />
      <QuizSection />
      <DownloadSection />
      <StatisticsSection />
      <FeaturesSection />
      <StudyMethodsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default HomePage;