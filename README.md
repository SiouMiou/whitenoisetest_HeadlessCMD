# 白噪島 - Sanity + Vercel 部署專案

這是一個使用 Next.js + Sanity (Headless CMS) 建立的專案，前台部署在 Vercel，後台 Sanity Studio 以 `/studio` 路由嵌入同一個網站。

## 功能特色

- ✅ 前台顯示最新消息列表
- ✅ 最新消息詳情頁面
- ✅ 內嵌 Sanity Studio 後台管理系統
- ✅ 響應式設計
- ✅ 自動圖片優化
- ✅ SEO 友善

## 快速開始

### 1. 安裝依賴

```bash
npm install
```

### 2. 設定環境變數

確保您的 `.env.local` 檔案包含以下環境變數：

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
```

### 3. 啟動開發伺服器

```bash
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000) 查看前台
開啟 [http://localhost:3000/studio](http://localhost:3000/studio) 進入後台管理

## 部署到 Vercel

### 1. 推送到 GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. 在 Vercel 部署

1. 前往 [Vercel](https://vercel.com) 並登入
2. 點擊 "New Project"
3. 選擇您的 GitHub 專案
4. 設定環境變數：
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`: 您的 Sanity 專案 ID
   - `NEXT_PUBLIC_SANITY_DATASET`: production
5. 點擊 "Deploy"

### 3. 設定自訂網域（可選）

在 Vercel 專案設定中設定您的自訂網域。

## 使用說明

### 前台功能

- **首頁**: 顯示所有已發布的最新消息
- **最新消息詳情**: 點擊任何消息查看完整內容
- **管理後台**: 點擊首頁的「管理後台」按鈕

### 後台管理

- **新增消息**: 在 Sanity Studio 中建立新的最新消息
- **編輯內容**: 使用富文本編輯器編輯內容
- **上傳圖片**: 支援圖片上傳和熱點設定
- **發布管理**: 設定發布時間和狀態

## 專案結構

```
├── components/          # React 組件
│   └── NewsList.tsx    # 最新消息列表組件
├── lib/                # 工具函數
│   ├── sanity.client.ts # Sanity 客戶端
│   └── queries.ts      # GROQ 查詢
├── sanity/             # Sanity 配置
│   └── schemaTypes/    # 內容結構定義
├── src/pages/          # Next.js 頁面
│   ├── index.tsx       # 首頁
│   ├── news/[slug].tsx # 最新消息詳情
│   └── studio/         # Sanity Studio
└── types/              # TypeScript 類型定義
```

## 技術棧

- **前端**: Next.js 15, React 19, TypeScript
- **CMS**: Sanity v4
- **部署**: Vercel
- **樣式**: CSS-in-JS (styled-jsx)
- **圖片**: Next.js Image Optimization

## 開發指南

### 新增內容類型

1. 在 `sanity/schemaTypes/` 建立新的 schema 檔案
2. 在 `sanity/schemaTypes/index.ts` 匯入新 schema
3. 建立對應的查詢和組件

### 自訂樣式

- 使用 styled-jsx 進行組件級樣式
- 全域樣式在 `src/styles/globals.css`

## 支援

如有問題，請檢查：

1. 環境變數是否正確設定
2. Sanity 專案 ID 是否正確
3. 網路連線是否正常

## 授權

MIT License
