import { useState } from "react";
import "./styles.css";
import { easyWords, hardWords, randomWord } from "./words";
import { DoomCat } from "./DoomCat";
import { HappyCat } from "./HappyCat";
import { Difficulty } from "./components/Difficulty/Difficulty";
import styles from "./App.module.css";

export default function App() {
  const alphabet = [];
  const [wordSet, setWordSet] = useState<Array<string>>([]);
  const [selected, setSelected] = useState<Array<string>>([]);
  const [word, setWord] = useState("");
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [won, setWon] = useState(false);
  const [difficulty, setDifficulty] = useState("");
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
    setWord(randomWord(wordSet));
  };

  const setDifficultyLevel = (level: string) => {
    if (level === "easy") {
      setDifficulty("easy");
      setWordSet(easyWords);
      setWord(randomWord(easyWords));
    } else {
      setDifficulty("hard");
      setWordSet(hardWords);
      setWord(randomWord(hardWords));
    }
  };

  const renderWord = () => {
    let letters;
    if (wrongGuesses >= limit) {
      letters = word.split("").map((character) => {
        return <div className="word__letter">{character}</div>;
      });
    } else {
      letters = word.split("").map((character) => {
        if (selected.includes(character)) {
          return <div className="word__letter">{character}</div>;
        } else {
          return <div className="word__letter word__letter--empty"></div>;
        }
      });
    }

    return <div className="word">{letters}</div>;
  };

  return (
    <div className={styles.App}>
      <div className="doomcat">
        {won && <HappyCat />}
        {!won && <DoomCat doomed={wrongGuesses} />}
      </div>

      {difficulty && renderWord()}

      {!difficulty && <Difficulty setDifficulty={setDifficultyLevel} />}
      {difficulty && (
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
      )}
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
