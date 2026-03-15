"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { value: "10x", label: "效率提升" },
    { value: "70%", label: "成本節省" },
    { value: "50K+", label: "潛在客戶" },
    { value: "$2M", label: "ARR目標" },
  ];

  const features = [
    {
      icon: "🤖",
      title: "AI Agents",
      description: "HR、財務、銷售、客服 — 每個部門都有專屬AI助手",
    },
    {
      icon: "⚡",
      title: "Workflow Automation",
      description: "拖放式流程設計，20+預設範本，自動化90%重複工作",
    },
    {
      icon: "💬",
      title: "WhatsApp Native",
      description: "香港首創WhatsApp原生集成，客戶無需下載任何App",
    },
    {
      icon: "📚",
      title: "香港知識庫",
      description: "MPF、稅務、勞工法例 — 內置本地化知識，開箱即用",
    },
    {
      icon: "🔗",
      title: "無縫集成",
      description: "QuickBooks、Xero、Slack、Email — 一鍵連接所有工具",
    },
    {
      icon: "🛡️",
      title: "企業級安全",
      description: "SOC 2認證、數據加密、權限控制 — 放心使用",
    },
  ];

  const testimonials = [
    {
      quote: "Jikko AI幫我哋節省咗70%既HR時間，員工問AI就搞掂！",
      author: "陳老闆",
      company: "XX科技有限公司",
      size: "30人",
    },
    {
      quote: "作為Startup，我哋冇錢請專人處理admin，Jikko AI完美解決呢個問題",
      founder: "Emily",
      company: "ABC Startup",
      size: "5人",
    },
    {
      quote: " MPF、報稅這些咁複雜既野，問下AI就有答案，唔洗周圍搵資料",
      HR: "Mary",
      company: "YY貿易公司",
      size: "50人",
    },
  ];

  const pricing = [
    {
      name: "Starter",
      price: "800",
      period: "/月",
      description: "1-10人公司",
      features: ["AI Chatbot", "1個部門", "基礎Workflows", "Email Support"],
      popular: false,
    },
    {
      name: "Pro",
      price: "2,500",
      period: "/月",
      description: "11-50人公司",
      features: ["AI Chatbot", "3個部門", "全部Workflows", "Priority Support", "WhatsApp"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "8,000",
      period: "/月",
      description: "51+人公司",
      features: ["無限部門", "自定義Workflows", "API Access", "專屬Support", "定制開發"],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">⚡</span>
              </div>
              <span className="text-2xl font-bold">Jikko AI</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#product" className="text-gray-300 hover:text-white transition-colors">產品</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">定價</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">關於</a>
              <a href="#contact" className="px-4 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                免費試用
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,50,255,0.15),transparent_50%)]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm">香港首創 · AI Agentic Workflow Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              AI助手
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                為香港中小企而生
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              HR、財務、銷售、客服 — 一個平台搞掂
              <br />
              減少90%重複工作，專注創造價值
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                免費試用14日
              </a>
              <a
                href="#product"
                className="px-8 py-4 border border-white/20 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                了解更多
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Product Features */}
      <section id="product" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              為<span className="text-purple-400">中小企</span>而設計
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              每個功能都為香港中小企度身訂造，唔洗再用外國既嘢
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-purple-500/50 transition-colors group"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              5分鐘<span className="text-blue-400">開始使用</span>
            </h2>
            <p className="text-xl text-gray-400">唔需要IT知識，唔需要寫代碼</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "註冊帳戶", desc: "輸入email，1分鐘完成" },
              { step: "02", title: "選擇部門", desc: "HR、財務、銷售、客服" },
              { step: "03", title: "AI即時上線", desc: "自動學習你既知識庫" },
              { step: "04", title: "開始使用", desc: "WhatsApp直接問問題" },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-white/10 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              客戶<span className="text-purple-400">點讚</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-purple-400 text-4xl mb-4">"</div>
                <p className="text-lg mb-6">{t.quote}</p>
                <div>
                  <p className="font-semibold">{t.author || t.founder || t.HR}</p>
                  <p className="text-gray-500 text-sm">{t.company} · {t.size}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              簡單<span className="text-purple-400">定價</span>
            </h2>
            <p className="text-xl text-gray-400">冇隱藏費用，冇長期合約</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl border ${
                  plan.popular
                    ? "bg-gradient-to-b from-purple-900/30 to-blue-900/30 border-purple-500/50"
                    : "bg-white/5 border-white/10"
                }`}
              >
                {plan.popular && (
                  <div className="text-sm text-purple-400 mb-2">最受歡迎</div>
                )}
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-300">
                      <span className="text-green-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90"
                      : "border border-white/20 hover:bg-white/10"
                  }`}
                >
                  開始試用
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            準備好提升效率未？
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            首批客戶免費試用14日，唔洗信用卡
            <br />
            如果唔啱你，隨時可以走
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="輸入你既email"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              免費試用
            </button>
          </form>
          <p className="text-gray-500 text-sm mt-4">
            或者直接聯繫我們: hello@jikkoai.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">⚡ Jikko AI</span>
            </div>
            <div className="flex gap-8 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">私隱政策</a>
              <a href="#" className="hover:text-white transition-colors">服務條款</a>
              <a href="#" className="hover:text-white transition-colors">聯繫我們</a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2026 Jikko AI. 香港中小企AI助手
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
