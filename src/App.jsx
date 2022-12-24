import './global.css'
import { Post } from "./components/Post";
import { Header } from "./components/Header";

export function App() {
  return (
    <div className="App">
      <Header />
      <Post
        content={"qualquer coisa suahauhsaushaushaushu!!!"}
      />
    </div>
  );
}
