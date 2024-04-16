import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

function TaskCard({ task }) {
    const { deleteTask } = useContext(TaskContext)
    function mostrarAlerta() {
        deleteTask(task.id)
    }

    return (
        <div className="bg-gray-800 text-white p-4 rounded-md">
            <h2 className="text-2xl font-bold capitalize">{task.title}</h2>
            <p className="text-gray-500 text-sm">{task.descripcion}</p>
            <button className="bg-red-500 rounded-md py-2 px-2 hover:bg-red-400" onClick={mostrarAlerta}>Eliminar tarea</button>
        </div>
    )
}

export default TaskCard
