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
    <div className="App" class="body">
      <style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
</style>
      <div>
        <p class="heading">List of TODOs</p>
        <DataFetching />
      </div>
      <div>
        <h1 class="heading">Create a ToDo</h1>
        <form onSubmit={DataSending}>
          <div>
            <label class="data" for="todo">ToDo: </label>
            <input class="data" type="text" id="todo" name="todo"/>
          </div>
          <div style={{"marginTop": "5px"}}>
            <input class="gradient-button" type="submit" value="Add ToDo!"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;