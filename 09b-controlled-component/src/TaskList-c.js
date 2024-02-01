import React, {useState} from 'react';
import AddTaskForm from './AddTaskForm';
import TaskItem from './TaskItem';
import EditTask from './EditTask';

export default function TaskList (){

    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                description:'Walk the dog',
                done:false
            },
            {
                id: 2,
                description:'Water the plants',
                done:false
            },
            {
                id: 3,
                description:'Pay the bills',
                done:false
            }
        ]
    );

    // adding new task
    const [newTask, setNewTask] = useState('');

    // modifying task
    const [taskBeingEdited, setTaskBeingEdited] = useState(0);
    const [modifiedTaskName, setModifiedTaskName] = useState('');

    function checkTask(taskId){
        let targetedTask = tasks.filter(t => t.id === taskId)[0]; //shallow copy first instance
        targetedTask.done = !targetedTask.done;
        
        let modifiedTaskList = tasks.map( t => {
            if (t.id !== taskId){
                return t;
            } else {
                return targetedTask;
            }
        })
        setTasks(modifiedTaskList);
    }

    function addTask(){      
        let newEntry ={
            id: tasks.length + 1,
            description: newTask,
            done: false
        }
        setTasks([...tasks, newEntry]);
    }

    function deleteTask (taskId) {

        let targetedIndex = tasks.findIndex(t => t.id === taskId);
        let modifiedTasks = [...tasks.slice(0, targetedIndex), ...tasks.slice(targetedIndex+1)];

        setTasks(modifiedTasks)
    }

    // Step 1: This is a refactoring and to allow for more control over displaying by packaging in a function
    function displayTask(tasks){
        return (
            tasks.map((t) => (
                taskBeingEdited !== t.id ?
                <TaskItem   task={t}
                            checkTask={checkTask}
                            setTaskBeingEdited={setTaskBeingEdited}
                            setModifiedTaskName={setModifiedTaskName}
                            deleteTask={deleteTask}                
                />
              : displayEditTask(t)
            ))
        )
    }

    // This is the actual function that will update the tasks state
    function updateTask (taskId){
        
        let currentTask = tasks.filter((t)=> t.id === taskId); //this returns an array
        let modifiedTask = currentTask[0]; //get the singular objet

        modifiedTask.description = modifiedTaskName; //give the description key a new value
        
        let modifiedTaskList = tasks.map((t) => {
            if (t.id !== taskId){
                return t;
            } else {
                return modifiedTask;
            }
        })
        setTasks(modifiedTaskList);
    }

    function displayEditTask(t){
        return (
            <EditTask   task={t}
                        modifiedTaskName={modifiedTaskName}
                        setModifiedTaskName={setModifiedTaskName}
                        updateTask={updateTask}
                        deleteTask={deleteTask}
                        setTaskBeingEdited={setTaskBeingEdited}
            />
        )
    }

    return (
        <React.Fragment>
            <h1> To do List </h1>
            <ul>
                {tasks? displayTask(tasks) : <li>Loading...</li>}
            </ul>
            <AddTaskForm    newTask={newTask} 
                            setNewTask={setNewTask}
                            addTask={addTask}
            />
        </React.Fragment>
    )
}


