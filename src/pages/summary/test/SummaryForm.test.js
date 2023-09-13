import { render, screen } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

// 말그대로 렌더링 후 초기 상태를 확인한다.
test('Summary의 초기 상태', () => {
  render(<SummaryForm />);
  const summaryCheckBox = screen.getByRole('checkbox', { name: /Terms/i });
  const confirmBtn = screen.getByRole('button', { name: 'Confirm order' });

  // 화면에 렌더링 되었는지 확인
  expect(summaryCheckBox).not.toBeChecked();
  expect(confirmBtn).toBeDisabled();
});

// 버튼 간의 상호작용을 테스트한다.
test('SummaryForm의 체크박스와 버튼 상호작용 테스트', async () => {
  render(<SummaryForm />);

  const user = userEvent.setup();
  const summaryCheckBox = screen.getByRole('checkbox', { name: /Terms/i });

  const confirmBtn = screen.getByRole('button', { name: 'Confirm order' });

  await user.click(summaryCheckBox);
  expect(confirmBtn).toBeEnabled();

  await user.click(summaryCheckBox);
  expect(confirmBtn).toBeDisabled();
});

test('마우스 커서를 올렸을 때 팝오버가 표시된다', async () => {
  const user = userEvent.setup();

  render(<SummaryForm />);

  // 존재하지 않으면 null 이 반환됨 -> 화면에 존재하지 않을 경우 query를 사용하는 이유가 될 것 같음, get-find를 에러를 반환함. 에러가 반환되면 실패로 처리 됨
  const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);

  // 페이지 로딩 시 팝업은 없는 상태 (toBeInTheDocument -> 문서에 존재하는 지)
  expect(nullPopover).not.toBeInTheDocument();

  // 마우스 호버시 팝오버가 보이는 지
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndConditions);
  const hoverPopover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(hoverPopover).toBeInTheDocument();

  // 마우스 호버에서 뗐을 떄 팝오버가 사라지는 지
  await user.unhover(hoverPopover);
  expect(hoverPopover).not.toBeInTheDocument();
});
