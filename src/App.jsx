import './App.css'
import StoreProvider from "/src/components/StoreProvider"
import TodoList from "/src/components/ToDoList"

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <h1>To Do List App</h1>
        <TodoList />
      </div>

    </StoreProvider>
  )
}

export default App
