// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { server } from './mocks/server';

// 테스트 전 항상 서버가 수신 대기 ,들모든 요청을 msw로 라우팅
beforeAll(() => server.listen());

// 테스트 종료 후 서버를 정의했ㅇ르 떄의 핸들러로 재설정
afterEach(() => server.resetHandlers());

// 테스트 종료 시 서버 close
afterAll(() => server.close());
