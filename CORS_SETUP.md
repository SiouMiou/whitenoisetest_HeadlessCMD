# CORS 設定指南

## 解決 "Runtime CorsOriginError" 錯誤

### 錯誤原因
Sanity 預設只允許特定來源存取 API，需要手動設定允許的網域。

### 設定步驟

#### 1. 登入 Sanity 管理後台
- 前往 [https://www.sanity.io/manage](https://www.sanity.io/manage)
- 登入您的 Sanity 帳戶

#### 2. 選擇專案
- 在專案列表中選擇您的專案

#### 3. 進入 API 設定
- 點擊 "Settings"（設定）
- 選擇 "API" 標籤
- 找到 "CORS Origins" 區段

#### 4. 新增 CORS 來源

**開發環境：**
```
Origin: http://localhost:3000
Allow Credentials: ✅ 勾選
Description: Development
```

**生產環境（Vercel）：**
```
Origin: https://your-project-name.vercel.app
Allow Credentials: ✅ 勾選
Description: Production
```

**自訂網域（如果有）：**
```
Origin: https://your-custom-domain.com
Allow Credentials: ✅ 勾選
Description: Custom Domain
```

#### 5. 儲存設定
- 點擊 "Add CORS Origin" 新增每個來源
- 點擊 "Save" 儲存所有設定

### 常見問題

**Q: 我找不到 CORS 設定選項**
- 確保您有專案的管理權限
- 檢查是否在正確的專案中

**Q: 設定後仍然有錯誤**
- 清除瀏覽器快取
- 重新啟動開發伺服器 (`npm run dev`)
- 確認 URL 完全匹配（包含 http/https）

**Q: 生產環境部署後出現錯誤**
- 確保已新增 Vercel 網域到 CORS 來源
- 檢查網域是否正確（包含 https://）

### 驗證設定

設定完成後，您可以：

1. **重新啟動開發伺服器**：
   ```bash
   npm run dev
   ```

2. **測試前台**：
   - 開啟 http://localhost:3000
   - 確認能正常顯示最新消息

3. **測試後台**：
   - 開啟 http://localhost:3000/studio
   - 確認能正常登入和編輯內容

### 注意事項

- CORS 設定可能需要幾分鐘才能生效
- 確保所有環境（開發、測試、生產）都已新增到 CORS 來源
- 如果使用自訂網域，記得更新 CORS 設定 