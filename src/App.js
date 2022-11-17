import Form from "./components/Form";
import List from "./components/List";
import CreatePost from "./components/Post/CreatePost";
import "./styles.css";
import { LoginForm } from "./utils/firebaseAuth";
function App() {
  return (
    <div className="App">
      <LoginForm />
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
      <CreatePost />
      <List />
    </div>
  );
}

export default App;
