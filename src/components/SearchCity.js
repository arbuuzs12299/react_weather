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

const searchField = {
  display: 'flex',
  //   alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: '#000000',
  height: '400px',
  width: '400px',
  border: '1px solid #000000',
};

const inputField = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'max-content',
  marginTop: '30px',
  padding: '5px',
  backgroundColor: '#ffffff',
  borderRadius: '5px',
  border: '1px solid #000000',
};

const input = {
  border: 'none',
  outline: 'none',
};
