// import { useEffect, useState } from "react"

import TaskCard from "./TaskCard"

function TaskList(props) {
    if (props.tasks.length === 0) {
        return (
            <h1>No hay tareas aun</h1>
        )
    }

    return (
        <div>
            <h1>Task List</h1>
            {props.tasks.map((e) =>
                <TaskCard key={e.id} task={e} />
            )}
        </div>
    )
}

export default TaskList
