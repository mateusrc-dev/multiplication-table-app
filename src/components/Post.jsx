import styles from "./Post.module.css";
import { Trash } from "phosphor-react";

export function Post({ content, check, handleAssignmentsDelete }) {
  function handleDeleteAssignments() {
    handleAssignmentsDelete(content);
  }

  return (
    <div className={styles.container}>
      <div className={styles.checkAndContent}>
        <div className={styles.checkbox}>
          <input type="checkbox" defaultChecked={check} />
          <label></label>
        </div>
        <p>{content}</p>
      </div>
      <button onClick={handleDeleteAssignments}>
        <Trash />
      </button>
    </div>
  );
}
