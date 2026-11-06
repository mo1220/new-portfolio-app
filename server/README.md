# Portfolio Server

포트폴리오 프론트엔드와 분리된 Express + Prisma API 서버입니다.

## 스택

- Express
- Prisma ORM
- SQLite (로컬 기본) / PostgreSQL 전환 가능
- Zod 요청 검증

## 시작하기

```bash
cd server
npm install
npm run setup
npm run dev
```

기본 주소: `http://localhost:4000`

## 주요 API

| Method | Path | 설명 |
|--------|------|------|
| GET | `/api/health` | 서버·DB 상태 |
| GET | `/api/profile` | 프로필 |
| GET | `/api/skills` | 스킬 목록 (`?category=`) |
| GET | `/api/portfolio` | 포트폴리오 목록 (`?group=`) |
| GET | `/api/portfolio/:slug` | 포트폴리오 상세 |
| POST | `/api/portfolio` | 포트폴리오 생성 |
| POST | `/api/contact` | 문의 메시지 저장 |
| GET | `/api/contact` | 문의 목록 |

## 환경 변수

`.env.example`을 참고해 `.env`를 구성합니다.

- `DATABASE_URL` — SQLite: `file:./dev.db` / Postgres: `postgresql://...`
- `PORT` — 기본 `4000`
- `CORS_ORIGIN` — 프론트 오리진 (쉼표로 여러 개 가능)

## PostgreSQL로 전환

1. `prisma/schema.prisma`의 `provider`를 `postgresql`로 변경
2. `DATABASE_URL`을 Postgres 연결 문자열로 교체
3. `npx prisma migrate dev --name init`
