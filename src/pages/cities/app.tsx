import Cities from './cities';

type CitiesScreenProps = {
  offerCardCount: number;
}

function App({offerCardCount}: CitiesScreenProps) {
  return (
    <Cities offerCardCount = {offerCardCount} />
  );
}

export default App;
