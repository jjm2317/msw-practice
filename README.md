# 실행방법

## 실행환경

Chrome 브라우저

## 개발 서버

```bash
npm install

npm start
```

## 스토리북

```bash
npm run storybook
```

## 테스트

```bash
npm run test
```

# 프로젝트 구조

`src/components/`

화면의 작은 단위를 담당하는 재사용 가능한 ui 컴포넌트

`model/~PropTypes.js`

재사용되는 컴포넌트 인터페이스

`pages/<page>/*.js`

페이지 컴포넌트

`pages/<page>/components/*.js`

페이지에서 사용되는, context 를 가진 컴포넌트

`query/`

api 함수와, react query api 를 사용하는 커스텀 훅

`tests/mockServer/`

mock service worker 모듈.

# 협업

mock service worker 를 사용해 mock api 를 작성하였습니다.

이를 통해 백엔드 api 개발 이후에 최소한의 변경으로 프로덕트를 배포할 수 있도록 하는 것에 집중했습니다.

- 서비스 로직에 mocking 코드가 포함되지 않도록 했습니다.

- localStorage 를 사용하여 CRUD 를 개발환경과 테스트 환경에서 모두 검증 가능하도록 했습니다.
  - `tests/mockServer/resolvers/PostResolvers.js`

# Testing

- storybook 으로 ui rendering 을 검증합니다.

- 사용자와의 인터렉션을 검증하기 위한 컴포넌트 테스트를 작성했습니다.
  - ex) `pages/main/components/PostModal.test.jsx`
