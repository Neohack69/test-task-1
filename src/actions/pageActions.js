import { APP_PAGE, CARDS_ARRAY } from '../constants';

export const setNewPage = (nextPage) => (dispatch, getState) => {
  const currentPage = getState().main.currentPage;
  if (currentPage === nextPage) return null;
  dispatch({
    type: 'SWITCH_PAGE',
    nextPage,
  });
};

export const checkPassword = (name, password) => (dispatch, getState) => {
  // api
  const isCards = getState().main.cards.length !== 0;
  const rightName = 'admin';
  const rightPassword = '123456';
  if (name === rightName && password === rightPassword) {
    dispatch({
        type: 'LOGIN_IS_OK',
      },
    );
    dispatch(setNewPage(isCards ? APP_PAGE.REQUESTS : APP_PAGE.CREATE));
    localStorage.setItem('name', name);
    localStorage.setItem('password', password);
  }
};

export const logout = () => dispatch => {
  dispatch({
      type: 'LOGOUT',
    },
  );
  dispatch(setNewPage(APP_PAGE.LOGIN));
  localStorage.removeItem('name');
  localStorage.removeItem('password');
};


export const getRequestsData = () => dispatch => {
  // api
  dispatch({
    type: 'SET_CARDS_DATA',
    data: CARDS_ARRAY,
  });
};

export const editCard = (id, date, address) => dispatch => {
  dispatch({
    type: 'START_CARD_EDIT',
    id,
    date,
    address,
  });
  dispatch(setNewPage(APP_PAGE.EDIT));
};

export const addCard = (date, address) => (dispatch, getState) => {
  const id = getState().main.cards?.length + 1;
  dispatch({
    type: 'ADD_CARD',
    id,
    date,
    address,
  });
  dispatch(setNewPage(APP_PAGE.REQUESTS));
};

export const saveCard = (date, address) => (dispatch, getState) => {
  const id = getState().main.cardEdit.id;
  dispatch({
    type: 'SAVE_CARD',
    id,
    date,
    address,
  });
  dispatch(setNewPage(APP_PAGE.REQUESTS));
};