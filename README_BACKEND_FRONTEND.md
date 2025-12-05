# bee4 - frontend/backend split (提案)

這份範例把原專案切成 frontend (React) 與 backend (Java Spring Boot)：

## 後端（backend）
- 放在 backend/ 目錄（Spring Boot）
- 提供 API：
  - GET /api/rentals -> 列表
  - GET /api/rentals/{id} -> 單一租屋

### 啟動方式（需要 JDK 17 與 Maven）：
1. 進入 backend 目錄
   ```bash
   cd backend
   ```
2. 啟動
   ```bash
   mvn spring-boot:run
   ```
   （或 `mvn package` 並 `java -jar target/bee4-backend-0.0.1-SNAPSHOT.jar`）
3. 服務預設在 http://localhost:8080

## 前端（frontend）
- 在原 React 專案中新增 services/rentalApi.js 與 components/RentalDetails.jsx
- 預設會向 http://localhost:8080/api/rentals 取得資料
- 可用環境變數覆寫 API：VITE_API_BASE

### 啟動方式：
1. 在前端目錄安裝依賴（若尚未）
   ```bash
   npm install
   ```
2. 將 VITE_API_BASE 設為後端位址（選擇性）
   ```bash
   export VITE_API_BASE=http://localhost:8080
   ```
   或在 .env 檔案中設定：
   ```
   VITE_API_BASE=http://localhost:8080
   ```
3. 啟動開發伺服器
   ```bash
   npm run dev
   ```

## 測試：
- 啟動後端與前端後，打開前端的租屋頁面並傳入 id（例如 1 或 2）即可看到範例資料。
- 也可直接 curl 測試：
  ```bash
  curl http://localhost:8080/api/rentals/1
  ```

## 注意事項：
- 範例後端使用記憶體資料，若要接真實 DB，可將 RentalService 改成 JPA repository 等。
- 已在後端設定 CORS 允許 http://localhost:3000 和 http://localhost:5173（Vite 預設 port），若前端位址不同請修改 WebConfig 中 allowedOrigins。
