import axios, { AxiosError } from 'axios';
import { getUsers } from './api';

jest.mock('axios');

describe('API getUsers', () => {
  const response = [
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
  test('axios get should be called 1 time', async () => {
    await getUsers();
    expect(axios.get).toBeCalledTimes(1);
  });

  test('should return correct value', async () => {
    axios.get.mockReturnValue({ data: response });

    const users = await getUsers();

    expect(users).not.toBeUndefined();
    expect(users).toEqual(response);
  });

  test('should return empty array if error', async () => {
    axios.get.mockRejectedValue(new AxiosError('Some error'));

    const users = await getUsers();

    expect(users).toEqual([]);
    expect(users).not.toEqual(response);
  });
});
