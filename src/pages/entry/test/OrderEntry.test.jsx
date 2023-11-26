import { render, screen } from '@testing-library/react';
import OrderEntry from '../OrderEntry';
import { rest } from 'msw';
import { server } from '../../../mocks/server';

// 핸들러 오버라이드 => resetHandler, 서버에 관한 엔드포인트가 있는
// 모든 핸들러를 재설정
test('handles error form scoops and toppings routes', async () => {
  server.resetHandlers(
    rest.get('http://localhost:3030/scoops', (req, res, ctx) => res(ctx.status(500))),
    rest.get('http://localhost:3030/toppings', (req, res, ctx) => res(ctx.status(500)))
  );

  render(<OrderEntry />);

  const alerts = await screen.findAllByRole('alert');

  expect(alerts).toHaveLength(2);
});
