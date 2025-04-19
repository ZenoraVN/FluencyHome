import { motion } from "framer-motion";
import Topbar from "../components/Topbar";

const GuidePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Topbar />
      
      {/* Header */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Hướng Dẫn Sử Dụng
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tìm hiểu cách sử dụng Fluency hiệu quả nhất để đạt được mục tiêu học tập của bạn
          </p>
        </motion.div>
      </section>

      {/* Quick Start Guide */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Bắt đầu nhanh
          </h2>
          <div className="space-y-8">
            {quickStartGuides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-blue-600">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Mẹo:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {guide.tips.map((tip, idx) => (
                        <li key={idx}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
                className="bg-gray-50 rounded-lg p-6"
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
    </div>
  );
};

const quickStartGuides = [
  {
    title: "Tạo tài khoản và cài đặt ứng dụng",
    description: "Bắt đầu hành trình học tiếng Anh của bạn bằng cách tạo tài khoản và cài đặt ứng dụng Fluency.",
    tips: [
      "Sử dụng email thường xuyên sử dụng để nhận thông báo",
      "Cài đặt ứng dụng trên nhiều thiết bị để học mọi lúc",
      "Đồng bộ hóa dữ liệu qua tài khoản để không mất tiến độ"
    ]
  },
  {
    title: "Đánh giá trình độ",
    description: "Làm bài kiểm tra đánh giá để xác định trình độ và nhận lộ trình học phù hợp.",
    tips: [
      "Trả lời trung thực để nhận đánh giá chính xác",
      "Không cần chuẩn bị trước khi làm bài kiểm tra",
      "Hoàn thành tất cả các phần của bài kiểm tra"
    ]
  },
  {
    title: "Thiết lập mục tiêu",
    description: "Xác định mục tiêu học tập và thời gian cam kết để học hiệu quả.",
    tips: [
      "Đặt mục tiêu cụ thể và có thể đo lường được",
      "Chia nhỏ mục tiêu thành các cột mốc",
      "Điều chỉnh mục tiêu khi cần thiết"
    ]
  },
  {
    title: "Bắt đầu học tập",
    description: "Bắt đầu với các bài học cơ bản và dần dần tăng độ khó.",
    tips: [
      "Học đều đặn mỗi ngày, dù chỉ 15 phút",
      "Tập trung vào phát âm và ngữ điệu",
      "Thực hành với các tình huống thực tế"
    ]
  }
];

const faqs = [
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

export default GuidePage;