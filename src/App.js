import './App.css';
import { answers } from './eightballAnswers';
import Eightball from './Eightball';

// TODO: docstring for app

function App() {
  return (
    <div className="App">
      <Eightball answers={ answers }/>
    </div>
  );
}

export default App;
