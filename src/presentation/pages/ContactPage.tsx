import Topbar from "../components/Topbar";
import ContactHeroSection from "./sections/contact/ContactHeroSection";
import ContactMethodsSection from "./sections/contact/ContactMethodsSection";
import ContactFormSection from "./sections/contact/ContactFormSection";
import ContactFAQSection from "./sections/contact/ContactFAQSection";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f6f6f0]">
      <Topbar />
      <ContactHeroSection />
      <ContactMethodsSection />
      <ContactFormSection />
      <ContactFAQSection />
    </div>
  );
};

export default ContactPage;