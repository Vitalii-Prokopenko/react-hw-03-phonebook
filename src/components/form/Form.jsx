import React, { Component } from 'react';
import css from 'components/form/form.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.propsOnSubmit(this.state);
    this.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={css['contact-form']} onSubmit={this.handleSubmit}>
        <label className={css['form-label']}>
          Name
          <input
            className={css['form-input']}
            type="text"
            name="name"
            value={name}
            required
            onChange={this.handleInputChange}
          />
        </label>
        <label className={css['form-label']}>
          Number
          <input
            className={css['form-input']}
            type="tel"
            name="number"
            value={number}
            required
            onChange={this.handleInputChange}
          />
        </label>
        <button className={css['form-btn']} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
