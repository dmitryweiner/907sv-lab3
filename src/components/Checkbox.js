import React from 'react';

export default function Checkbox() {
  const [checked, setChecked] = React.useState(true);

  return (
    <label>
      <input type="checkbox" defaultChecked={!checked} onChange={() => setChecked(!checked)} />
    </label>
  );
}
