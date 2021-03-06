import { useState } from 'react';

import LocationOnIcon from '@mui/icons-material/LocationOn';

const SearchCity = ({ citySearchHandler }) => {
  const [inputValue, setInputValue] = useState('');
  const [city, setCity] = useState('');

  const searchHandler = () => {
    setCity(() => inputValue);

    citySearchHandler(city);

    // setInputValue(() => '');
  };

  return (
    <div style={inputField}>
      <input
        style={input}
        placeholder='Enter city...'
        value={inputValue}
        onChange={(e) => setInputValue(() => e.target.value)}
      />
      <LocationOnIcon
        style={{ cursor: 'pointer' }}
        onClick={() => searchHandler()}
      />
    </div>
  );
};

export default SearchCity;

console.log();

const inputField = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'max-content',
  margin: '30px',
  padding: '5px',
  backgroundColor: '#ffffff',
  borderRadius: '5px',
  border: '1px solid #000000',
};

const input = {
  border: 'none',
  outline: 'none',
};
