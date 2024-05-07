import '../styles/components/Country.scss';
import PropTypes from 'prop-types';

function Country({ infoCountry, onClickDeleteCountry }) {
  const handleDeleteCountry = () => {
    onClickDeleteCountry(infoCountry.name.common);
  };

  return (
    <div className="card">
      <p className="flag">{infoCountry.flag}</p>
      <p className="countryName">
        <strong>{infoCountry.name.common}</strong>
      </p>
      <p>{infoCountry.capital[0]}</p>
      <p>{infoCountry.continents[0]}</p>
      <button className="button" onClick={handleDeleteCountry}>
        Eliminar
      </button>
    </div>
  );
}

Country.propTypes = {
  infoCountry: PropTypes.shape({
    flag: PropTypes.string,
    name: PropTypes.shape({
      common: PropTypes.string,
    }),
    capital: PropTypes.arrayOf(PropTypes.string),
    continents: PropTypes.arrayOf(PropTypes.string),
  }),
  onClickDeleteCountry: PropTypes.func,
};

export default Country;
