# 部署檢查清單

## 本地開發設定

### ✅ 1. 環境變數設定
- [ ] 確認 `.env.local` 檔案存在
- [ ] 填入正確的 Sanity 專案 ID
- [ ] 設定資料集名稱（預設：production）
- [ ] 可選：設定 API Token

### ✅ 2. 本地測試
- [ ] 執行 `npm run dev`
- [ ] 確認前台正常顯示（http://localhost:3000）
- [ ] 確認後台可正常進入（http://localhost:3000/studio）
- [ ] 測試新增最新消息功能
- [ ] 確認前台能顯示新增的消息

## Sanity 專案設定

### ✅ 3. Sanity 專案建立
- [ ] 在 [sanity.io](https://sanity.io) 建立新專案
- [ ] 記錄專案 ID
- [ ] 設定資料集名稱為 `production`
- [ ] 可選：建立 API Token（用於寫入操作）

### ✅ 4. CORS 設定
- [ ] 在 Sanity 專案設定中新增 CORS 來源：
  - `http://localhost:3000`（開發用）
  - `https://your-domain.vercel.app`（生產用）
  - `https://your-custom-domain.com`（自訂網域用）

## Vercel 部署

### ✅ 5. 程式碼準備
- [ ] 推送到 GitHub 儲存庫
- [ ] 確認所有檔案都已提交
- [ ] 確認 `.env.local` 已加入 `.gitignore`

### ✅ 6. Vercel 專案建立
- [ ] 前往 [vercel.com](https://vercel.com)
- [ ] 登入並點擊 "New Project"
- [ ] 選擇您的 GitHub 儲存庫
- [ ] 確認框架設定為 Next.js

### ✅ 7. 環境變數設定
- [ ] 在 Vercel 專案設定中新增環境變數：
  - `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - `NEXT_PUBLIC_SANITY_DATASET`
  - `SANITY_API_TOKEN`（可選）

### ✅ 8. 部署測試
- [ ] 確認部署成功
- [ ] 測試前台功能
- [ ] 測試後台管理功能
- [ ] 確認圖片上傳正常

## 自訂網域設定

### ✅ 9. 網域設定（可選）
- [ ] 在 Vercel 中新增自訂網域
- [ ] 設定 DNS 記錄
- [ ] 在 Sanity CORS 設定中新增新網域
- [ ] 測試所有功能在新網域下正常運作

## 故障排除

### 常見問題

**Q: 前台無法顯示最新消息**
- 檢查環境變數是否正確
- 確認 Sanity 專案 ID 是否正確
- 檢查網路連線

**Q: 後台無法進入**
- 確認 `/studio` 路由是否正確設定
- 檢查 Sanity 配置檔案
- 確認所有依賴都已安裝

**Q: 圖片無法顯示**
- 確認 Next.js 圖片配置
- 檢查 Sanity 圖片 URL 是否正確
- 確認 CORS 設定

**Q: 部署失敗**
- 檢查環境變數是否在 Vercel 中正確設定
- 確認所有依賴都在 `package.json` 中
- 檢查建置日誌中的錯誤訊息

## 聯絡支援

如果遇到問題，請檢查：
1. 專案 README.md 中的說明
2. Sanity 官方文件
3. Vercel 部署文件
4. Next.js 官方文件 