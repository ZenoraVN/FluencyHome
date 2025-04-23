import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const QuizSection = () => {
  const questions: Question[] = [
    {
      id: 1,
      question: "Từ nào sau đây có nghĩa là 'Kiên trì'?",
      options: [
        "Persistent",
        "Resistance",
        "Consistent",
        "Insistent"
      ],
      correctAnswer: 0
    },
    {
      id: 2,
      question: "Câu nào sau đây sử dụng thì hiện tại hoàn thành đúng?",
      options: [
        "I am living here since 2010",
        "I have been living here since 2010",
        "I live here since 2010",
        "I lived here since 2010"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "Đâu là cách phát âm đúng của từ 'Determine'?",
      options: [
        "/dɪ'tɜːmaɪn/",
        "/dɪ'tɜːmɪn/",
        "/dɪ'tɜːmɪneɪt/",
        "/dɪ'tɜːmɪnɪŋ/"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "Thành ngữ nào có nghĩa là 'Dễ như trở bàn tay'?",
      options: [
        "A piece of cake",
        "As easy as ABC",
        "It's a breeze",
        "Tất cả đều đúng"
      ],
      correctAnswer: 3
    },
    {
      id: 5,
      question: "Câu nào sau đây sử dụng câu điều kiện loại 2 đúng?",
      options: [
        "If I have money, I will buy a car",
        "If I had money, I would buy a car",
        "If I had money, I will buy a car",
        "If I have money, I would buy a car"
      ],
      correctAnswer: 1
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

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
            Kiểm Tra Trình Độ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thử thách kiến thức tiếng Anh của bạn với bài kiểm tra ngắn
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {!showResults ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center justify-between mb-8">
                <span 
                  className="text-lg font-medium"
                  style={{ color: "#52aaa5" }}
                >
                  Câu hỏi {currentQuestion + 1}/{questions.length}
                </span>
                <div 
                  className="h-2 flex-1 mx-4 rounded-full bg-gray-100 overflow-hidden"
                >
                  <div
                    className="h-full transition-all duration-300"
                    style={{ 
                      width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                      backgroundColor: "#52aaa5"
                    }}
                  />
                </div>
              </div>

              <h3 className="text-xl font-medium text-gray-900 mb-6">
                {questions[currentQuestion].question}
              </h3>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 ${
                      selectedAnswers[currentQuestion] === index
                        ? "border-[#52aaa5] bg-[#52aaa5]/5"
                        : "border-gray-200 hover:border-[#52aaa5]/50"
                    }`}
                    onClick={() => handleAnswerSelect(index)}
                  >
                    <span className="text-gray-700">{option}</span>
                  </button>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  className="px-8 py-3 rounded-lg font-medium text-white transition-all duration-300 hover:shadow-lg disabled:opacity-50"
                  style={{ backgroundColor: "#52aaa5" }}
                  onClick={handleNext}
                  disabled={selectedAnswers[currentQuestion] === undefined}
                >
                  {currentQuestion === questions.length - 1 ? "Hoàn thành" : "Câu tiếp theo"}
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="mb-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#52aaa5" }}>
                  {calculateScore() >= 3 ? (
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  ) : (
                    <XCircle className="w-10 h-10 text-white" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Kết quả của bạn
                </h3>
                <p className="text-4xl font-bold mb-4" style={{ color: "#52aaa5" }}>
                  {calculateScore()}/{questions.length}
                </p>
                <p className="text-gray-600 mb-8">
                  {calculateScore() >= 3
                    ? "Tuyệt vời! Bạn đã có nền tảng tiếng Anh khá tốt."
                    : "Đừng lo lắng! Hãy để Fluency giúp bạn cải thiện trình độ nhé."}
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    className="px-8 py-3 rounded-lg font-medium text-white transition-all duration-300 hover:shadow-lg"
                    style={{ backgroundColor: "#52aaa5" }}
                    onClick={handleRetry}
                  >
                    Làm lại
                  </button>
                  <button
                    className="px-8 py-3 rounded-lg font-medium border-2 transition-all duration-300 hover:shadow-lg"
                    style={{ borderColor: "#52aaa5", color: "#52aaa5" }}
                  >
                    Đăng ký học
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;