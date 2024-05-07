import '../styles/components/Form.scss';
import PropTypes from 'prop-types';

function Form({
  onChangeAddName,
  onChangeAddCapital,
  onChangeAddFlag,
  onChangeAddContinent,
  onChangeAddNewCountry,
}) {
  const handleAddName = (event) => {
    onChangeAddName(event.target.value);
  };
  const handleAddCapital = (event) => {
    onChangeAddCapital(event.target.value);
  };
  const handleAddFlag = (event) => {
    onChangeAddFlag(event.target.value);
  };
  const handleAddContinent = (event) => {
    onChangeAddContinent(event.target.value);
  };
  const handleNewCountry = (event) => {
    event.preventDefault();
    onChangeAddNewCountry();
  };

  return (
    <>
      <h3 className="titlesFilter">Add Country:</h3>
      <form className="form" action="">
        <input className="input" type="text" placeholder="Country name" onChange={handleAddName} />
        <input className="input" type="text" placeholder="Capital" onChange={handleAddCapital} />
        <input className="input" type="text" placeholder="Flag" onChange={handleAddFlag} />
        <input
          className="input"
          type="text"
          placeholder="Continent"
          onChange={handleAddContinent}
        />
        <input type="submit" value="Enviar" className="buttonSubmit" onClick={handleNewCountry} />
      </form>
    </>
  );
}

Form.propTypes = {
  onChangeAddName: PropTypes.func,
  onChangeAddCapital: PropTypes.func,
  onChangeAddFlag: PropTypes.func,
  onChangeAddContinent: PropTypes.func,
  onChangeAddNewCountry: PropTypes.func,
};

export default Form;
