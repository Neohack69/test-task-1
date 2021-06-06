import React from 'react';

import './styles.css';

type ButtonPropsTypes = {
  label: string,
  onClick?: any,
}

const Button: React.FunctionComponent<ButtonPropsTypes> = ({
  label, onClick,
}) => {
  return (
    <div
      className="button"
      onClick={ onClick }
    >
      <span className="buttonLabel">{ label }</span>
    </div>
  );
};

export default Button;