import { render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';
import userEvent from '@testing-library/user-event';

const setup = () => {
  const utils = render(<LoginForm />);
  let form = screen.getByTestId('form');
  let inputs = {
    username: screen.getByTestId('username'),
    password: screen.getByTestId('password'),
  };
  let button = screen.getByTestId('submit');

  return {
    form,
    inputs,
    button,
    ...utils,
  };
};

describe('Login Form', () => {
  test('correct render', () => {
    const { form, inputs, button } = setup();

    expect(form).toBeInTheDocument();
    expect(inputs.username).toBeInTheDocument();
    expect(inputs.password).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('correct input value', () => {
    const { inputs } = setup();

    userEvent.type(inputs.username, 'username');
    userEvent.type(inputs.password, 'qwerty123');

    expect(inputs.username).toHaveValue('username');
    expect(inputs.password).toHaveValue('qwerty123');
  });

  test('should be clear inputs after submit', () => {
    const { inputs, button } = setup();

    userEvent.type(inputs.username, 'username');
    userEvent.type(inputs.password, 'qwerty123');

    expect(inputs.username).toHaveValue('username');
    expect(inputs.password).toHaveValue('qwerty123');

    userEvent.click(button);

    expect(inputs.username).toHaveValue('');
    expect(inputs.password).toHaveValue('');
  });
});
