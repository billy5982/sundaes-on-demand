import { findAllByAltText, render, screen } from '@testing-library/react';

import Options from '../Options';
import ToppingOption from '../ToppingOption';

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

test('토핑에 대한 서버 응답이 정상적으로 이뤄지는 지 확인합니다', async () => {
  render(<Options optionType={'toppings'} />);

  // 현재 테스트 서버 응답은 3개
  const toppingImages = await screen.findAllByRole('img');

  expect(toppingImages).toHaveLength(3);

  const altText = toppingImages.map((el) => el.alt);

  expect(altText).toEqual(['Cherries topping', 'M&Ms topping', 'Hot fudge topping']);
});
