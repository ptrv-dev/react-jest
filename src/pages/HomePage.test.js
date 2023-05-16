import { render, screen } from '@testing-library/react';

import HomePage from './HomePage';
import userEvent from '@testing-library/user-event';

const setup = () => {
  const utils = render(<HomePage />);
  const button = screen.getByText('Toggle text');
  const text = screen.queryByTestId('toggle');
  return { ...utils, button, text };
};

describe('HomePage: spoiler text', () => {
  test("initial text is doesn't rendered", () => {
    const { text } = setup();
    expect(text).not.toBeInTheDocument();
  });

  test('should render after button click', () => {
    let { text, button } = setup();
    expect(text).not.toBeInTheDocument();

    userEvent.click(button);
    text = screen.getByTestId('toggle');

    expect(text).toBeInTheDocument();
  });

  test('should remove from document after second click', () => {
    let { text, button } = setup();
    expect(text).not.toBeInTheDocument();

    userEvent.click(button);
    text = screen.getByTestId('toggle');

    expect(text).toBeInTheDocument();

    userEvent.click(button);
    text = screen.queryByTestId('toggle');

    expect(text).not.toBeInTheDocument();
  });
});
