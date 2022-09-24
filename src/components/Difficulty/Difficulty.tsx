import styles from "./Difficulty.module.css";

type Props = {
  setDifficulty: (difficulty: string) => void;
};

export const Difficulty = ({ setDifficulty }: Props) => {
  return (
    <div className={styles.Difficulty}>
      <button
        className={styles.Difficulty__Button}
        onClick={() => setDifficulty("easy")}
      >
        😸 Easy words
      </button>
      <button
        className={styles.Difficulty__Button}
        onClick={() => setDifficulty("hard")}
      >
        😼 Hard words
      </button>
    </div>
  );
};
