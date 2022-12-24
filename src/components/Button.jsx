import styles from "./Button.module.css";
import { PlusCircle } from "phosphor-react";

export function Button({ onClick, disabled }) {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      Criar <PlusCircle />
    </button>
  );
}
