"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Language = "zh-HK" | "zh-CN" | "en";

const languages = [
  { code: "zh-HK" as Language, name: "繁中", flag: "🇭🇰" },
  { code: "zh-CN" as Language, name: "简中", flag: "🇨🇳" },
  { code: "en" as Language, name: "EN", flag: "🇬🇧" },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Language>("zh-HK");

  const handleSelect = (code: Language) => {
    setSelected(code);
    setIsOpen(false);
    // Could trigger a language change event here
  };

  const current = languages.find(l => l.code === selected) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/20 hover:bg-white/10 transition-colors text-white text-sm"
      >
        <span>{current.flag}</span>
        <span>{current.name}</span>
        <svg 
          className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-10" 
              onClick={() => setIsOpen(false)} 
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 mt-2 w-28 bg-black/90 backdrop-blur-lg rounded-lg border border-white/20 z-20 overflow-hidden"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className={`w-full px-4 py-2 text-left flex items-center gap-2 hover:bg-white/10 transition-colors ${
                    selected === lang.code ? 'text-purple-400' : 'text-white'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
