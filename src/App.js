import './App.css';
import Redux from './redux';
import store from './app/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Provider store={store}>
          <Redux />
      </Provider>
      </header>
    </div>
  );
}

export default App;
