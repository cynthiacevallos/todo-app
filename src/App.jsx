import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import { tasks as data} from "./data/tasks"
import { useEffect,useState } from "react"

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
      setTasks(data)
  }, [ ])


  function createTask (task) {
    setTasks([...tasks,{
      title: task.title,
      id: tasks.length,
      descripcion:task.description
    }])
  }

  return (
    <> 
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks}/>

    </>
  )
}

export default App