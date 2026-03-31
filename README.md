# Gaemi Admin Page

개미 어드민 애플리케이션입니다.

## 기술 스택

| 분류 | 기술 |
|------|------|
| 프레임워크 | React, TypeScript, Vite 
| UI | Tailwind CSS, Radix UI, Ant Design Icons, Lucide Icons 
| 인증 | Firebase Auth, react-auth-kit 
| 상태 관리 | Redux Toolkit, React Query 
| 폼 관리 | Formik, Yup 
| HTTP | Axios 
| 알림 | Sonner (Toast) 

## 프로젝트 구조

```
src/
├── components/          # 컴포넌트
│   ├── sign-in/         # 로그인 폼 및 비밀번호 강도 표시
│   ├── home/            # 홈 페이지
│   ├── navbar/          # 네비게이션 바
│   ├── footer/          # 푸터
│   └── ui/              # 재사용 가능한 UI 컴포넌트 (Button, Input, Dialog 등)
├── pages/               # 페이지 래퍼
├── firebase/            # Firebase 설정
├── hooks/               # 커스텀 훅 (useAuth, useAxios, useRedux)
├── redux/               # Redux 스토어 및 슬라이스
├── services/            # API 서비스
├── models/              # 유효성 검사 스키마
├── types/               # TypeScript 타입 정의
├── utils/               # 유틸리티 및 라우팅
└── lib/                 # 라이브러리 유틸리티
```

## 주요 기능

- **관리자 로그인** — Firebase Auth로 이메일/비밀번호 로그인 후 Firestore에서 관리자 권한 확인
- **비밀번호 강도 표시** — 실시간 비밀번호 강도 측정 및 시각화
- **인증 기반 라우팅** — 로그인 여부에 따라 자동으로 페이지 전환


### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 환경 변수

Firebase 설정을 위한 환경 변수 파일(`.env`)을 프로젝트 루트에 생성 필요

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```
