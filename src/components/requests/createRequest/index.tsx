import React, { useState } from 'react';
import Button from '../../shared/button';
import { APP_PAGE } from '../../../constants';

type CreateRequestType = {
  id?: number,
  date?: string,
  address?: string,
  setNextPage: (page: string) => void,
  addCard?: (date: string, address: string) => void,
  editStarted: boolean,
  saveCard?: (date: string, address: string) => void,
}
const CreateRequest: React.FunctionComponent<CreateRequestType> = ({
  date, address, setNextPage, addCard, editStarted, saveCard,
}) => {
  const [newDate, setDate] = useState(date || '');
  const [newAddress, setAddress] = useState(address || '');

  const onCreateSubmitForm = (event: any) => {
    event.preventDefault();
    if (newDate === '' || newAddress === '') return;
    if (addCard) {
      addCard(newDate, newAddress);
    }
    if (editStarted && saveCard) {
      saveCard(newDate, newAddress);
    }
  };

  const handleCancelClick = () => {
    setNextPage(APP_PAGE.REQUESTS);
  };

  const changeInputHandler = (event: any) => {
    if (event.target.id === 'date') {
      setDate(event.target.value);
    }
    if (event.target.id === 'address') {
      setAddress(event.target.value);
    }
  };

  return (
    <form onSubmit={ onCreateSubmitForm }>
      <div>
        <label htmlFor="date">Date</label>
        <input type="text" id="date" placeholder="01.01.2020" value={ newDate } onChange={ changeInputHandler } />
        <label htmlFor="address">Address</label>
        <input type="text" id="address" placeholder="some address" value={ newAddress } onChange={ changeInputHandler } />
      </div>
      { editStarted
        ? <button type="submit">Save</button>
        : <button type="submit">Create</button>
      }
      <Button
        label="Cancel"
        onClick={ handleCancelClick }
      />
    </form>
  );
};

export default CreateRequest;
