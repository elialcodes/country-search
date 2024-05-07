import '../styles/App.scss';
import PropTypes from 'prop-types';

function Filter({ onChangeInput, onChangeSelect }) {
  const handleInput = (event) => {
    onChangeInput(event.target.value);
  };

  const handleSelect = (event) => {
    onChangeSelect(event.target.value);
  };

  return (
    <div className="filter">
      <h3 className="titlesFilter">Filters:</h3>
      <label className="label" htmlFor="name">
        Search by country:{' '}
      </label>
      <input
        id="name"
        className="centered-element"
        type="text"
        placeholder="Country..."
        onChange={handleInput}
      />
      <label className="label" htmlFor="continent">
        Search by continent:{' '}
      </label>
      <select id="continent" className="centered-element" type="text" onChange={handleSelect}>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="Oceania">Oceania</option>
        <option value="South America">South America</option>
      </select>
    </div>
  );
}

Filter.propTypes = {
  onChangeInput: PropTypes.func,
  onChangeSelect: PropTypes.func,
};

export default Filter;
