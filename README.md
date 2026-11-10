# new-portfolio-app

포트폴리오 프론트엔드(Next.js)입니다. API 서버는 별도 프로젝트로 분리했습니다.

## 구조

```text
.
├── pages/          # Next.js 프론트엔드
└── lib/api.js      # 백엔드 API 클라이언트
```

## API 서버 (별도 프로젝트)

권장 경로:

`C:\Users\kkkmi\OneDrive\바탕 화면\back-end 공부\new-portfolio-app-server`

GitHub standalone 브랜치:

`cursor/standalone-server-fbe2`

```powershell
git clone --branch cursor/standalone-server-fbe2 --single-branch https://github.com/mo1220/new-portfolio-app.git "C:\Users\kkkmi\OneDrive\바탕 화면\back-end 공부\new-portfolio-app-server"
cd "C:\Users\kkkmi\OneDrive\바탕 화면\back-end 공부\new-portfolio-app-server"
copy .env.example .env
npm install
npm run setup
npm run dev
```

서버 주소: `http://localhost:4000`

## 프론트엔드 실행

```bash
npm install
cp .env.example .env.local   # 필요 시
npm run dev
```

- 주소: `http://localhost:3000`
- `NEXT_PUBLIC_API_URL`로 백엔드 주소를 지정합니다 (기본 `http://localhost:4000`).
