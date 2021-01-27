import SignInWrapper from "./SignInWrapper";
import SignOutButton from "./SignOutButton";
import TodoList from "./TodoList";

function App() {
  return (
    <SignInWrapper>
      <SignOutButton />
      <TodoList />
    </SignInWrapper>
  );
}

export default App;
