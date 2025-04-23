import { motion } from "framer-motion";

const ContactHeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-[#52aaa5] mb-6">
          Liên Hệ Với Chúng Tôi
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy liên hệ qua các kênh dưới đây.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactHeroSection;