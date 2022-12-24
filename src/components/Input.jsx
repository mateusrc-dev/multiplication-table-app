import styles from "./Input.module.css";
import { useState, useEffect } from "react";

export function Input({ newAssignment, handleNewAssignments }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    function handleInput() {
      handleNewAssignments(input);
    }
    handleInput();
  }, [input]);

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Adicione uma nova tarefa!"
      value={newAssignment}
      onChange={(e) => setInput(e.target.value)}
    />
  );
}
