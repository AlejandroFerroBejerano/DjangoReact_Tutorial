import { useEffect, useState } from "react";
import { getAllTasks} from "../api/task.api";
import { TaskCard } from "./TaskCard";


export function TaskList(){
    const [task, setTasks] = useState([]);

    useEffect(()=>{

        async function loadTasks(){
            const res = await getAllTasks();
            console.log(res.data);
            setTasks(res.data)
        }
        
        loadTasks();

    }, []);

    return (
        <div>
            {task.map(task =>(
               <TaskCard key={task.id} task={task}/>
            ))}
        </div>
    )
}