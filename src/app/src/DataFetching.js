import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching(){
    const [tasks,setTasks] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/todos')
        .then(res => {
            console.log(res)
            setTasks(res.data)
        })
    }, [])

    return (
        <div>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} class="data">{task.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default DataFetching