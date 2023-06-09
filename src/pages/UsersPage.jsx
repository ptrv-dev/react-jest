import React from 'react';
import { getUsers } from '../api';

const UsersPage = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    getUsers().then((users) => setUsers(users));
  }, []);

  return (
    <div className="container" data-testid="users-container">
      {!users.length ? (
        'Users list is empty...'
      ) : (
        <div className="users">
          {users.map((user) => (
            <div key={user.id} className="user" data-testid="user">
              Name: {user.name}
              <br />
              Username: {user.username}
              <br />
              Email: {user.email}
              <br />
              Phone: {user.phone}
              <br />
              Website: {user.website}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersPage;
