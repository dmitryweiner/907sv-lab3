import React from 'react';
import '../../App.css';

function Form({ addHandler, isFilterDone, filterHandler }) {
  const [inputValue, setInputValue] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  function emptinessCheck() {
    // console.log('emptinessCheck', inputValue);
    if (inputValue === '') {
      // alert('Enter something first (￢_￢;)');
      setErrorMessage('Enter something first (￢_￢;)');
    } else {
      setErrorMessage('');
      setInputValue('');
      return addHandler(inputValue);
    }
  }
  return (
    <div className="formWrapper">
      <input
        id="formInput"
        type="text"
        placeholder="Enter a deed"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button id="formAddButton" data-testid="I'm addButton" onClick={emptinessCheck}>
        Add a deed
      </button>
      <br />
      <input
        type="checkbox"
        data-testid="filterCheckbox"
        checked={isFilterDone}
        onChange={filterHandler}
      />
      {' show only done deeds '}
      <br />
      <div className="errorMessage">{errorMessage}</div>
    </div>
  );
}

export default Form;
