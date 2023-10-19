import TaskifyHeaders from "./Component/TaskifyHeaders"
import TaskifyNavbar from "./Component/TaskifyNavbar"
import TaskifySideBar from "./Component/TaskifySideBar"
import TaskifyTodoCard from "./Component/TaskifyTodoCard"

function App() {
  return (
    <div className="h-screen flex flex-col bg-zinc-800">
      <TaskifyHeaders />
      <TaskifyNavbar />
      <div className="flex flex-grow">
        <TaskifySideBar />
        <TaskifyTodoCard />
      </div>
    </div>
  )
}

export default App
