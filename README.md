# new-portfolio-app

포트폴리오 프론트엔드(Next.js)와 별도 API 서버(`server/`, Express + Prisma + SQLite)로 구성됩니다.

## 구조

```text
.
├── pages/          # Next.js 프론트엔드
├── lib/api.js      # 백엔드 API 클라이언트
└── server/         # Express API + Prisma DB
```

## 1) API 서버 실행

```bash
npm run server:install
npm run server:setup
npm run server:dev
```

- 주소: `http://localhost:4000`
- 상세: [`server/README.md`](./server/README.md)

## 2) 프론트엔드 실행

```bash
npm install
cp .env.example .env.local   # 필요 시
npm run dev
```

- 주소: `http://localhost:3000`
- `NEXT_PUBLIC_API_URL`로 백엔드 주소를 지정합니다 (기본 `http://localhost:4000`).

## 데이터 모델

- `Profile` — 소개/연락처
- `Skill` — 기술 스택
- `PortfolioItem` — 포트폴리오 항목
- `ContactMessage` — 문의 메시지

로컬은 SQLite(`server/prisma/dev.db`)를 사용하며, PostgreSQL로 전환할 수 있습니다.
