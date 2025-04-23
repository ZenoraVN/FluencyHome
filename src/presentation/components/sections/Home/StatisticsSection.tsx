import { motion } from "framer-motion";
import { Users, BookOpen, Trophy, Clock, Star, Target } from "lucide-react";

const StatisticsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "100K+",
      label: "Người Dùng",
      description: "Đang học tập trên Fluency",
      color: "#52aaa5"
    },
    {
      icon: BookOpen,
      value: "5000+",
      label: "Bài Học",
      description: "Tài liệu học tập đa dạng",
      color: "#52aaa5"
    },
    {
      icon: Trophy,
      value: "95%",
      label: "Tỷ Lệ Thành Công",
      description: "Học viên cải thiện trình độ",
      color: "#52aaa5"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Hỗ Trợ",
      description: "Luôn sẵn sàng giúp đỡ bạn",
      color: "#52aaa5"
    },
    {
      icon: Star,
      value: "4.8/5",
      label: "Đánh Giá",
      description: "Từ người dùng trên App Store",
      color: "#52aaa5"
    },
    {
      icon: Target,
      value: "85%",
      label: "Mục Tiêu",
      description: "Học viên đạt mục tiêu đề ra",
      color: "#52aaa5"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Fluency Trong Con Số
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tham gia cộng đồng học viên đang phát triển không ngừng của chúng tôi
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Background Decoration */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, ${stat.color}, transparent)` 
                  }}
                />

                <div className="relative flex items-center gap-6">
                  {/* Icon */}
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
                    style={{ 
                      backgroundColor: `${stat.color}15`,
                      color: stat.color
                    }}
                  >
                    <stat.icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="text-3xl font-bold" style={{ color: stat.color }}>
                      {stat.value}
                    </div>
                    <div className="text-xl font-semibold text-gray-900 mt-1">
                      {stat.label}
                    </div>
                    <div className="text-gray-600 mt-1">
                      {stat.description}
                    </div>
                  </div>
                </div>

                {/* Bottom Decoration */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ backgroundColor: stat.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">
            Số liệu của chúng tôi tăng trưởng mỗi ngày khi có thêm nhiều học viên đạt được mục tiêu tiếng Anh của họ
          </p>
          <button 
            className="px-8 py-3 rounded-lg font-medium text-white transition-all duration-300 hover:shadow-lg"
            style={{ 
              backgroundColor: "#52aaa5",
              boxShadow: "0 4px 14px rgba(82, 170, 165, 0.25)"
            }}
          >
            Tham Gia Ngay
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default StatisticsSection;