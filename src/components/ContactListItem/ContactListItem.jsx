
import React from 'react';
import { useDispatch } from 'react-redux';
import css from './ContactListItem.module.css';
import { deleteContact } from '#services/api';

const ContactListItem = ({ id, name, number }) => {
    console.log(number)
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contacts__item} key={id}>
      {name} : {number}{' '}
      <button
        className={css.contacts__btn}
        onClick={handleDeleteContact}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
