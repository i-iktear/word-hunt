import { Container, withStyles } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Definitions from "./components/definitions/Definitions";
import { grey } from "@material-ui/core/colors";
import Switch from "@material-ui/core/Switch";

function App() {
  const [meaning, setMeaning] = useState([]);
  const [category, setCategory] = useState("en");
  const [word, setWord] = useState("");
  const [lightMode, setLightmode] = useState(false);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeaning(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      "&$checked": {
        color: grey[500],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  return (
    <div
      className="App"
      style={{
        height: "100Vh",
        backgroundColor: lightMode ? "#fff" : "#282c34",
        color: lightMode ? "black" : "white",
        transition: "all 0.5s linear",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          height: "100vh",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ position: "absolute", top: 0, right: 15, padding: 10 }}>
          <span>{lightMode ? "Dark" : "Light"} Mode</span>
          <DarkMode
            checked={lightMode}
            onChange={() => setLightmode(!lightMode)}
          />
        </div>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          lightMode={lightMode}
        />
        {meaning && (
          <Definitions
            word={word}
            meaning={meaning}
            category={category}
            lightMode={lightMode}
          ></Definitions>
        )}
      </Container>
    </div>
  );
}

export default App;
