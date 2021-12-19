import { Comments } from "./components/Comments";

function App() {
  return (
    <div className="App">
      <h1 className="main-title">SBER Comment Assignment</h1>
      <Comments currentUserId="1" />
    </div>
  );
}

export default App;
