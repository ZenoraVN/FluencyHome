import Topbar from "../components/Topbar";
import HeroSection from "./sections/HeroSection";
import DownloadSection from "./sections/DownloadSection";
import FeaturesSection from "./sections/FeaturesSection";
import StudyMethodsSection from "./sections/StudyMethodsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import FAQSection from "./sections/FAQSection";
import StatisticsSection from "./sections/StatisticsSection";
import QuizSection from "./sections/QuizSection";
import CTASection from "./sections/CTASection";

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