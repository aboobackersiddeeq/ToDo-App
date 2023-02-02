import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Todo from './components/ToDoApp/Todo';
import Main from './react-router/Main';

function App() {
  return (
    <div className="App">
      {/* <Main/> */}
      <Todo/>
       {/* <button className="btn btn-info" type="">hi</button> */}
    </div>
  );
}

export default App;
