import Item from 'components/item/Item';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, handleClickDelete }) => (
  <ul>
    {contacts.map(contact => {
      return (
        <Item
          key={contact.id}
          contact={contact}
          handleClickDelete={handleClickDelete}
        />
      );
    })}
  </ul>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleClickDelete: PropTypes.func.isRequired,
};

export default Contacts;
