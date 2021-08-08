import React from "react";
import "./Definitions.css";

const Definitions = ({ word, category, meaning, lightMode }) => {
  return (
    <div className="meanings">
      {meaning[0] && word && category === "en" && (
        <audio
          style={{
            backgroundColor: lightMode ? "#3b5360" : "#fff",
            borderRadius: 10,
          }}
          src={meaning[0].phonetics[0] && meaning[0].phonetics[0].audio}
          controls
        ></audio>
      )}

      {word === "" ? (
        <span className="subTitle">Start By Typing a Word In Searchbox </span>
      ) : (
        meaning.map((item) =>
          item.meanings.map((meanings) =>
            meanings.definitions.map((def) => (
              <div
                className="singleMean"
                style={{
                  backgroundColor: lightMode ? "#3b5360" : "#fff",
                  color: lightMode ? "white" : "black",
                }}
              >
                <b> {def.definition} </b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example: </b> {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms: </b>
                    {def.synonyms.map((syn) => `${syn},`)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
