import { Button } from "@/presentation/components/ui/button";
import { motion } from "framer-motion";
import { Smartphone, MonitorIcon, Terminal } from "lucide-react";

interface DownloadOption {
  platform: string;
  type: "mobile" | "desktop";
  icon: JSX.Element;
  description: string;
  requirements: string[];
  features: string[];
  colors: {
    from: string;
    to: string;
    hover: string;
    iconBg: string;
  };
}

const downloadOptions: DownloadOption[] = [
  {
    platform: "Android",
    type: "mobile",
    description: "Học mọi lúc, mọi nơi trên điện thoại của bạn",
    icon: <Smartphone className="w-8 h-8" />,
    requirements: [
      "Android 8.0 trở lên",
      "RAM: 2GB trở lên",
      "Bộ nhớ trống: 100MB"
    ],
    features: [
      "Học offline",
      "Đồng bộ hóa dữ liệu",
      "Thông báo thông minh"
    ],
    colors: {
      from: "#52aaa5",
      to: "#3d8080",
      hover: "#2d6060",
      iconBg: "#edf5f5"
    }
  },
  {
    platform: "Windows",
    type: "desktop",
    description: "Trải nghiệm học tập tốt nhất trên Windows",
    icon: <MonitorIcon className="w-8 h-8" />,
    requirements: [
      "Windows 10/11 64-bit",
      "RAM: 4GB trở lên",
      "Ổ cứng trống: 500MB"
    ],
    features: [
      "Giao diện tối ưu màn hình lớn",
      "Tích hợp bàn phím",
      "Chế độ Picture-in-Picture"
    ],
    colors: {
      from: "#4C51BF",
      to: "#3730A3",
      hover: "#1E1B4B",
      iconBg: "#EDEFF8"
    }
  },
  {
    platform: "Linux",
    type: "desktop",
    description: "Phiên bản Linux cho người dùng chuyên nghiệp",
    icon: <Terminal className="w-8 h-8" />,
    requirements: [
      "Ubuntu 20.04 LTS trở lên",
      "RAM: 4GB trở lên",
      "Ổ cứng trống: 500MB"
    ],
    features: [
      "Tối ưu hóa tài nguyên",
      "Tích hợp terminal",
      "Cập nhật tự động"
    ],
    colors: {
      from: "#F59E0B",
      to: "#D97706",
      hover: "#92400E",
      iconBg: "#FEF3C7"
    }
  }
];

const DownloadSection = () => {
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
            Tải Fluency Ngay
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Học tiếng Anh mọi lúc, mọi nơi với ứng dụng đa nền tảng của chúng tôi
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {downloadOptions.map((option, index) => (
            <motion.div
              key={option.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-lg group-hover:shadow-2xl group-hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ 
                      backgroundColor: option.colors.iconBg,
                      color: option.colors.from
                    }}
                  >
                    {option.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {option.type === "mobile" ? "Điện thoại" : "Máy tính"} {option.platform}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      {option.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Yêu cầu hệ thống
                    </h4>
                    <ul className="space-y-2">
                      {option.requirements.map((req, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-gray-400" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Tính năng nổi bật
                    </h4>
                    <ul className="space-y-2">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-gray-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full text-white shadow-md group-hover:shadow-xl transition-all"
                  style={{
                    background: `linear-gradient(to right, ${option.colors.from}, ${option.colors.to})`
                  }}
                >
                  Tải cho {option.platform}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;