import { motion } from "framer-motion";

interface GuideStep {
  title: string;
  description: string;
  tips: string[];
}

const quickStartGuides: GuideStep[] = [
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

const QuickStartGuideSection = () => {
  return (
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
  );
};

export default QuickStartGuideSection;