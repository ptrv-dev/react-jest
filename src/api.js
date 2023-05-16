import axios from 'axios';

export const getUsers = async () => {
  try {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    return data;
  } catch (error) {
    return [];
  }
};
