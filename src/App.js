import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Card, ModalButton } from './components';
import { useContext } from 'react';
import { DestinationsContext } from './context/destination/context';




function App() {
  const [state, dispatch] = useContext(DestinationsContext)
  console.log(state)
  return (
    <div className="App">
      <ModalButton />
      <div className='Card-list'>
        {state.items.map((destination, index) => {
          return <Card key={index} data={destination}  />;
        })}
      </div>
    </div>
  );
}

export default App;
