import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Slide {
  title: string;
  description: string;
  gradient: string;
  textColor: string;
}

const slides: Slide[] = [
  {
    title: "Học Tiếng Anh Thông Minh với Fluency",
    description: "Ứng dụng học tiếng Anh thông minh với AI, giúp bạn nâng cao trình độ một cách tự nhiên.",
    gradient: "from-[#52aaa5] to-[#3d8080]",
    textColor: "#52aaa5"
  },
  {
    title: "Luyện Nói Cùng Fluency AI",
    description: "Thực hành phát âm và giao tiếp với trợ lý AI thông minh, nhận phản hồi ngay lập tức.",
    gradient: "from-[#52aaa5] to-[#3d8080]",
    textColor: "#52aaa5"
  },
  {
    title: "Cộng Đồng Fluency Toàn Cầu",
    description: "Kết nối với hàng triệu người học trên toàn thế giới, cùng nhau tiến bộ và chia sẻ kinh nghiệm.",
    gradient: "from-[#52aaa5] to-[#3d8080]",
    textColor: "#52aaa5"
  },
  {
    title: "Theo Dõi Tiến Độ với Fluency",
    description: "Hệ thống theo dõi tiến độ chi tiết, giúp bạn nắm rõ quá trình học tập và cải thiện liên tục.",
    gradient: "from-[#52aaa5] to-[#3d8080]",
    textColor: "#52aaa5"
  },
  {
    title: "Fluency Cá Nhân Hóa",
    description: "Lộ trình học tập được điều chỉnh riêng cho từng người, phù hợp với trình độ và mục tiêu của bạn.",
    gradient: "from-[#52aaa5] to-[#3d8080]",
    textColor: "#52aaa5"
  },
  {
    title: "Thành Tích Cùng Fluency",
    description: "Hệ thống phần thưởng và thành tích đa dạng, tạo động lực học tập và ghi nhận sự tiến bộ.",
    gradient: "from-[#52aaa5] to-[#3d8080]",
    textColor: "#52aaa5"
  },
  {
    title: "Fluency Mọi Lúc Mọi Nơi",
    description: "Học tập linh hoạt trên mọi thiết bị, đồng bộ hóa tiến độ để không bỏ lỡ bất kỳ bài học nào.",
    gradient: "from-[#52aaa5] to-[#3d8080]",
    textColor: "#52aaa5"
  },
  {
    title: "Nâng Cao Trình Độ với Fluency",
    description: "Phương pháp học tập hiệu quả, giúp bạn cải thiện toàn diện các kỹ năng tiếng Anh.",
    gradient: "from-[#52aaa5] to-[#3d8080]",
    textColor: "#52aaa5"
  }
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="container mx-auto px-4 min-h-[500px] flex items-center">
      <div className="max-w-4xl mx-auto text-center relative w-full">
        {/* Hidden div to maintain height */}
        <div className="invisible">
          <h1 className="text-6xl font-bold mb-8">{slides[0].title}</h1>
          <p className="text-xl">{slides[0].description}</p>
        </div>

        {/* Actual slides */}
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              zIndex: currentSlide === index ? 10 : 0
            }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <motion.h1 
              className="text-6xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {slide.title.split('Fluency').map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span style={{ color: slide.textColor }}>Fluency</span>
                  )}
                </span>
              ))}
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {slide.description}
            </motion.p>
          </motion.div>
        ))}

        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? 'w-4 bg-[#52aaa5]' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
