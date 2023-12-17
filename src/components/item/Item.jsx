import PropTypes from 'prop-types';
import css from 'components/item/item.module.css';

const Item = ({ contact, handleClickDelete }) => (
  <li key={contact.id} className={css['contact-item']}>
    <span className={css['contact-name']}>{contact.name}</span>
    <span className={css['contact-number']}>{contact.number}</span>
    <button
      className={css['btn-delete']}
      type="button"
      onClick={() => handleClickDelete(contact.id)}
    >
      Delete
    </button>
  </li>
);

Item.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  handleClickDelete: PropTypes.func.isRequired,
};

export default Item;
