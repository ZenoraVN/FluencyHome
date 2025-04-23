import Topbar from "../components/Topbar";
import HeroSection from "./sections/Home/HeroSection";
import DownloadSection from "./sections/Home/DownloadSection";
import FeaturesSection from "./sections/Home/FeaturesSection";
import StudyMethodsSection from "./sections/Home/StudyMethodsSection";
import TestimonialsSection from "./sections/Home/TestimonialsSection";
import FAQSection from "./sections/guide/FAQSection";
import StatisticsSection from "./sections/Home/StatisticsSection";
import QuizSection from "./sections/Home/QuizSection";
import CTASection from "./sections/Home/CTASection";

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