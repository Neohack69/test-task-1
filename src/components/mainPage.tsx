import React from 'react';
import { connect } from 'react-redux';
import { APP_PAGE } from '../constants';
import LoginForm from './loginPage';
import CreateRequest from './requests/createRequest';
import RequestsPage from './requests';
import * as actions from '../actions/pageActions';
import { bindActionCreators } from 'redux';
import { CardType } from '../types';

type MainPagePropsType = {
  currentPage?: string,
  setNextPage?: any,
  checkPassword?: any,
  getRequestsData?: any,
  cards: CardType[],
  logout?: any,
  addCard: (date: string, address: string) => void,
  editCard: (id: number, date: string, address: string) => void,
  id: number,
  date: string,
  address: string,
  editStarted: boolean,
  saveCard: (date: string, address: string) => void,
}

const MainPage: React.FunctionComponent<MainPagePropsType> = ({
  currentPage,
  setNextPage,
  checkPassword,
  getRequestsData,
  cards,
  logout,
  addCard,
  editCard,
  id,
  date,
  address,
  editStarted,
  saveCard,
}) => {
  const returnCurrentPage = () => {
    switch (currentPage) {
      case APP_PAGE.LOGIN:
        return <LoginForm
          checkPassword={ checkPassword }
          getRequestsData={ getRequestsData }
        />;
      case APP_PAGE.CREATE:
        return <CreateRequest
          setNextPage={ setNextPage }
          addCard={ addCard }
          editStarted={ editStarted }
        />;
      case APP_PAGE.EDIT:
        return <CreateRequest
          setNextPage={ setNextPage }
          id={ id }
          date={ date }
          address={ address }
          editStarted={ editStarted }
          saveCard={ saveCard }
        />;
      case APP_PAGE.REQUESTS:
        return <RequestsPage
          cards={ cards }
          logout={ logout }
          setNextPage={ setNextPage }
          editCard={ editCard }
        />;
    }
  };

  return (
    <div>
      { returnCurrentPage() }
    </div>

  );
};

const mapStateToProps = (state: any) => {
  return {
    currentPage: state.main.currentPage,
    cards: state.main.cards,
    id: state.main.cardEdit.id,
    date: state.main.cardEdit.date,
    address: state.main.cardEdit.address,
    editStarted: state.main.cardEdit.editStarted,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  const pageActions = bindActionCreators(actions, dispatch);
  return {
    setNextPage: pageActions.setNewPage,
    checkPassword: pageActions.checkPassword,
    getRequestsData: pageActions.getRequestsData,
    logout: pageActions.logout,
    addCard: pageActions.addCard,
    editCard: pageActions.editCard,
    saveCard: pageActions.saveCard,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
