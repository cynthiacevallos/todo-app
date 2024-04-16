// import { TaskContextProvider } from "../context/TaskContext"
function TaskCard({ task, deleteTask }) {
    function mostrarAlerta() {
        // alert(task.id)
        deleteTask(task.id)
    }

    return (
        // <TaskContextProvider>
            <div>
                <h2>{task.title}</h2>
                <p>{task.descripcion}</p>
                <button onClick={mostrarAlerta}>Eliminar tarea</button>
            </div>
        // </TaskContextProvider>



    )
}

export default TaskCard
