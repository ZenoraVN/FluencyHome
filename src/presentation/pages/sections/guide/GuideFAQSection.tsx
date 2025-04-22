import { motion } from "framer-motion";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Tôi nên học bao lâu mỗi ngày?",
    answer: "Chúng tôi khuyến nghị học ít nhất 15-30 phút mỗi ngày. Việc học đều đặn quan trọng hơn là học nhiều trong một lần."
  },
  {
    question: "Làm thế nào để cải thiện phát âm?",
    answer: "Sử dụng tính năng luyện phát âm của Fluency, nghe nhiều và bắt chước người bản xứ. Đừng ngại ghi âm và so sánh với giọng chuẩn."
  },
  {
    question: "Tôi có thể học offline không?",
    answer: "Có, bạn có thể tải các bài học để học offline. Tuy nhiên, một số tính năng như AI conversation sẽ cần kết nối internet."
  },
  {
    question: "Làm sao để duy trì động lực học?",
    answer: "Đặt mục tiêu rõ ràng, tham gia cộng đồng học tập, và sử dụng tính năng theo dõi tiến độ để thấy sự tiến bộ của mình."
  },
  {
    question: "Fluency có phù hợp cho người mới bắt đầu không?",
    answer: "Có, Fluency được thiết kế cho mọi trình độ. Hệ thống sẽ tự động điều chỉnh độ khó phù hợp với trình độ của bạn."
  }
];

const GuideFAQSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Câu Hỏi Thường Gặp
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideFAQSection;