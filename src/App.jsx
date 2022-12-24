import "./global.css";
import styles from "./App.module.css";
import Clipboard from "./assets/Clipboard.svg";
import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { useState } from "react";

export function App() {
  const [assignments, setAssignments] = useState([
    {
      check: true,
      content:
        "assistir todos os episódios de naruto, naruto shippuden e boruto",
    },
  ]);
  const [newAssignment, setNewAssignment] = useState("");

  function handleAddNewAssignments() {
    setAssignments((prevState) => [
      ...prevState,
      { check: false, content: newAssignment },
    ]);
    setNewAssignment("");
  }

  function handleNewAssignments(newAssignment) {
    setNewAssignment(newAssignment);
  }

  function handleAssignmentsDelete(deleted) {
    const assignmentsWithoutDelete = assignments.filter(
      (assignment) => assignment.content !== deleted
    );
    setAssignments(assignmentsWithoutDelete);
  }

  return (
    <main>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.inputAndButton}>
          <Input
            handleNewAssignments={handleNewAssignments}
            newAssignment={newAssignment}
          />
          <Button onClick={handleAddNewAssignments} />
        </div>
        <div className={styles.tasks}>
          <div className={styles.tasksCreated}>
            <strong>Tarefas criadas</strong>
            <span>{assignments.length}</span>
          </div>
          <div className={styles.completedTasks}>
            <strong>Concluídas</strong>
            <span>2 de {assignments.length}</span>
          </div>
        </div>
        <div className={styles.posts}>
          {assignments.map((assignment) => (
            <Post
              key={String(assignment.content)}
              content={assignment.content}
              check={assignment.check}
              handleAssignmentsDelete={handleAssignmentsDelete}
            />
          ))}
        </div>
        {assignments.length === 0 ? (
          <div className={styles.nullAssignments}>
            <img src={Clipboard} alt="lista vazia" />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong> <br />
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        ) : null}
      </div>
    </main>
  );
}
