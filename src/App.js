import "./App.css";
import useRandomJoke from "./useRandomJoke";

function App() {
  const joke = useRandomJoke();

  return (
    <div className="App">
      <center>
        <h1>Joke Generator</h1>
        <button>Generate Joke</button>

        <h2>{joke}</h2>
      </center>
    </div>
  );
}

export default App;
