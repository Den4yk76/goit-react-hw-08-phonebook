import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';

function Filter({ contacts, filter, deleteContact }) {
  const findUsers = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return findUsers().map(el => {
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
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
