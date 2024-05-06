import '../styles/App.scss';
import '../styles/core/reset.scss';
import { useState } from 'react';
import dataCountries from '../services/data.json';
import ListCountries from './ListCountries';
import Filter from './Filter';
import FormAddCountry from './FormAddCountry';

function App() {
  //variable de estado de los datos
  const [countries, setCountries] = useState(dataCountries);

  // Variables de estado del filter:
  const [inputValue, setInputValue] = useState('');
  const [inputSelect, setInputSelect] = useState('All');
  const [removedCountries, setRemovedCountries] = useState([]);

  // Variables de estado de añadir país:
  const [newCountryName, setCountryName] = useState('');
  const [newCountryCapital, setCountryCapital] = useState('');
  const [newCountryFlag, setCountryFlag] = useState('');
  const [newCountryContinent, setCountryContinent] = useState('');

  //Funciones para setear:
  const handleSetInputValue = (value) => {
    setInputValue(value);
  };
  const handleSetInputSelect = (value) => {
    setInputSelect(value);
  };
  const handleSetRemovedCountries = (commonName) => {
    setRemovedCountries((prevValue) => [...prevValue, commonName]);
  };
  const handleSetCountryName = (value) => {
    setCountryName(value);
  };
  const handleSetCountryCapital = (value) => {
    setCountryCapital(value);
  };
  const handleSetCountryFlag = (value) => {
    setCountryFlag(value);
  };
  const handleSetCountryContinent = (value) => {
    setCountryContinent(value);
  };

  //Función para añadir países: creamos el objeto newCountry con el formato importado en el json
  //y con el método spreed añadimos el objeto newCountry al array de objetos de los países:
  const addCountry = () => {
    const newCountry = {
      name: { common: newCountryName },
      capital: [newCountryCapital],
      flag: newCountryFlag,
      continents: [newCountryContinent],
    };
    setCountries([...countries, newCountry]);
  };

  //función para eliminar país: utilizamos como argumento el id que forzamos al crear cada país,
  //formamos una constante con los países y luego la quitaremos el país seleccionado
  //cuyo índice coincida con el click del evento, y setearemos la variable de estado

  // const handleRemoveCountry = (id) => {
  //   const updatedCountries = countries.filter((country) => country.id !== id);
  //   setCountries(updatedCountries);
  //   console.log(updatedCountries);
  // };

  //Función para filtrar según input de nombre país y según select de continente:
  const filteredCountries = countries.filter((country) => {
    if (inputValue && !country.name.common.toLowerCase().includes(inputValue.toLowerCase())) {
      return false;
    }
    if (inputSelect !== 'All' && country.continents[0] !== inputSelect) {
      return false;
    }
    if (removedCountries.length > 0 && removedCountries.includes(country.name.common)) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <header className="header">
        <h1>Country Info App</h1>
        <h2>
          Explore information about countries, capitals, and flags. Add new countries and filter
          through the list!
        </h2>
      </header>
      <FormAddCountry
        onChangeAddName={handleSetCountryName}
        onChangeAddCapital={handleSetCountryCapital}
        onChangeAddFlag={handleSetCountryFlag}
        onChangeAddContinent={handleSetCountryContinent}
        onChangeAddNewCountry={addCountry}
      />

      <Filter onChangeInput={handleSetInputValue} onChangeSelect={handleSetInputSelect} />

      <ListCountries
        infoCountries={filteredCountries}
        onClickDeleteCountry={handleSetRemovedCountries}
      />
    </div>
  );
}

export default App;
