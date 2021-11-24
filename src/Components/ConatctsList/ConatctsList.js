import ContactsListItem from './ContactsListItem';
import Filter from '../Filter/Filter';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';

function ContactsList({ filter, changeFilter }) {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="name"
        onChange={e => changeFilter(e.currentTarget.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <ul>{!filter ? <ContactsListItem /> : <Filter />}</ul>
    </>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = dispatch => ({
  changeFilter: value => dispatch(changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
