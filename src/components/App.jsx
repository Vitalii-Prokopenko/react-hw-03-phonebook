import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from 'components/form/Form';
import Contacts from 'components/contacts/Contacts';
import Filter from 'components/filter/Filter';
import css from 'components/app.module.css';

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      const parsedContacts = JSON.parse(storedContacts);
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log(this.state.contacts);
      console.log(prevState.contacts);
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleFilter = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  formSubmitHandler = data => {
    const { name, number } = data;
    const { contacts } = this.state;
    const existingNames = contacts.map(contact => contact.name);

    if (existingNames.includes(name)) {
      alert(`${name} is already in contacts`);
    } else {
      const newContact = {
        id: nanoid(),
        name: name,
        number: number,
      };
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newContact],
        };
      });
    }
  };

  handleClickDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <>
        <div
          style={{
            height: '30vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
          }}
        >
          React homework template
        </div>
        <div className={css['wrap']}>
          <h2 className={css['title']}>Phonebook</h2>
          <Form propsOnSubmit={this.formSubmitHandler} />
          <h2 className={css['title']}>Contacts</h2>
          <Filter filter={filter} handleFilter={this.handleFilter} />
          <Contacts
            contacts={filteredContacts}
            handleClickDelete={this.handleClickDelete}
          />
        </div>
      </>
    );
  }
}

export default App;
