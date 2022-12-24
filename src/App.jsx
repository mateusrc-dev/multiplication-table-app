import "./global.css";
import styles from "./App.module.css";
import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

export function App() {
  return (
    <main>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.inputAndButton}>
          <Input />
          <Button />
        </div>
        <div className={styles.tasks}>
          <div className={styles.tasksCreated}>
            <strong>Tarefas criadas</strong>
            <span>5</span>
          </div>
          <div className={styles.completedTasks}>
            <strong>Concluídas</strong>
            <span>2 de 5</span>
          </div>
        </div>
        <div className={styles.posts}>
        <Post content={"assistir mais anime!"} />
        <Post content={"assistir anime!"} />
        <Post content={"jogar nintendo switch!"} />
        <Post
          content={
            "jogar nintendo switch! jogar nintendo switch!jogar nintendo switch!jogar nintendo switch!jogar nintendo switch!jogar nintendo switch!jogar nintendo switch!jogar nintendo switch!jogar nintendo switch!jogar nintendo switch!jogar nintendo switch!jogar nintendo switch!jogar nintendo switch!jogar nintendo switch!"
          }
        />
        </div>
      </div>
    </main>
  );
}
