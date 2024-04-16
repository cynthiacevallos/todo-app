import { useState, useContext } from "react"
import { TaskContext } from "../context/TaskContext"



function TaskForm() {
    const [title, setTtle] = useState('')
    const [description, setDescription] = useState("")

    const { createTask } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(title)
        createTask({ title, description })
        setTtle('')
        setDescription('')
    }

    return (
        <div className="max-w-md mx-auto">
            <form className="bg-slate-800 p-10 mb-4" onSubmit={(e) => handleSubmit(e)}>
                <p className="text-white py-2 text-2xl">Añada un To Do</p>

                <input placeholder="Escribe tu tarea"
                    onChange={(e) => setTtle(e.target.value)}
                    value={title}
                    className="bg-slate-300 p-3 w-full mb-2 rounded-md"
                    autoFocus
                />
                <textarea placeholder="Escriba descripcion de tarea"
                    className="bg-slate-300 p-3 w-full mb-2 rounded-md"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
                <button className="bg-indigo-500 text-white w-full p-2 rounded-md hover:bg-indigo-400">Guardar</button>
            </form>
        </div>
    )
}

export default TaskForm
