import React, {useState} from 'react';

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
                (<li key={t.id}>
                    <span> {t.id}</span> 
                    <span> {t.description} </span>
                    <input  type="checkbox"
                            checked={t.done === true}
                            onChange={()=> checkTask(t.id)}
                            value={t.description === true}
                    />
                    <button onClick={()=> {setTaskBeingEdited(t.id); setModifiedTaskName(t.description);}}> Edit </button>
                    <button onClick={()=> deleteTask(t.id)}> Delete </button>
                 </li>
            ) : displayEditTask(t)
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
            <li key={t.id}>
                <span> {t.id}</span>
                <input  type="text"
                        name="modifiedTaskName"
                        value={modifiedTaskName}
                        placeholder="Enter new description"
                        onChange={(event) => setModifiedTaskName(event.target.value)}
                />
                <button onClick={()=>{updateTask(t.id); setTaskBeingEdited(0); setModifiedTaskName('');}}> Confirm </button>
                <button onClick={()=> deleteTask(t.id)}> Delete </button>
        </li>
        )
    }

    return (
        <React.Fragment>
            <h1> To do List </h1>
            <ul>
                {tasks? displayTask(tasks) : <li>Loading...</li>}
            </ul>
            <h2> Create new Task </h2>
            <div>
                <label> Task Description </label>
                <input  type="text" 
                        name="newTaskName"
                        value={newTask}
                        onChange={(event)=> setNewTask(event.target.value)}
                />
                <button onClick={addTask}> Add </button>
                <p> "This is the new Task state:" {newTask} </p>
            </div>
        </React.Fragment>
    )
}


