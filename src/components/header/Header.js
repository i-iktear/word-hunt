import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import "./Header.css";
import categories from "../../data/Category";

const Header = ({ category, setCategory, word, setWord, lightMode }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightMode ? "#000" : "#fff",
      },
      type: lightMode ? "light" : "dark",
    },
  });

  const handleChange = (Language) => {
    setCategory(Language);
    setWord("");
  };
  return (
    <div className="header">
      <span className="title"> {word ? word : "Word Hunt"} </span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            label="Enter The Word"
          />
          <TextField
            className="select"
            id="standard-select-currency"
            select
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            label="Language"
          >
            {categories.map((options) => (
              <MenuItem key={options.label} value={options.label}>
                {options.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
