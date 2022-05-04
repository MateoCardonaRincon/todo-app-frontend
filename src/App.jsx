import './App.css'
import StoreProvider from "/src/components/StoreProvider"
import TodoList from "/src/components/ToDoList"
import Form from "/src/components/Form"

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <h1>To Do List App</h1>
        <Form />
        <TodoList />
      </div>
    </StoreProvider>
  )
}

export default App
