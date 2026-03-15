"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Jikko AI",
      subtitle: "中小企智能化平台",
      content: "Execution. Less talk, more action.",
      theme: "from-purple-900 to-blue-900"
    },
    {
      title: "市場痛點",
      subtitle: "香港34萬中小企既困局",
      content: (
        <div className="space-y-4 text-left">
          <div className="flex items-center gap-4">
            <span className="text-4xl">💰</span>
            <div>
              <p className="font-bold">請唔起專人</p>
              <p className="text-sm text-gray-300">HR/Finance/Sales要专人，一个月薪水$15,000+</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">📊</span>
            <div>
              <p className="font-bold">系統碎片化</p>
              <p className="text-sm text-gray-300">呢隻APP計人工，嗰隻APP開發票，撈勁頭痛</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">🤖</span>
            <div>
              <p className="font-bold">外國嘢唔啱香港</p>
              <p className="text-sm text-gray-300">Salesforce/SAP太貴太複雜，MPF/稅務要另外搞</p>
            </div>
          </div>
        </div>
      ),
      theme: "from-red-900 to-orange-900"
    },
    {
      title: "解決方案",
      subtitle: "一站式AI企業管理平台",
      content: (
        <div className="grid grid-cols-2 gap-6 text-left">
          <div className="bg-white/10 p-4 rounded-xl">
            <span className="text-3xl">👥</span>
            <p className="font-bold mt-2">HR Suite</p>
            <p className="text-sm">強積金、請假、考勤、評核</p>
          </div>
          <div className="bg-white/10 p-4 rounded-xl">
            <span className="text-3xl">💰</span>
            <p className="font-bold mt-2">Finance</p>
            <p className="text-sm">發票、報銷、薪酬、報告</p>
          </div>
          <div className="bg-white/10 p-4 rounded-xl">
            <span className="text-3xl">📈</span>
            <p className="font-bold mt-2">Sales CRM</p>
            <p className="text-sm">Pipeline、報價、客戶管理</p>
          </div>
          <div className="bg-white/10 p-4 rounded-xl">
            <span className="text-3xl">🎧</span>
            <p className="font-bold mt-2">Customer Service</p>
            <p className="text-sm">工單、知識庫、SLA</p>
          </div>
        </div>
      ),
      theme: "from-green-900 to-teal-900"
    },
    {
      title: "HK本地化",
      subtitle: "獨一無二既優勢",
      content: (
        <div className="space-y-4 text-left">
          <div className="bg-yellow-500/20 border border-yellow-500 p-4 rounded-xl">
            <p className="font-bold text-yellow-300">🏆 內置MPF/稅務/勞工知識</p>
            <p className="text-sm">AI助手識答香港法例問題</p>
          </div>
          <div className="bg-purple-500/20 border border-purple-500 p-4 rounded-xl">
            <p className="font-bold text-purple-300">🇭🇰 廣東話/English雙語</p>
            <p className="text-sm">介面同客服都係香港style</p>
          </div>
          <div className="bg-blue-500/20 border border-blue-500 p-4 rounded-xl">
            <p className="font-bold text-blue-300">💬 WhatsApp首發</p>
            <p className="text-sm">香港人最慣用既通訊工具</p>
          </div>
        </div>
      ),
      theme: "from-yellow-900 to-orange-900"
    },
    {
      title: "商業模式",
      subtitle: "SaaS訂閱收入",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/10 p-4 rounded-xl text-center">
              <p className="text-2xl font-bold">$800</p>
              <p className="text-sm">Starter</p>
              <p className="text-xs text-gray-400">1-10人</p>
            </div>
            <div className="bg-purple-500/30 p-4 rounded-xl text-center border-2 border-purple-400">
              <p className="text-3xl font-bold">$2,500</p>
              <p className="text-sm font-bold">Pro</p>
              <p className="text-xs text-gray-400">11-30人</p>
              <span className="text-xs bg-purple-500 text-white px-2 py-0.5 rounded">最受歡迎</span>
            </div>
            <div className="bg-white/10 p-4 rounded-xl text-center">
              <p className="text-2xl font-bold">$5,000</p>
              <p className="text-sm">Business</p>
              <p className="text-xs text-gray-400">31-50人</p>
            </div>
          </div>
          <p className="text-sm text-gray-300">目標：2026年底達100付費用戶，月收入$150K</p>
        </div>
      ),
      theme: "from-blue-900 to-indigo-900"
    },
    {
      title: "競爭優勢",
      subtitle: "點解揀Jikko AI?",
      content: (
        <div className="space-y-4 text-left">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left py-2">功能</th>
                <th className="text-center py-2">Jikko AI</th>
                <th className="text-center py-2">Salesforce</th>
                <th className="text-center py-2">傳統ERP</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="py-2">HK本地化</td>
                <td className="text-center text-green-400">✅</td>
                <td className="text-center text-red-400">❌</td>
                <td className="text-center text-red-400">❌</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2">部署時間</td>
                <td className="text-center text-green-400">5分鐘</td>
                <td className="text-center text-yellow-400">數週</td>
                <td className="text-center text-red-400">數月</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2">價錢</td>
                <td className="text-center text-green-400">$800/月</td>
                <td className="text-center text-yellow-400">$150+/月</td>
                <td className="text-center text-red-400">數十萬</td>
              </tr>
              <tr>
                <td className="py-2">WhatsApp</td>
                <td className="text-center text-green-400">✅</td>
                <td className="text-center text-red-400">❌</td>
                <td className="text-center text-red-400">❌</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
      theme: "from-indigo-900 to-purple-900"
    },
    {
      title: "團隊",
      subtitle: "香港Startup經驗",
      content: (
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl">
              👨‍💼
            </div>
            <p className="font-bold">Vincent</p>
            <p className="text-sm text-gray-400">CEO & Co-founder</p>
            <p className="text-xs text-gray-500">連續創業者</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl">
              👩‍💻
            </div>
            <p className="font-bold">技術夥伴</p>
            <p className="text-sm text-gray-400">CTO</p>
            <p className="text-xs text-gray-500">前Google/Facebook</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl">
              🤖
            </div>
            <p className="font-bold">Jikko AI</p>
            <p className="text-sm text-gray-400">Chief of Staff</p>
            <p className="text-xs text-gray-500">你的AI助手</p>
          </div>
        </div>
      ),
      theme: "from-teal-900 to-green-900"
    },
    {
      title: "聯繫我們",
      subtitle: "一齊改變香港中小企",
      content: (
        <div className="space-y-6">
          <div className="text-6xl mb-4">⚡</div>
          <p className="text-xl">hello@jikkoai.com</p>
          <p className="text-gray-400">+852 1234 5678</p>
          <div className="flex justify-center gap-4 mt-6">
            <span className="px-4 py-2 bg-white/10 rounded-lg">LinkedIn</span>
            <span className="px-4 py-2 bg-white/10 rounded-lg">Facebook</span>
            <span className="px-4 py-2 bg-white/10 rounded-lg">Website</span>
          </div>
          <p className="text-sm text-gray-500 mt-8">© 2026 Jikko AI Limited. All rights reserved.</p>
        </div>
      ),
      theme: "from-purple-900 to-pink-900"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Slide Container */}
      <div className={`flex-1 bg-gradient-to-br ${slides[currentSlide].theme} flex items-center justify-center p-8`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl w-full text-center"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm uppercase tracking-widest text-gray-300 mb-4"
            >
              {slides[currentSlide].subtitle}
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-8"
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg"
            >
              {slides[currentSlide].content}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="bg-black/50 backdrop-blur p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button 
            onClick={prevSlide}
            className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          >
            ← Previous
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentSlide ? "bg-white w-8" : "bg-white/30"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-sm text-gray-400">{currentSlide + 1} / {slides.length}</span>
            <button 
              onClick={nextSlide}
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
