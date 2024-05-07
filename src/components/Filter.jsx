import '../styles/components/Form.scss';
import PropTypes from 'prop-types';

function Filter({ onChangeInput, onChangeSelect }) {
  const handleInput = (event) => {
    onChangeInput(event.target.value);
  };

  const handleSelect = (event) => {
    onChangeSelect(event.target.value);
  };

  return (
    <>
      <h3 className="titlesFilter">Filters:</h3>
      <form className="form">
        <label className="label" htmlFor="name">
          Country:{' '}
        </label>
        <input
          className="input"
          id="name"
          type="text"
          placeholder="Country..."
          onChange={handleInput}
        />
        <label className="label" htmlFor="continent">
          Continent:{' '}
        </label>
        <select className="input" id="continent" type="text" onChange={handleSelect}>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
        </select>
      </form>
    </>
  );
}

Filter.propTypes = {
  onChangeInput: PropTypes.func,
  onChangeSelect: PropTypes.func,
};

export default Filter;
