import { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operations';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  onSubmit = e => {
    e.preventDefault();

    const contactsArr = [];
    this.props.contacts.forEach(el => {
      contactsArr.push(el.name, el.number);
    });

    if (contactsArr.includes(this.state.number)) {
      /* Проверка на имя || this.state.name.toLowerCase().trim())  */
      alert('This umber is already in contacts. Please change information');
      return;
    } else {
      this.props.addContact(this.state);
      this.setState({ name: '', number: '' });
    }
  };

  onChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <label className="label">
          Name{' '}
          <input
            value={this.state.name}
            className="label"
            type="text"
            name="name"
            onChange={this.onChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className="label">
          Phone{' '}
          <input
            value={this.state.number}
            className="label"
            type="tel"
            name="number"
            onChange={this.onChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
  };
};

const mapDispatchToProps = dispatch => ({
  // addContact: (userName, userNumber) =>
  //   dispatch(addContact(userName, userNumber)),
  addContact: state => dispatch(addContact(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
