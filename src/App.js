import SignInWrapper from "./SignInWrapper";
import SignOutButton from "./SignOutButton";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  return (
    <div class="app">
      <SignInWrapper>
        <SignOutButton />
        <TodoList />
      </SignInWrapper>
    </div>
  );
}

export default App;
