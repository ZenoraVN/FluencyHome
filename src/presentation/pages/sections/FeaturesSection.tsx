import { motion } from "framer-motion";
import {
  Brain,
  MessageSquare,
  Newspaper,
  LineChart,
  Users,
  Smartphone,
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
  color: {
    primary: string;
    light: string;
  };
}

const features: Feature[] = [
  {
    title: "Học với AI thông minh",
    description: "Lộ trình học được cá nhân hóa, tự động điều chỉnh theo trình độ và nhu cầu của bạn.",
    icon: <Brain className="w-7 h-7" />,
    color: {
      primary: "#FF6B6B",
      light: "#FFF0F0"
    }
  },
  {
    title: "Luyện nói tương tác",
    description: "Thực hành nói với AI, nhận phản hồi ngay lập tức về phát âm và ngữ điệu.",
    icon: <MessageSquare className="w-7 h-7" />,
    color: {
      primary: "#4ECDC4",
      light: "#E8F8F7"
    }
  },
  {
    title: "Nội dung thực tế",
    description: "Học qua tin tức, bài báo và phương tiện truyền thông phổ biến để nâng cao kỹ năng thực tế.",
    icon: <Newspaper className="w-7 h-7" />,
    color: {
      primary: "#FFD93D",
      light: "#FFF8E1"
    }
  },
  {
    title: "Theo dõi tiến độ",
    description: "Xem chi tiết quá trình học tập và đạt được các mốc thành tích quan trọng.",
    icon: <LineChart className="w-7 h-7" />,
    color: {
      primary: "#6C5CE7",
      light: "#F0EDFF"
    }
  },
  {
    title: "Học cùng cộng đồng",
    description: "Kết nối với những người học khác, tham gia nhóm học tập và thực hành cùng nhau.",
    icon: <Users className="w-7 h-7" />,
    color: {
      primary: "#A8E6CF",
      light: "#F3FBF8"
    }
  },
  {
    title: "Học mọi lúc mọi nơi",
    description: "Ứng dụng đa nền tảng, đồng bộ hóa tiến độ học tập giữa các thiết bị.",
    icon: <Smartphone className="w-7 h-7" />,
    color: {
      primary: "#FF8B94",
      light: "#FFF1F2"
    }
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tại sao chọn Fluency?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá những tính năng độc đáo giúp việc học tiếng Anh trở nên hiệu quả và thú vị hơn
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Hover Background Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ 
                  background: `linear-gradient(135deg, ${feature.color.primary}15, ${feature.color.primary}05)`
                }}
              />
              
              {/* Card Content */}
              <div className="relative p-8 rounded-2xl bg-white border border-gray-100 shadow-lg group-hover:shadow-xl transition-all duration-300">
                {/* Icon Container */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300"
                  style={{ 
                    backgroundColor: feature.color.light,
                    color: feature.color.primary
                  }}
                >
                  {feature.icon}
                </div>

                {/* Decorative Elements */}
                <div 
                  className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-10"
                  style={{ 
                    background: `radial-gradient(circle, ${feature.color.primary}, transparent)` 
                  }}
                />

                {/* Content */}
                <h3 
                  className="text-2xl font-semibold mb-4 group-hover:text-gray-900 transition-colors duration-300"
                  style={{ 
                    color: feature.color.primary 
                  }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom Decoration */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ 
                    backgroundColor: feature.color.primary 
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;