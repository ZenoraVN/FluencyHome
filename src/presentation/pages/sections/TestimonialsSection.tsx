import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Nguyễn Thị Hương",
      role: "Sinh viên Đại học",
      image: "/testimonials/huong.jpg",
      quote: "Fluency đã giúp tôi tự tin hơn rất nhiều trong giao tiếp tiếng Anh. Các bài tập tương tác và phản hồi thời gian thực thực sự hiệu quả.",
    },
    {
      name: "Trần Văn Minh",
      role: "Chuyên viên kinh doanh",
      image: "/testimonials/minh.jpg", 
      quote: "Tôi cần cải thiện tiếng Anh để phát triển sự nghiệp. Các bài học về Business English của Fluency chính xác là những gì tôi đang tìm kiếm.",
    },
    {
      name: "Lê Thu Trang",
      role: "Giáo viên",
      image: "/testimonials/trang.jpg",
      quote: "Phương pháp học của ứng dụng rất khoa học và hấp dẫn. Tôi đã thấy sự tiến bộ rõ rệt trong điểm IELTS của mình kể từ khi sử dụng Fluency.",
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Người Dùng Nói Gì Về Fluency?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tham gia cùng hàng nghìn học viên đã cải thiện khả năng tiếng Anh với Fluency
          </p>
        </motion.div>
        
        <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-lg group-hover:shadow-xl group-hover:scale-[1.02] transition-all duration-300">
                {/* Quote Icon */}
                <div 
                  className="absolute -top-4 right-8 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#52aaa5" }}
                >
                  <Quote className="w-4 h-4 text-white" />
                </div>

                {/* User Info */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      className="w-16 h-16 rounded-full object-cover border-2"
                      style={{ borderColor: "#52aaa5" }}
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div 
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ backgroundColor: "#52aaa5" }}
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-[#52aaa5] font-medium">{testimonial.role}</p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="relative">
                  <p className="text-gray-600 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  {/* Decorative Element */}
                  <div 
                    className="absolute -bottom-2 left-0 w-16 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ backgroundColor: "#52aaa5" }}
                  />
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;