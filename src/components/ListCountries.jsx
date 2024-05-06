import Country from './Country';
import '../styles/components/ListCountries.scss';
import PropTypes from 'prop-types';

//Componente para renderizar la lista, pasamos 2 proptipes para su componente hijo.
//Muy importante la prop del id al renderizar el componente hijo e identificarle cuando se haga click en él
function ListCountries({ infoCountries, onClickDeleteCountry }) {
  return (
    <div className="list">
      {infoCountries.map((infoCountry, id) => {
        return (
          <Country
            key={id}
            id={id}
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
