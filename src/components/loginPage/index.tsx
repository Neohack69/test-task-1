import React, { useEffect, useState } from 'react';
import './styles.css';
import Button from '../shared/button';

type LoginFormPropsType = {
  checkPassword: (name: string, password: string) => void,
  getRequestsData: () => void,
}

const LoginForm: React.FunctionComponent<LoginFormPropsType> = ({
  checkPassword, getRequestsData,
}) => {
  useEffect(() => {
    const savedName = localStorage.getItem('name');
    const savedPassword = localStorage.getItem('password');
    if (savedName && savedPassword) {
      getRequestsData();
      checkPassword(savedName, savedPassword);
    }
  }, []);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const changeInputHandler = (event: any) => {
    if (event.target.id === 'name') {
      setName(event.target.value);
    }
    if (event.target.id === 'password') {
      setPassword(event.target.value);
    }
  };

  const handleLoginButtonClick = () => {
    checkPassword(name, password);
  };
  return (
    <>
      <div className="formWrapper">
        <h1>Login Form</h1>
        <input type="text" placeholder="admin" id="name" onChange={ changeInputHandler } />
        <input type="text" placeholder="123456" id="password" onChange={ changeInputHandler } />
        <Button
          label="Login"
          onClick={ handleLoginButtonClick }
        />
      </div>
    </>
  );
};

export default LoginForm;
