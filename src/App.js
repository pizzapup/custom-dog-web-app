import Form from "./components/Form";
import List from "./components/List";
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#gallery">gallery</a>
          </li>
        </ul>
      </nav>
      <Form />
      <List />
    </div>
  );
}

export default App;
