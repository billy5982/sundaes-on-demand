import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

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
test('SummaryForm의 체크박스와 버튼 상호작용 테스트', () => {
  render(<SummaryForm />);
  const summaryCheckBox = screen.getByRole('checkbox', { name: /Terms/i });

  const confirmBtn = screen.getByRole('button', { name: 'Confirm order' });

  fireEvent.click(summaryCheckBox);
  expect(confirmBtn).toBeEnabled();

  fireEvent.click(summaryCheckBox);
  expect(confirmBtn).toBeDisabled();
});
