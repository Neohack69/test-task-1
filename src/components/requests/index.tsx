import React from 'react';
import { CardType } from '../../types';

import './styles.css';

import Button from '../shared/button';
import Card from './card';
import { APP_PAGE } from '../../constants';

type RequestPagePropsType = {
  cards: CardType[],
  logout: () => void,
  setNextPage: (page: string) => void,
  editCard: (is: number, date: string, address: string) => void,
}

const RequestsPage: React.FunctionComponent<RequestPagePropsType> = ({
  cards,
  logout,
  setNextPage,
  editCard,
}) => {
  const handleLogoutClick = () => {
    logout();
  };

  const handleCreateNewClick = () => {
    setNextPage(APP_PAGE.CREATE);
  };

  return (
    <div className="requestsWrapper">
      <Button
        label="Logout"
        onClick={ handleLogoutClick }
      />
      <div className="requestCards">
        <div className="requestsHeaderWrapper">
          <span className="requestsHeaderItem">ID</span>
          <span className="requestsHeaderItem">Date</span>
          <span className="requestsHeaderItem">Address</span>
          <span className="requestsHeaderItem">Action</span>
        </div>
        { cards.map(item => {
          return <Card
            key={ item.id }
            id={ item.id }
            date={ item.date }
            address={ item.address }
            editCard={ editCard }
          />;
        }) }
      </div>
      <div className="buttonsWrapper">
        <Button
          label="Create new"
          onClick={ handleCreateNewClick }
        />
      </div>
    </div>
  );
};

export default RequestsPage;
