import { useState } from "react";
import Inputbox from './Inputbox';
import List from './List';


function Todo(){
    const [taskArr, setTaskArr]= useState([])

    function addTask(value, setValue){
        const newTask=value;
        const newTaskArr=[...taskArr,newTask];
        setTaskArr(newTaskArr);
        setValue("")
  }
  return (
    <>
        <div>
            <Inputbox addTask={addTask}/>
            <List taskArr={taskArr}/>
        </div>
    </>
  )
}

export default Todo