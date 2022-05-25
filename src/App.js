import SearchCity from './components/SearchCity';

import clear from './assets/clear.mp4';
import rain from './assets/rain.mp4';
import snow from './assets/snow.mp4';

function App() {
  const bgVideoClear = (
    <video autoPlay loop muted style={video}>
      <source src={clear} />
    </video>
  );
  const bgVideoRain = (
    <video autoPlay loop muted style={video}>
      <source src={rain} />
    </video>
  );
  const bgVideoSnow = (
    <video autoPlay loop muted style={video}>
      <source src={snow} />
    </video>
  );

  const citySearchHandler = (city) => {
    console.log(city);
  };

  return (
    <div style={wrapper}>
      {bgVideoSnow}
      <div style={searchField}>
        <SearchCity citySearchHandler={citySearchHandler} />
      </div>
    </div>
  );
}

export default App;

const video = {
  position: 'fixed',
  right: '0',
  bottom: '0',
  minWidth: '100%',
  minHeight: '100%',
  zIndex: '-10',
};

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
