import { motion } from "framer-motion";
import Topbar from "../components/Topbar";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f6f6f0]">
      <Topbar />
      
      {/* Header */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-[#52aaa5] mb-6">
            Blog Fluency
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chia sẻ kinh nghiệm, phương pháp và các mẹo học tiếng Anh hiệu quả
          </p>
        </motion.div>
      </section>

      {/* Featured Posts */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-[#52aaa5] to-[#52aaa5]/80 flex items-center justify-center">
                {post.icon}
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-4 py-1.5 bg-[#52aaa5]/10 text-[#52aaa5] rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-[#52aaa5] transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <a href="#" className="text-[#52aaa5] font-medium hover:underline inline-flex items-center">
                  Đọc thêm
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Recent Posts */}
      <section className="bg-[#f6f6f0] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#52aaa5] mb-12">
            Bài Viết Mới
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
              >
                <div className="h-32 bg-gradient-to-br from-[#52aaa5] to-[#52aaa5]/80 flex items-center justify-center">
                  {post.icon}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-[#52aaa5]/10 text-[#52aaa5] rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#52aaa5] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <a href="#" className="text-[#52aaa5] font-medium hover:underline inline-flex items-center">
                    Đọc thêm
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const featuredPosts = [
  {
    title: "7 Phương Pháp Học Tiếng Anh Hiệu Quả Nhất 2024",
    excerpt: "Khám phá các phương pháp học tiếng Anh mới nhất và hiệu quả nhất, được chứng minh bởi các nghiên cứu khoa học và kinh nghiệm thực tế.",
    category: "Phương pháp học",
    date: "15 tháng 4, 2024",
    icon: (
      <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: "Cách Luyện Phát Âm Tiếng Anh Chuẩn Như Người Bản Xứ",
    excerpt: "Hướng dẫn chi tiết cách luyện phát âm tiếng Anh, từ các nguyên âm cơ bản đến ngữ điệu và nhấn nhá trong câu.",
    category: "Phát âm",
    date: "12 tháng 4, 2024",
    icon: (
      <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    )
  }
];

const recentPosts = [
  {
    title: "Top 10 Ứng Dụng Học Tiếng Anh Tốt Nhất",
    excerpt: "So sánh và đánh giá các ứng dụng học tiếng Anh phổ biến nhất hiện nay.",
    category: "Công nghệ",
    date: "10 tháng 4, 2024",
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Cách Vượt Qua Nỗi Sợ Nói Tiếng Anh",
    excerpt: "Các bí quyết giúp bạn tự tin hơn khi giao tiếp bằng tiếng Anh.",
    category: "Tâm lý học",
    date: "8 tháng 4, 2024",
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    title: "Học Tiếng Anh Qua Phim: Hướng Dẫn Chi Tiết",
    excerpt: "Phương pháp học tiếng Anh hiệu quả thông qua việc xem phim và series.",
    category: "Giải trí",
    date: "5 tháng 4, 2024",
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  }
];

export default BlogPage;