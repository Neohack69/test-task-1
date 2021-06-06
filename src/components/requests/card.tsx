import React from 'react';
import Button from '../shared/button';

type CardPropsType = {
  id: number,
  date: string,
  address: string,
  editCard: (is: number, date: string, address: string) => void,
}

const Card: React.FunctionComponent<CardPropsType> = ({
  id, date, address, editCard,
}) => {
  const handleEditClick = () => {
    editCard(id, date, address);
  };

  return (
    <ul className="cardItemsList">
      <li className="cardItem">{ id }</li>
      <li className="cardItem">{ date }</li>
      <li className="cardItem">{ address }</li>
      <li className="cardItem">
        <Button
          label="Edit"
          onClick={ handleEditClick }
        />
      </li>
    </ul>
  );
};

export default Card;
