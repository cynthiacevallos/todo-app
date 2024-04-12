import { useState } from "react"

function TaskForm({createTask}) {
    const [title, setTtle] = useState('')
    const [description, setDescription] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(title)
        createTask({title,description})
        setTtle('')
        setDescription('')
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input placeholder="Escribe tu tarea"
            onChange={(e)=>setTtle(e.target.value)}
            value={title}
            autoFocus
            />
            <textarea placeholder="Escriba descripcion de tarea"
            onChange={(e)=>setDescription(e.target.value)}
            value={description}
            />
            <button>Guardar</button>
        </form>
    )
}

export default TaskForm
