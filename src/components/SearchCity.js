import LocationOnIcon from '@mui/icons-material/LocationOn';

const SearchCity = () => {
  return (
    <div style={inputField}>
      <input style={input} placeholder='Enter city...' />
      <LocationOnIcon style={{ cursor: 'pointer' }} />
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
