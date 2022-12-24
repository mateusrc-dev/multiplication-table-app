import styles from "./Post.module.css";
import { Trash } from "phosphor-react";

export function Post({ content }) {
  return (
    <div className={styles.container}>
      <div className={styles.checkAndContent}>
        <div className={styles.checkbox}>
          <input type="checkbox" />
          <label></label>
        </div>
        <p>{content}</p>
      </div>
      <button>
        <Trash />
      </button>
    </div>
  );
}
