import React, { Component } from 'react';

import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import css from './app.module.scss';

const shortid = require('shortid');

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value.trim().toLocaleLowerCase() });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    const filterContact = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(this.state.filter)
    );
    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm
          onSubmit={this.handleSubmit}
          contacts={this.state.contacts}
        />

        {this.state.contacts.length > 0 ? (
          <>
            <h2>Contacts</h2>
            <div className={css.contacts__container}>
              <Filter onChange={this.handleFilter} />
              <ContactList
                contacts={filterContact}
                delContact={this.deleteContact}
              />
            </div>
          </>
        ) : null}
      </div>
    );
  }
}
