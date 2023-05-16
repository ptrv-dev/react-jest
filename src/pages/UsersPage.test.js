import axios from 'axios';
import { act, render, screen } from '@testing-library/react';

import UsersPage from './UsersPage';

jest.mock('axios');

describe('Users Page', () => {
  let response = [];

  beforeEach(() => {
    response = [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        phone: '1-463-123-4447',
        website: 'ramiro.info',
      },
    ];
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should empty at first render', () => {
    render(<UsersPage />);
    const text = screen.getByText(/users list is empty.../i);
    expect(text).toBeInTheDocument();
  });

  //TODO: fix jest warning (act())
  test('should display users correctly', async () => {
    axios.get.mockReturnValue({ data: response });
    render(<UsersPage />);
    const users = await screen.findAllByTestId('user');
    expect(users).not.toEqual([]);
    expect(users.length).toBe(3);
  });
});
