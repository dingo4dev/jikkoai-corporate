"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface StatProps {
  value: string;
  label: string;
  delay?: number;
}

const StatItem = ({ value, label, delay = 0 }: StatProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.6 }}
    className="text-center"
  >
    <div className="text-4xl md:text-6xl font-bold text-gradient mb-2">
      {value}
    </div>
    <div className="text-gray-400 text-sm md:text-base">{label}</div>
  </motion.div>
);

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { value: "10x", label: "效率提升" },
    { value: "70%", label: "成本節省" },
    { value: "5分鐘", label: "部署時間" },
    { value: "$800", label: "月費起" },
  ];

  const features = [
    {
      icon: "🤖",
      title: "AI Agents",
      description: "HR、財務、銷售、客服 — 每個部門都有專屬AI助手，24/7無休工作",
      details: ["自動請假審批", "智能報銷處理", "客戶查詢即時回應", "銷售線索自動跟進"],
    },
    {
      icon: "⚡",
      title: "Workflow Automation",
      description: "拖放式流程設計，20+預設範本，自動化90%重複工作",
      details: ["可視化流程編輯器", "條件分支邏輯", "多系統數據同步", "異常處理機制"],
    },
    {
      icon: "💬",
      title: "WhatsApp Native",
      description: "香港首創WhatsApp原生集成，客戶無需下載任何App",
      details: ["群組管理自動化", "客服機器人", "訂單狀態推送", "付款提醒"],
    },
    {
      icon: "📚",
      title: "香港知識庫",
      description: "MPF、稅務、勞工法例 — 內置本地化知識，開箱即用",
      details: ["實時法例更新", "智能稅務計算", "MPF合規檢查", "勞工合約範本"],
    },
    {
      icon: "🔗",
      title: "無縫集成",
      description: "QuickBooks、Xero、Slack、Email — 一鍵連接所有工具",
      details: ["API自動同步", "數據雙向流通", "統一身份認證", "零停機時間部署"],
    },
    {
      icon: "🛡️",
      title: "企業級安全",
      description: "SOC 2認證、數據加密、權限控制 — 放心使用",
      details: ["端到端加密", "角色權限管理", "審計日誌追蹤", "GDPR合規"],
    },
  ];

  const testimonials = [
    {
      quote: "Jikko AI幫我哋節省咗70%既HR時間，員工問AI就搞掂！以前要成日答同樣既問題，而家AI助手自動處理，我可以專注做更重要既事。",
      author: "陳老闆",
      role: "CEO",
      company: "XX科技有限公司",
      size: "30人",
      avatar: "👨‍💼",
    },
    {
      quote: "作為Startup，我哋冇錢請專人處理admin，Jikko AI完美解決呢個問題。從報銷到發票，全部自動化，真係好似請咗個萬能秘書。",
      author: "Emily",
      role: "Founder",
      company: "ABC Startup",
      size: "5人",
      avatar: "👩‍💻",
    },
    {
      quote: "MPF、報稅這些咁複雜既野，問下AI就有答案，唔洗周圍搵資料。而且答案準確，仲會自動更新法例，真係幫到手。",
      author: "Mary",
      role: "HR Manager",
      company: "YY貿易公司",
      size: "50人",
      avatar: "👩‍💼",
    },
  ];

  const pricing = [
    {
      name: "Starter",
      price: "800",
      period: "/月",
      description: "1-10人公司",
      features: [
        "AI Chatbot 24/7",
        "1個部門助手",
        "基礎Workflow範本",
        "Email Support",
        "香港知識庫",
      ],
      popular: false,
      cta: "開始免費試用",
    },
    {
      name: "Pro",
      price: "2,500",
      period: "/月",
      description: "11-50人公司",
      features: [
        "AI Chatbot + 進階功能",
        "3個部門助手",
        "全部Workflow範本",
        "Priority Support",
        "WhatsApp集成",
        "自定義知識庫",
        "API Access",
      ],
      popular: true,
      cta: "最受歡迎",
    },
    {
      name: "Enterprise",
      price: "8,000",
      period: "/月",
      description: "51+人公司",
      features: [
        "無限部門助手",
        "自定義Workflow開發",
        "專屬客戶經理",
        "24/7 專線支援",
        "企業級安全審計",
        "定制開發服務",
        "White-label選項",
      ],
      popular: false,
      cta: "聯繫銷售",
    },
  ];

  const companyLogos = [
    "Microsoft", "Apple", "Google", "Meta", "Amazon", "Tesla"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-black/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold">⚡</span>
              </div>
              <div>
                <span className="text-2xl font-bold">Jikko AI</span>
                <div className="text-xs text-gray-400">香港中小企AI助手</div>
              </div>
            </motion.div>
            
            <div className="hidden lg:flex items-center gap-8">
              {["產品", "定價", "案例", "關於"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-300 hover:text-white transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 btn-hover-scale"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                免費試用
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button className="text-white hover:text-purple-400 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full mb-8 hover-glow"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.span 
                className="w-3 h-3 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium">香港首創 · AI Agentic Workflow Platform</span>
            </motion.div>
            
            <motion.h1 
              className="text-responsive-xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              AI助手
              <br />
              <span className="text-gradient">
                為香港中小企而生
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <span className="font-semibold text-white">HR、財務、銷售、客服</span> — 一個平台搞掂
              <br />
              減少<span className="text-gradient font-bold">90%重複工作</span>，專注創造價值
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.a
                href="#contact"
                className="px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 btn-hover-scale"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                免費試用14日 →
              </motion.a>
              <motion.a
                href="#demo"
                className="px-10 py-5 glass rounded-full font-bold text-lg hover-glow transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                觀看Demo 
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">▶</span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {stats.map((stat, i) => (
                <StatItem key={i} {...stat} delay={1.2 + i * 0.1} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div 
              className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Social Proof */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <motion.p 
            className="text-center text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            受到領先企業信任
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-12 opacity-50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true }}
          >
            {companyLogos.map((company, i) => (
              <div key={i} className="text-2xl font-bold text-gray-500">
                {company}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Features */}
      <section id="產品" className="py-24 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              為<span className="text-gradient">中小企</span>而設計
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              每個功能都為香港中小企度身訂造，唔洗再用外國既嘢
              <br />
              <span className="text-purple-400">真正了解香港商業環境</span>
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 glass rounded-2xl hover-glow transition-all duration-500 hover:scale-105"
              >
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">5分鐘</span>開始使用
            </h2>
            <p className="text-xl text-gray-400">
              唔需要IT知識，唔需要寫代碼
              <br />
              <span className="text-blue-400">比傳統方案快100倍</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                title: "註冊帳戶", 
                desc: "輸入email，1分鐘完成",
                icon: "📝"
              },
              { 
                step: "02", 
                title: "選擇部門", 
                desc: "HR、財務、銷售、客服",
                icon: "🎯"
              },
              { 
                step: "03", 
                title: "AI即時上線", 
                desc: "自動學習你既知識庫",
                icon: "🚀"
              },
              { 
                step: "04", 
                title: "開始使用", 
                desc: "WhatsApp直接問問題",
                icon: "💬"
              },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="relative group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-7xl font-bold text-white/5 mb-4 group-hover:text-white/10 transition-colors">
                  {item.step}
                </div>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.desc}</p>
                {i < 3 && (
                  <motion.div 
                    className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: i * 0.2 + 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              客戶<span className="text-gradient">點讚</span>
            </h2>
            <p className="text-xl text-gray-400">
              真實客戶，真實效果
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="glass p-8 md:p-12 rounded-2xl text-center"
              >
                <div className="text-6xl text-purple-400 mb-6">"</div>
                <p className="text-lg md:text-xl mb-8 leading-relaxed">
                  {testimonials[activeTestimonial].quote}
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-4xl">
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-white">
                      {testimonials[activeTestimonial].author}
                    </p>
                    <p className="text-purple-400 text-sm">
                      {testimonials[activeTestimonial].role}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonials[activeTestimonial].company} · {testimonials[activeTestimonial].size}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === activeTestimonial ? 'bg-purple-500' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="定價" className="py-24 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">簡單定價</span>
            </h2>
            <p className="text-xl text-gray-400">
              冇隱藏費用，冇長期合約
              <br />
              <span className="text-green-400">14日免費試用</span>
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-2xl border transition-all duration-500 hover:scale-105 group ${
                  plan.popular
                    ? "bg-gradient-to-b from-purple-900/50 to-blue-900/50 border-purple-500/50 hover-glow"
                    : "glass border-white/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-sm font-bold">
                    最受歡迎
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {plan.name}
                  </h3>
                  <p className="text-gray-500 mb-4">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-gradient">${plan.price}</span>
                    <span className="text-gray-500 text-lg">{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-400">港幣計算</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-green-400 text-xs">✓</span>
                      </span>
                      <span className="text-gray-300 flex-1">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-xl hover:shadow-purple-500/25"
                      : "glass hover-glow"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400">
              需要自定義方案？ 
              <a href="#contact" className="text-purple-400 hover:text-purple-300 transition-colors ml-1">
                聯繫我們 →
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-zinc-950 to-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              準備好<span className="text-gradient">提升效率</span>未？
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              首批客戶免費試用14日，唔洗信用卡
              <br />
              如果唔啱你，<span className="text-green-400 font-semibold">隨時可以走</span>
            </p>

            <motion.form 
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                placeholder="輸入你既email"
                className="flex-1 px-6 py-4 glass rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              />
              <motion.button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-bold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                免費試用 →
              </motion.button>
            </motion.form>

            <div className="space-y-4 text-gray-400">
              <p>或者直接聯繫我們</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="mailto:hello@jikkoai.com" className="hover:text-purple-400 transition-colors">
                  📧 hello@jikkoai.com
                </a>
                <a href="tel:+85296668888" className="hover:text-purple-400 transition-colors">
                  📱 +852 9666 8888
                </a>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  💬 WhatsApp支援
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold">⚡</span>
                </div>
                <span className="text-xl font-bold">Jikko AI</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                香港中小企AI助手
                <br />
                減少重複工作，專注創造價值
              </p>
              <div className="flex gap-4">
                {["LinkedIn", "Twitter", "Facebook"].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-500/20 transition-colors"
                  >
                    <span className="text-xs">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">產品</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">AI Agents</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Workflow Automation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">WhatsApp Integration</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Knowledge Base</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">公司</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">關於我們</a></li>
                <li><a href="#" className="hover:text-white transition-colors">客戶案例</a></li>
                <li><a href="#" className="hover:text-white transition-colors">職位空缺</a></li>
                <li><a href="#" className="hover:text-white transition-colors">新聞中心</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">支援</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">幫助中心</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API文檔</a></li>
                <li><a href="#" className="hover:text-white transition-colors">聯繫我們</a></li>
                <li><a href="#" className="hover:text-white transition-colors">系統狀態</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
            <p className="text-gray-500 text-sm">
              © 2026 Jikko AI. 香港中小企AI助手 — 保留所有權利
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">私隱政策</a>
              <a href="#" className="hover:text-white transition-colors">服務條款</a>
              <a href="#" className="hover:text-white transition-colors">Cookie政策</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}