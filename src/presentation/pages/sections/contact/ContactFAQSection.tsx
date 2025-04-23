import { motion } from "framer-motion";

interface FAQ {
  question: string;
  answer: string;
}

const contactFaqs: FAQ[] = [
  {
    question: "Tôi cần bao lâu để nhận được phản hồi?",
    answer: "Chúng tôi sẽ cố gắng phản hồi trong vòng 24 giờ qua email. Với các kênh Discord và Facebook, thời gian phản hồi có thể nhanh hơn."
  },
  {
    question: "Làm thế nào để được hỗ trợ kỹ thuật nhanh nhất?",
    answer: "Bạn có thể tham gia server Discord của chúng tôi để được hỗ trợ trực tiếp và nhanh chóng nhất."
  },
  {
    question: "Tôi muốn hợp tác với Fluency thì làm thế nào?",
    answer: "Vui lòng gửi email đến zenoravn@gmail.com với tiêu đề 'Hợp tác' hoặc liên hệ qua Discord để trao đổi chi tiết."
  }
];

const ContactFAQSection = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center text-[#52aaa5] mb-12">
        Câu Hỏi Thường Gặp
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {contactFaqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold text-[#52aaa5] mb-3">
              {faq.question}
            </h3>
            <p className="text-gray-600">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ContactFAQSection;