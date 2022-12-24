import styles from "./Button.module.css";
import { PlusCircle } from "phosphor-react";

export function Button({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      Criar <PlusCircle />
    </button>
  );
}
