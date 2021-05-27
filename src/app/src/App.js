import './App.css';
import DataFetching from './DataFetching.js';
import axios from 'axios';

function DataSending(event){
  event.preventDefault();
  var nameValue = document.getElementById("todo").value;
  axios.post('http://localhost:8000/todos/',{"name":nameValue})
    .then(res => {
        console.log(res)
    })
    window.location.reload()
}

export function App() {
  return (
    <div className="App">
      <div>
        <h1>List of TODOs</h1>
        <DataFetching />
      </div>
      <div>
        <h1>Create a ToDo</h1>
        <form onSubmit={DataSending}>
          <div>
            <label for="todo">ToDo: </label>
            <input type="text" id="todo" name="todo"/>
          </div>
          <div style={{"marginTop": "5px"}}>
            <input type="submit" value="Add ToDo!"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;