import { render, screen } from '@testing-library/react';

import LoginPage from './LoginPage';
import userEvent from '@testing-library/user-event';

const setup = () => {
  const utils = render(<LoginPage />);
  const form = screen.getByTestId('form');
  const username = screen.getByTestId('username');
  const password = screen.getByTestId('password');
  const button = screen.getByTestId('button');
  return {
    ...utils,
    form,
    username,
    password,
    button,
  };
};

describe('Login Page: Form functionality', () => {
  test('form and inputs should be render correctly', () => {
    const { form, username, password, button } = setup();

    expect(form).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('inputs should works correctly', () => {
    const { username, password } = setup();

    userEvent.type(username, 'garry');
    userEvent.type(password, 'qwerty123');

    expect(username).toHaveValue('garry');
    expect(password).toHaveValue('qwerty123');
  });

  test('inputs should clear value after form submit', () => {
    const { username, password, button } = setup();
    userEvent.type(username, 'garry');
    userEvent.type(password, 'qwerty123');

    expect(username).toHaveValue('garry');
    expect(password).toHaveValue('qwerty123');

    userEvent.click(button);

    expect(username).toHaveValue('');
    expect(password).toHaveValue('');
  });
});
