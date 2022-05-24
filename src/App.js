import SearchCity from './components/SearchCity';

function App() {
  return (
    <div style={wrapper}>
      <div style={searchField}>
        <SearchCity />
      </div>
    </div>
  );
}

export default App;

const wrapper = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
};

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
