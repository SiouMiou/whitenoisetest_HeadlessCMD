#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 白噪島 Sanity + Vercel 專案設定');
console.log('=====================================\n');

// 檢查是否已存在 .env.local
if (fs.existsSync('.env.local')) {
  console.log('⚠️  發現已存在的 .env.local 檔案');
  rl.question('是否要覆蓋？(y/N): ', (answer) => {
    if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
      createEnvFile();
    } else {
      console.log('設定已取消');
      rl.close();
    }
  });
} else {
  createEnvFile();
}

function createEnvFile() {
  rl.question('請輸入您的 Sanity 專案 ID: ', (projectId) => {
    rl.question('請輸入您的 Sanity 資料集名稱 (預設: production): ', (dataset) => {
      rl.question('請輸入您的 Sanity API Token (可選): ', (token) => {
        const envContent = `# Sanity 專案設定
NEXT_PUBLIC_SANITY_PROJECT_ID=${projectId}
NEXT_PUBLIC_SANITY_DATASET=${dataset || 'production'}
${token ? `SANITY_API_TOKEN=${token}` : '# SANITY_API_TOKEN=your_api_token_here'}`;

        fs.writeFileSync('.env.local', envContent);
        
        console.log('\n✅ 環境變數檔案已建立！');
console.log('\n📋 下一步：');
console.log('1. 執行 npm run dev 啟動開發伺服器');
console.log('2. 開啟 http://localhost:3000 查看前台');
console.log('3. 開啟 http://localhost:3000/studio 進入後台');
console.log('\n🌐 部署到 Vercel：');
console.log('1. 推送到 GitHub');
console.log('2. 在 Vercel 中匯入專案');
console.log('3. 在 Vercel 專案設定中新增相同的環境變數');
        
        rl.close();
      });
    });
  });
} 