import { render, screen } from '@testing-library/react';

import Options from '../Options';

test('display Image for each scoop option from server', async () => {
  render(<Options optionType='scoops' />);

  // find images 여기서 name은 alt를 의미 $ =scoop으로 끝난다.
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text
  const altText = scoopImages.map((el) => el.alt);

  // toBe : 숫자 문자, toEqual : 배열 객체
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('토핑 이미지가 맞게 들어왔는지 확인합니다.', async () => {
  render(<Options optionType='toppings' />);

  const toppingsImages = await screen.findAllByRole('img', { name: /topping$/i });
  expect(toppingsImages).toHaveLength(3);

  const altText = toppingsImages.map((el) => el.alt);

  expect(altText).toEqual(['Cherries topping', 'M&Ms topping', 'Hot fudge topping']);
});
