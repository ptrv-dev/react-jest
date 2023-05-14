import React from 'react';

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`username: ${username}\npassword: ${password}`);
    setUsername('');
    setPassword('');
  };
  return (
    <form className="form" onSubmit={handleSubmit} data-testid="form">
      <div className="form__field">
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          placeholder="Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          data-testid="username"
        />
      </div>
      <div className="form__field">
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          placeholder="*******"
          onChange={(e) => setPassword(e.target.value)}
          data-testid="password"
        />
      </div>
      <button className="form__submit" type="submit" data-testid="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
