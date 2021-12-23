
import './App.css';
import Tasklist from './components/Tasklist'
import Addtask from './components/Addtask'

function App() {
  return (
    <div className="App">
      <Addtask/>
     <Tasklist  />
    </div>
  );
}

export default App;
