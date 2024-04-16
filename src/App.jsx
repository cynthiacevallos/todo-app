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

  function deleteTask(taskId){
    // alert(taskId)
    // console.log(taskId)
     setTasks(tasks.filter((e)=>e.id != taskId))
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  )
}

export default App