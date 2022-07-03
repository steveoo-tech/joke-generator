import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const fetchJoke = async () =>
      await fetch(
        `http://api.icndb.com/jokes/random?firstName=steven&lastName=sidhu`
      )
        .then((res) => res.json())
        .then((data) => {
          setJoke(data.value.joke);
        });

    fetchJoke();
  }, []);

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
