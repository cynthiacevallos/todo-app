// import { useEffect, useState } from "react"
import { useContext } from "react"
import TaskCard from "./TaskCard"
import { TaskContext } from "../context/TaskContext"

function TaskList() {
    const {tasks} = useContext(TaskContext)

    if (tasks.length === 0) {
        return (
            <h1 className="text-white text-4xl text-center font-bold">No hay tareas aun</h1>
        )
    }

    return (
        <div className="grid grid-cols-4 gap-2">
            {/* <h1 className="">Task List</h1> */}

            {tasks.map( (e) =>
                <TaskCard key={e.id} task={e} />
            ) }
        </div>
    )
}

export default TaskList
