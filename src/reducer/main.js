import updateHelper from 'immutability-helper';
import { APP_PAGE } from '../constants';

const initialState = {
  currentPage: APP_PAGE.LOGIN,
  cards: [],
  isLoggedIn: false,
  cardEdit: {
    editStarted: false,
  },
};

const setPage = (state, { nextPage }) => updateHelper(
  state,
  { currentPage: { $set: nextPage } },
);

const setLoggedState = state => updateHelper(
  state,
  { isLoggedIn: { $set: true } },
);

const setLoggedOut = state => updateHelper(
  state,
  { isLoggedIn: { $set: false } },
);

const setCardsData = (state, { data }) => updateHelper(
  state,
  { cards: { $set: data } },
);

const openCardEdit = (state, { id, date, address }) => updateHelper(
  state,
  {
    cardEdit: {
      editStarted: { $set: true },
      id: { $set: id },
      date: { $set: date },
      address: { $set: address },
    },
  },
);

const setNewCard = (state, { id, date, address }) => updateHelper(
  state,
  { cards: { $set: state.cards.concat([{ id, date, address }]) } },
);

const changeCardData = (state, { id, date, address }) => updateHelper(
  state,
  {
    cards: {
      [id]: {
        date: { $set: date },
        address: { $set: address },
      },
    },
    cardEdit: {
      editStarted: { $set: false },
      id: { $set: -1 },
      date: { $set: '' },
      address: { $set: '' },
    },
  },
);

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case 'SWITCH_PAGE':
      return setPage(state, action);
    case 'LOGIN_IS_OK':
      return setLoggedState(state);
    case 'SET_CARDS_DATA':
      return setCardsData(state, action);
    case 'LOGOUT':
      return setLoggedOut(state);
    case 'START_CARD_EDIT':
      return openCardEdit(state, action);
    case 'ADD_CARD':
      return setNewCard(state, action);
    case 'SAVE_CARD':
      return changeCardData(state, action);
  }
};