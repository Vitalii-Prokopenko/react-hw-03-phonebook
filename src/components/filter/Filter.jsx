import PropTypes from 'prop-types';
import css from 'components/filter/filter.module.css';

const Filter = ({ filter, handleFilter }) => (
  <>
    <p className={css['filter-title']}>Find contacts by name</p>
    <input type="text" name="filter" value={filter} onChange={handleFilter} />
  </>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;
