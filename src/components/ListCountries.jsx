import Country from './Country';
import '../styles/components/ListCountries.scss';
import PropTypes from 'prop-types';

//Al crear este componente, pasamos 2 proptipes que en realidad son para su componente hijo,
//pero es aquí donde renderizamos la lista
//Muy importante la prop del id para renderizar el componente hijo e identificarle cuando se hace
//click en él
function ListCountries({ infoCountries, onClickDeleteCountry }) {
  return (
    <div className="list">
      {infoCountries.map((infoCountry, i) => {
        return (
          <Country
            key={i}
            id={i}
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
