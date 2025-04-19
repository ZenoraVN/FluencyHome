import { motion } from "framer-motion";
import Topbar from "../components/Topbar";

const FeaturesPage = () => {
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
            Tính Năng Nổi Bật
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá các tính năng độc đáo của Fluency giúp bạn học tiếng Anh hiệu quả và thú vị hơn
          </p>
        </motion.div>
      </section>

      {/* Main Features */}
      <section className="container mx-auto px-4 py-16">
        {mainFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-8 mb-20"
          >
            <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <div className={`aspect-video ${feature.bgColor} rounded-xl shadow-lg flex items-center justify-center`}>
                <div className="text-white text-8xl">
                  {feature.icon}
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {feature.description}
              </p>
              <ul className="space-y-4">
                {feature.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Additional Features Grid */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Các Tính Năng Khác
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const mainFeatures = [
  {
    title: "Trợ lý AI thông minh",
    description: "Học với trợ lý AI thông minh, tự động điều chỉnh theo trình độ và phong cách học của bạn.",
    bgColor: "bg-gradient-to-br from-blue-400 to-blue-600",
    icon: (
      <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    points: [
      "Phân tích lỗi sai và đề xuất bài tập phù hợp",
      "Tương tác tự nhiên như người bản xứ",
      "Điều chỉnh tốc độ học theo tiến độ của bạn",
      "Gợi ý từ vựng và cấu trúc phù hợp với ngữ cảnh"
    ]
  },
  {
    title: "Luyện phát âm chuyên sâu",
    description: "Cải thiện phát âm với công nghệ nhận diện giọng nói tiên tiến.",
    bgColor: "bg-gradient-to-br from-purple-400 to-purple-600",
    icon: (
      <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    points: [
      "Phản hồi chi tiết về từng âm tiết",
      "So sánh với giọng chuẩn của người bản xứ",
      "Bài tập phát âm theo chủ đề",
      "Theo dõi tiến độ cải thiện phát âm"
    ]
  },
  {
    title: "Học qua tình huống thực tế",
    description: "Thực hành tiếng Anh qua các tình huống thường gặp trong cuộc sống.",
    bgColor: "bg-gradient-to-br from-green-400 to-green-600",
    icon: (
      <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    points: [
      "Mô phỏng các tình huống giao tiếp thực tế",
      "Học từ vựng và cấu trúc trong ngữ cảnh",
      "Bài tập tương tác đa dạng",
      "Thực hành với nhiều tình huống khác nhau"
    ]
  }
];

const additionalFeatures = [
  {
    title: "Thống kê học tập",
    description: "Theo dõi chi tiết quá trình học tập với biểu đồ và báo cáo trực quan.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "Luyện tập ngoại tuyến",
    description: "Tải bài học để học mọi lúc mọi nơi, không cần kết nối internet.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    )
  },
  {
    title: "Ghi chú thông minh",
    description: "Tự động tổ chức và phân loại ghi chú học tập theo chủ đề.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  }
];

export default FeaturesPage;