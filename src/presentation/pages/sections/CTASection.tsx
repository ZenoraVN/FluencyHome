import { motion } from "framer-motion";
import { Button } from "@/presentation/components/ui/button";
import { Input } from "@/presentation/components/ui/input";
import { Facebook, MessageSquare, Mail, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-[#52aaa5]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-white mb-6">
            <span className="font-medium">✨ Hoàn toàn miễn phí</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bắt đầu hành trình chinh phục tiếng Anh ngay hôm nay
          </h2>
          <p className="text-xl text-[#e6f3f2] mb-8 max-w-2xl mx-auto">
            Tham gia cùng hàng nghìn học viên đã đạt được mục tiêu với Fluency. 
            Không giới hạn tính năng, không chi phí ẩn.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-[#52aaa5] hover:bg-gray-100 mb-12"
          >
            Bắt đầu học ngay
          </Button>

          {/* Email Subscription */}
          <div className="max-w-md mx-auto mb-16">
            <p className="text-white mb-4">Đăng ký nhận thông tin mới nhất từ Fluency</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Email của bạn" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="secondary" className="bg-white text-[#52aaa5] hover:bg-gray-100">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Social Links & Policies */}
        <div className="max-w-4xl mx-auto border-t border-white/20 pt-12">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Social Media */}
            <div>
              <h3 className="text-white font-semibold mb-4">Kết nối với chúng tôi</h3>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <a 
                  href="https://facebook.com/fluency" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="https://discord.gg/fluency" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <MessageSquare className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:contact@fluency.edu.vn"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">Liên hệ</h3>
              <p className="text-white/80">
                Email: contact@fluency.edu.vn<br />
                Discord: discord.gg/fluency
              </p>
            </div>

            {/* Policies */}
            <div>
              <h3 className="text-white font-semibold mb-4">Chính sách</h3>
              <div className="space-y-2">
                <a 
                  href="/privacy" 
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Chính sách bảo mật
                </a>
                <a 
                  href="/terms" 
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Điều khoản sử dụng
                </a>
                <a 
                  href="/community" 
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Quy tắc cộng đồng
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-12 text-white/60">
            <p>© 2025 Fluency. Tất cả các quyền được bảo lưu.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;