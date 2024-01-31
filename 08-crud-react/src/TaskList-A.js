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

    return (
        <React.Fragment>
            <h1> To do List </h1>
            <ul>
                {
                    tasks ? tasks.map((t) => (
                        <li key={t.id}>
                            {t.id} 
                            <span> {t.description} </span>
                            <span> {t.done.toString()} </span>
                            {/* This is only for checking the state */}
                            <input  type="checkbox"
                                    checked={t.done === true}
                                    onChange={()=> checkTask(t.id)}
                                    value={t.description === true} //description when change to false it will be false
                            />
                            <button> Edit </button>
                            <button onClick={()=> deleteTask(t.id)}> Delete </button>
                            {/* Important that you do not call the function direct without the ()=> on load it will delete alr */}
                        </li>
                    )) : <li> loading </li>
                }
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

