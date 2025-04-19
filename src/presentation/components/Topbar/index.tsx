import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Fluency Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-blue-600">Fluency</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Trang chủ
            </Link>
            <Link to="/tinh-nang" className="text-gray-700 hover:text-blue-600">
              Tính năng
            </Link>
            <Link to="/huong-dan" className="text-gray-700 hover:text-blue-600">
              Hướng dẫn
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600">
              Blog
            </Link>
            <Link to="/lien-he" className="text-gray-700 hover:text-blue-600">
              Liên hệ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;