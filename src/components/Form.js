import React from 'react';

export default function Form({ handleSubmit }) {
  const [value, setValue] = React.useState('');
  const [alert, setAlert] = React.useState('');

  function submitHandler(e) {
    e.preventDefault();
    if (value.length === 0) {
      setAlert('Пустая задача');
    } else {
      handleSubmit(value);
      setAlert('');
    }
    setValue('');
  }

  return (
    <form data-testid="form" onSubmit={submitHandler}>
      <div className="alertSend">{alert}</div>
      <input data-testid="input" value={value} onChange={e => setValue(e.target.value)} />
      <button type="submit">Save</button>
    </form>
  );
}
