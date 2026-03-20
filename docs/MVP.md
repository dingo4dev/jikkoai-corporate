# Jikko AI MVP - 最小可行產品

> "如果你的第一個版本唔令你尷尬，咁你已經發佈得太遲。" — Reid Hoffman

---

## 🎯 ONE BIG PROBLEM

**香港中小企最大痛點：**

> "老闆/HR每日重複回答員工相同問題：請假點批？強積金點計？加班點算？"

**我地嘅解決方案：**

> "一個AI助手，員工 WhatsApp 問問題，自動回答 + 處理申請"

---

## 📊 Validation Hypothesis

**"如果我地建立一個 WhatsApp AI 助手，比 HK 中小企員工即時問 HR/行政問題，佢哋會：

1. 大幅減少請假審批時間
2. 24/7 即時回答員工問題
3. 願意每月付 $200-500 用呢個服務"**

---

## 🔴 MoSCoW 優先級

### MUST-HAVE (一定要有)

| Feature | 點解必須 |
|---------|----------|
| **WhatsApp Bot** | 員工已經日日用WhatsApp |
| **AI Q&A** | 回答MPF/請假/稅務問題 |
| **請假申請** | 員工提交，管理員審批 |
| **多語言** | 广东话/English/普通话 |

### SHOULD-HAVE (重要但非必要)

| Feature | 點解應該有 |
|---------|-----------|
| **簡單Dashboard** | 老闆睇員工狀態 |
| **知識庫** | FAQ自動回答 |
| **Email通知** | 審批結果通知 |

### COULD-HAVE (可以有的)

| Feature | 點解可以有 |
|---------|-----------|
| **完整HR系統** | 等第2階段 |
| **財務發票** | 等第2階段 |
| **Sales CRM** | 等第2階段 |

### WON'T-HAVE (今次唔做)

| Feature | 點解唔做 |
|---------|----------|
| 5個部門全部功能 | 太早太多 |
| 複雜審批流程 | MVP太複雜 |
| API整合 | 等驗證後 |
| 100+ features | 會變成合成獸 |

---

## 👤 早期用戶 (Early Adopters)

**目標用戶：**

1. **10-50人** 的 HK 中小企
2. **餐飲/零售/服務** 行業
3. **HR只有1-2人** 的公司
4. **員工流動率高** 需要快速回答問題

**原因：**
- 佢哋痛點最明顯
- 願意試新野
- 容易獲得feedback

---

## 📱 User Journey (最精簡)

```
1️⃣ 老闆 Sign Up (5分鐘)
      ↓
2️⃣ 邀請員工加入 WhatsApp Bot
      ↓
3️⃣ 員工問："請假點申請？"
      ↓
4️⃣ AI 即時回答 + 幫你提交
      ↓
5️⃣ 老闆審批 (1 Click)
      ↓
6️⃣ 完成 ✅
```

**只需要 3 步就到 Success！**

---

## ⏱️ Timeline (8-12週)

| Week | 目標 |
|------|------|
| **Week 1-2** | WhatsApp Bot + 基本Q&A |
| **Week 3-4** | 請假申請/審批 Flow |
| **Week 5-6** | 多語言 + Dashboard |
| **Week 7-8** | 測試 + 早期用戶 |
| **Week 9-10** | 根據Feedback調整 |
| **Week 11-12** | Launch! 🎉 |

---

## 💰 定價策略 (MVP測試)

| Plan | 價錢 | 員工數 | Features |
|------|------|--------|----------|
| **Starter** | $199/月 | 10人 | WhatsApp Bot + Q&A + 請假 |
| **Pro** | $499/月 | 30人 | + Dashboard + Email通知 |
| **Business** | $999/月 | 無限 | + 所有功能 |

**Early Adopter:** 首3個月 5折！

---

## 📊 成功指標 (Metrics)

| 指標 | 目標 (3個月) |
|------|-------------|
| **用戶數** | 10間公司 |
| **員工覆蓋** | 200人 |
| **問題回答率** | >80% |
| **用戶保留率** | >60% |
| **NPS** | >40 |

---

## 🔧 Tech Stack

| Layer | 選擇 |
|-------|------|
| **WhatsApp** | Twilio API |
| **AI** | GPT-4 (已有API) |
| **Backend** | Next.js + Prisma |
| **Database** | Neon PostgreSQL |
| **Hosting** | Vercel |

**唔好自己訓練Model，用現成API！**

---

## ⚠️ MVP 陷阱要避開

| 陷阱 | 點解要避 |
|------|----------|
| **Feature Creep** | 178個features太多 |
| **完美主義** | 第一版要尷尬 |
| **太慢Launch** | >12週就係問題 |
| **唔問User** | Feedback係王 |

---

## ✅ MVP Launch Checklist

- [ ] WhatsApp Bot 運作正常
- [ ] 80% 常見問題有答案
- [ ] 請假流程行得通
- [ ] Dashboard show 基本數據
- [ ] 5間公司試用
- [ ] Feedback机制就緒
- [ ] Analytics installed

---

## 🚀 下一步 (明日開始)

1. **停所有非MVP features**
2. **專注 WhatsApp AI Q&A**
3. **邀請3-5間公司試用**
4. **根據Feedback調整**

---

## 📝 備注

**Stanley:**
> "MVP 我地搵出個pain point 用最少effort 做出黎 係market 攞返feedback 先"

**Vincent:**
> "我都係跟住平時department 啲人要做啲乜咁擺比佢"

**共識：**
> **先整一個痛點 - WhatsApp AI助手回答員工問題，其他功能之後先加！**

---

*Last Updated: 2026-03-20*
*Based on: The Lean Startup + 2026 MVP Guide*
