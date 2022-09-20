import { useState } from "react";
import "./styles.css";
import { words, randomWord } from "./words";
import { DoomCat } from "./DoomCat";
import { HappyCat } from "./HappyCat";

import styles from "./App.module.css";

export default function App() {
  const alphabet = [];
  const [selected, setSelected] = useState<Array<string>>([]);
  const [word, setWord] = useState(randomWord(words));
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [won, setWon] = useState(false);
  const limit = 7;

  for (let i = 0; i < 26; i++) {
    alphabet.push(String.fromCharCode(i + 65).toLocaleLowerCase());
  }

  const characterSelected = (character: string) => {
    if (selected.includes(character)) {
      return false;
    }
    if (wrongGuesses >= limit) {
      return false;
    }

    if (!word.includes(character)) {
      setWrongGuesses(wrongGuesses + 1);
    }
    const newSelected = [...selected, character];
    setSelected(newSelected);

    setWon(
      word.split("").filter((character) => newSelected.includes(character))
        .length === word.length
    );
  };

  const reset = () => {
    setWrongGuesses(0);
    setWon(false);
    setSelected([]);
    setWord(randomWord(words));
  };

  const renderWord = () => {
    const letters = word.split("").map((character) => {
      if (selected.includes(character)) {
        return <div className="word__letter">{character}</div>;
      } else {
        return <div className="word__letter word__letter--empty"></div>;
      }
    });
    return <div className="word">{letters}</div>;
  };

  return (
    <div className={styles.App}>
      <div className="doomcat">
        {won && <HappyCat />}
        {!won && <DoomCat doomed={wrongGuesses} />}
      </div>

      {renderWord()}

      <ul className="buttons">
        {alphabet.map((char) => (
          <li>
            <button
              data-selected={selected.includes(char)}
              onClick={() => characterSelected(char)}
              className="alphabet__button"
            >
              {char}
            </button>
          </li>
        ))}
      </ul>
      {wrongGuesses >= limit && (
        <button className={styles.BigButton} onClick={reset}>
          Try again!
        </button>
      )}
      {won && (
        <button className={styles.BigButton} onClick={reset}>
          Doom Cat defeated!
        </button>
      )}
    </div>
  );
}
