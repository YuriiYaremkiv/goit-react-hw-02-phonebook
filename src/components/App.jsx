import React, { Component } from 'react';
import css from './app.module.scss';

import { ContactList } from '../components/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  render() {
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <form className={css.formSubmit}>
          <label className={css.formSubmit__label}>
            Name
            <input
              className={css.formSubmit__input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label className={css.formSubmit__label}>
            Number
            <input
              className={css.formSubmit__input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={css.formSubmit__button} type="submit">
            Add contact
          </button>
        </form>

        <h2>Contacts</h2>
        <label>
          Find contacts by name:
          <input type="text"></input>
        </label>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
