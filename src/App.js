import image from './todolist.jpeg'
import './App.css';
import { List } from './List';

function App() {
  return (
    <div className="App">
      <h1>to do list</h1>
      <p>{new Date().toDateString()}</p>
      
      <img src={image} alt='notebook' width="300px"/>
      
      
      <List/>
    </div>
  );
}

export default App;
