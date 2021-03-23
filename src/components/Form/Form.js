import React from 'react';

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
    <div className="FormWrapper">
      <input
        type="text"
        placeholder="Enter a deed"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button data-testid="I'm addButton" onClick={emptinessCheck}>
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
      {errorMessage}
    </div>
  );
}

export default Form;
