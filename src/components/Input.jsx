import styles from "./Input.module.css";
import { useState, useEffect } from "react";

export function Input({ newAssignment, handleNewAssignments, setNewAssignment }) {


  function handleNewAssignmentChange(event) {
    setNewAssignment(event.target.value)
  }


  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Adicione uma nova tarefa!"
      value={newAssignment}
      onChange={handleNewAssignmentChange}
    />
  );
}
