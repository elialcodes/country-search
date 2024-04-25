import '../styles/components/Country.scss';
import PropTypes from 'prop-types';

function Country({ id, infoCountry, onClickDeleteCountry }) {
  const handleRemoveCountry = (event) => {
    onClickDeleteCountry(event.target.id);
  };

  return (
    <div className="card">
      <p className="flag">{infoCountry.flag}</p>
      <p>{infoCountry.name.common}</p>
      <p>{infoCountry.capital[0]}</p>
      <p>{infoCountry.continents[0]}</p>
      <button className="button" id={id} onClick={handleRemoveCountry}>
        Eliminar
      </button>
    </div>
  );
}

Country.propTypes = {
  id: PropTypes.number,
  infoCountry: PropTypes.object,
  flag: PropTypes.string,
  name: PropTypes.string,
  capital: PropTypes.string,
  continents: PropTypes.string,
  onClickDeleteCountry: PropTypes.func,
};

export default Country;
