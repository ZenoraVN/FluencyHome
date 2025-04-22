import { motion } from "framer-motion";
import { Headphones, Clock, Globe, MessageCircle } from "lucide-react";

interface StudyMethod {
  title: string;
  description: string;
  icon: JSX.Element;
  color: {
    primary: string;
    light: string;
  };
}

const studyMethods: StudyMethod[] = [
  {
    title: "Phương pháp nghe - nói tự nhiên",
    description: "Học tiếng Anh như cách bạn học tiếng mẹ đẻ, tập trung vào nghe và nói trước khi đi vào ngữ pháp chi tiết.",
    icon: <Headphones className="w-8 h-8" />,
    color: {
      primary: "#FF6B6B",
      light: "#FFF0F0"
    }
  },
  {
    title: "Luyện tập thường xuyên",
    description: "Các bài học ngắn 15-20 phút, dễ dàng thực hiện mỗi ngày để duy trì thói quen học tập.",
    icon: <Clock className="w-8 h-8" />,
    color: {
      primary: "#4ECDC4",
      light: "#E8F8F7"
    }
  },
  {
    title: "Tương tác thực tế",
    description: "Thực hành với các tình huống thực tế, giúp bạn tự tin sử dụng tiếng Anh trong cuộc sống.",
    icon: <Globe className="w-8 h-8" />,
    color: {
      primary: "#FFD93D",
      light: "#FFF8E1"
    }
  },
  {
    title: "Phản hồi chi tiết",
    description: "Nhận xét và góp ý cụ thể cho từng lỗi sai, giúp bạn hiểu và cải thiện nhanh chóng.",
    icon: <MessageCircle className="w-8 h-8" />,
    color: {
      primary: "#6C5CE7",
      light: "#F0EDFF"
    }
  }
];

const StudyMethodsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Phương pháp học hiệu quả
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá cách học tiếng Anh hiệu quả và phù hợp với bạn
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {studyMethods.map((method, index) => (
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
                  background: `linear-gradient(135deg, ${method.color.primary}15, ${method.color.primary}05)`
                }}
              />
              
              {/* Card Content */}
              <div className="relative p-8 rounded-2xl bg-white border border-gray-100 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  {/* Number and Icon Container */}
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110 duration-300"
                      style={{ 
                        backgroundColor: method.color.light,
                        color: method.color.primary
                      }}
                    >
                      {method.icon}
                    </div>
                    <div 
                      className="text-3xl font-bold"
                      style={{ color: method.color.primary }}
                    >
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 
                      className="text-2xl font-semibold mb-4 group-hover:text-gray-900 transition-colors duration-300"
                      style={{ color: method.color.primary }}
                    >
                      {method.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div 
                  className="absolute top-4 right-4 w-24 h-24 rounded-full opacity-10"
                  style={{ 
                    background: `radial-gradient(circle, ${method.color.primary}, transparent)` 
                  }}
                />

                {/* Bottom Decoration */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ 
                    backgroundColor: method.color.primary 
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

export default StudyMethodsSection;