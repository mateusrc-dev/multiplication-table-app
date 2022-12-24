import styles from "./Post.module.css";
import { Trash } from "phosphor-react";

export function Post({
  content,
  check,
  handleAssignmentsDelete,
  handleCheckAssignment,
  index
}) {
  function handleDeleteAssignments() {
    handleAssignmentsDelete(content);
  }

  function handleCheck() {
    handleCheckAssignment(index);
  }

  return (
    <div className={styles.container}>
      <div className={styles.checkAndContent}>
        <div className={styles.checkbox}>
          <input type="checkbox" defaultChecked={check} onClick={handleCheck} />
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
