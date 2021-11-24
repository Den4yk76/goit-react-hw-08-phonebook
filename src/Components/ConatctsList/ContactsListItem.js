import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/contacts/contacts-operations';
// import operations from '../../redux/contacts/contacts-operations';

function ContactsListItem({ contacts, deleteContact, fetchContacts }) {
  useEffect(() => {
    fetchContacts();
  }, []);

  return contacts.map(el => {
    return (
      <li key={el.id}>
        {el.name}: {el.number}
        <button
          className="button"
          type="button"
          id={el.id}
          onClick={e => {
            deleteContact(e.target.id);
          }}
        >
          Delete
        </button>
      </li>
    );
  });
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
  deleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsListItem);
