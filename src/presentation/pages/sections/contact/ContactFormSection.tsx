import { motion } from "framer-motion";
import { Button } from "../../../components/ui/button";

const ContactFormSection = () => {
  return (
    <section className="bg-[#f6f6f0] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-[#52aaa5] mb-8 text-center">
              Gửi Tin Nhắn
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#52aaa5] focus:border-transparent transition-all"
                    placeholder="Nhập họ và tên của bạn"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#52aaa5] focus:border-transparent transition-all"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Chủ đề
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#52aaa5] focus:border-transparent transition-all">
                  <option value="">Chọn chủ đề</option>
                  <option value="support">Hỗ trợ kỹ thuật</option>
                  <option value="feedback">Góp ý sản phẩm</option>
                  <option value="partnership">Hợp tác</option>
                  <option value="other">Khác</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nội dung
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#52aaa5] focus:border-transparent transition-all"
                  placeholder="Nhập nội dung tin nhắn của bạn"
                ></textarea>
              </div>
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-[#52aaa5] hover:bg-[#52aaa5]/90 text-white px-8 py-2 rounded-xl transition-colors"
                >
                  Gửi tin nhắn
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;