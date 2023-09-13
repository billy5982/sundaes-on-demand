import { rest } from 'msw';

// msw가 Export 하는 핸들러는 API를 담고 있을 배열
// 모킹할 전체 URL , flwhfqj gkatn
export const handlers = [
  rest.get('http://localhost:3030/scoope', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: 'Chocolate',
          imagePath: 'images/chocolate.png',
        },
        {
          name: 'Vanilla',
          imagePath: 'images/vanilla.png',
        },
      ])
    );
  }),
];
