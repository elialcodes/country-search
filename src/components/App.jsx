// Fichero src/components/App.jsx, componente principal de la web
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

  // Variables de estado de añadir país:
  const [newName, setCountryName] = useState('');
  const [newCapital, setCountryCapital] = useState('');
  const [newFlag, setCountryFlag] = useState('');
  const [newContinent, setCountryContinent] = useState('');

  //Funciones para setear:
  const handleSetInputValue = (value) => {
    setInputValue(value);
  };
  const handleSetInputSelect = (value) => {
    setInputSelect(value);
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

  //Función para añadir países: consite en crear el objeto newCountry, cuyos datos
  //mantendrán el formato importado en el json: name es un objeto, capital un array
  //etc...
  //y con el método spreed añadimos el objeto newCountry al array de objetos de
  //los países:
  const addCountry = () => {
    const newCountry = {
      name: { common: newName },
      capital: [newCapital],
      flag: newFlag,
      continents: [newContinent],
    };
    setCountries([...countries, newCountry]);
  };

  //función para eliminar país: utilizamos como argumento el index que forzamos al crear cada
  //país y con spreed formamos una constante con los países, a la que quitaremos el país seleccionado
  //cuyo índice coincida con el click del evento, y la setearemos como nuevo estado de la variable
  //de estado
  const deleteCountry = (index) => {
    const previousCountries = [...countries];
    previousCountries.splice(index, 1);
    setCountries(previousCountries);
  };

  //Función para filtrar según input de nombre país y según select de continente:
  const filteredCountries = countries
    .filter((country) => {
      return country.name.common.toLowerCase().includes(inputValue.toLowerCase());
    })
    .filter((country) => {
      return inputSelect !== 'All' ? country.continents[0] === inputSelect : true;
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

      <ListCountries infoCountries={filteredCountries} onClickDeleteCountry={deleteCountry} />
    </div>
  );
}

export default App;
