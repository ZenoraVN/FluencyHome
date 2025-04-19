import { Button } from "@/presentation/components/ui/button";
import { motion } from "framer-motion";
import Topbar from "../components/Topbar";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Topbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Học Tiếng Anh Thông Minh với
            <span className="text-blue-600"> Fluency</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Ứng dụng học tiếng Anh thông minh với AI, giúp bạn nâng cao trình độ một cách tự nhiên thông qua các bài tập tương tác, hội thoại thực tế và nhận phản hồi ngay lập tức.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Dùng thử miễn phí
            </Button>
            <Button size="lg" variant="outline">
              Xem demo
            </Button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-2xl flex items-center justify-center">
            <div className="text-white text-8xl">
              <svg className="w-32 h-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Download Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tải Fluency Ngay
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mobile */}
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <h3 className="text-2xl font-semibold mb-4">Cho điện thoại</h3>
              <div className="flex flex-col space-y-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v18m0 0l-5.5-5.5M9 21l5.5-5.5" />
                  </svg>
                  Tải cho Android
                </Button>
                <Button size="lg" className="bg-gray-800 hover:bg-gray-900">
                  <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v18m0 0l-5.5-5.5M9 21l5.5-5.5" />
                  </svg>
                  Tải cho iOS
                </Button>
              </div>
            </div>
            {/* Desktop */}
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <h3 className="text-2xl font-semibold mb-4">Cho máy tính</h3>
              <div className="flex flex-col space-y-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v18m0 0l-5.5-5.5M9 21l5.5-5.5" />
                  </svg>
                  Tải cho Windows
                </Button>
                <Button size="lg" className="bg-gray-800 hover:bg-gray-900">
                  <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v18m0 0l-5.5-5.5M9 21l5.5-5.5" />
                  </svg>
                  Tải cho macOS
                </Button>
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v18m0 0l-5.5-5.5M9 21l5.5-5.5" />
                  </svg>
                  Tải cho Linux
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Tại sao chọn Fluency?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
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

      {/* Study Methods Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Phương pháp học hiệu quả
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {studyMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex gap-6"
              >
                <div className="text-4xl text-blue-600 font-bold">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">{method.title}</h3>
                  <p className="text-gray-600">{method.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Bắt đầu hành trình chinh phục tiếng Anh ngay hôm nay
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Tham gia cùng hàng nghìn học viên đã đạt được mục tiêu với Fluency. Dùng thử miễn phí 7 ngày.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Bắt đầu học thử
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    title: "Học với AI thông minh",
    description: "Lộ trình học được cá nhân hóa, tự động điều chỉnh theo trình độ và nhu cầu của bạn.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Luyện nói tương tác",
    description: "Thực hành nói với AI, nhận phản hồi ngay lập tức về phát âm và ngữ điệu.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Nội dung thực tế",
    description: "Học qua tin tức, bài báo và phương tiện truyền thông phổ biến để nâng cao kỹ năng thực tế.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
      </svg>
    ),
  },
  {
    title: "Theo dõi tiến độ",
    description: "Xem chi tiết quá trình học tập và đạt được các mốc thành tích quan trọng.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Học cùng cộng đồng",
    description: "Kết nối với những người học khác, tham gia nhóm học tập và thực hành cùng nhau.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Học mọi lúc mọi nơi",
    description: "Ứng dụng đa nền tảng, đồng bộ hóa tiến độ học tập giữa các thiết bị.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const studyMethods = [
  {
    title: "Phương pháp nghe - nói tự nhiên",
    description: "Học tiếng Anh như cách bạn học tiếng mẹ đẻ, tập trung vào nghe và nói trước khi đi vào ngữ pháp chi tiết."
  },
  {
    title: "Luyện tập thường xuyên",
    description: "Các bài học ngắn 15-20 phút, dễ dàng thực hiện mỗi ngày để duy trì thói quen học tập."
  },
  {
    title: "Tương tác thực tế",
    description: "Thực hành với các tình huống thực tế, giúp bạn tự tin sử dụng tiếng Anh trong cuộc sống."
  },
  {
    title: "Phản hồi chi tiết",
    description: "Nhận xét và góp ý cụ thể cho từng lỗi sai, giúp bạn hiểu và cải thiện nhanh chóng."
  }
];

export default HomePage;