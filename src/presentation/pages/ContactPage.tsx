import { motion } from "framer-motion";
import { Button } from "@/presentation/components/ui/button";
import Topbar from "../components/Topbar";

const ContactPage = () => {
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
            Liên Hệ Với Chúng Tôi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy liên hệ qua các kênh dưới đây.
          </p>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-xl text-center text-white"
          >
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Email
            </h3>
            <a href="mailto:zenoravn@gmail.com" className="text-white/90 hover:text-white">
              zenoravn@gmail.com
            </a>
          </motion.div>

          {/* Discord */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-8 rounded-xl text-center text-white"
          >
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Discord
            </h3>
            <a href="#" className="text-white/90 hover:text-white">
              Fluency Community
            </a>
            <p className="text-sm text-white/70 mt-2">
              discord.gg/fluency-community
            </p>
          </motion.div>

          {/* Facebook */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-xl text-center text-white"
          >
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Facebook
            </h3>
            <a href="#" className="text-white/90 hover:text-white">
              Fluency English Learning
            </a>
            <p className="text-sm text-white/70 mt-2">
              fb.com/fluency.english.learning
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Nhập họ và tên của bạn"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Chủ đề
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nhập nội dung tin nhắn của bạn"
                  ></textarea>
                </div>
                <div className="text-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Gửi tin nhắn
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Câu Hỏi Thường Gặp
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {contactFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

const contactFaqs = [
  {
    question: "Tôi cần bao lâu để nhận được phản hồi?",
    answer: "Chúng tôi sẽ cố gắng phản hồi trong vòng 24 giờ qua email. Với các kênh Discord và Facebook, thời gian phản hồi có thể nhanh hơn."
  },
  {
    question: "Làm thế nào để được hỗ trợ kỹ thuật nhanh nhất?",
    answer: "Bạn có thể tham gia server Discord của chúng tôi để được hỗ trợ trực tiếp và nhanh chóng nhất."
  },
  {
    question: "Tôi muốn hợp tác với Fluency thì làm thế nào?",
    answer: "Vui lòng gửi email đến zenoravn@gmail.com với tiêu đề 'Hợp tác' hoặc liên hệ qua Discord để trao đổi chi tiết."
  }
];

export default ContactPage;