import Country from './Country';
import '../styles/components/ListCountries.scss';
import PropTypes from 'prop-types';

//componente para renderizar la lista, pasamos 2 proptypes para su componente hijo
//como key ponemos el nombre del pais (no el index del array MUY IMPORTANTE)
function ListCountries({ infoCountries, onClickDeleteCountry }) {
  return (
    <div className="list">
      {infoCountries.map((infoCountry) => {
        return (
          <Country
            key={infoCountry.name.common}
            infoCountry={infoCountry}
            onClickDeleteCountry={onClickDeleteCountry}
          />
        );
      })}
    </div>
  );
}

ListCountries.propTypes = {
  infoCountries: PropTypes.array,
  onClickDeleteCountry: PropTypes.func,
};

export default ListCountries;
