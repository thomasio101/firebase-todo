import SignInWrapper from "./SignInWrapper";
import TodoList from "./TodoList";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="app">
      <SignInWrapper>
        <Navbar />
        <TodoList />
      </SignInWrapper>
    </div>
  );
}

export default App;
