import { useState } from "react";
function Inputbox(props){
    const {addTask} =props;
    const [value, setValue] = useState('');
    function handleInput(event){
        setValue(event.target.value)
    }
    function addTaskChild(){
        addTask(value,setValue);
    }
    return (
        <>
            <div>
                <input type="text" value={value} placeholder='Enter the Todo' onChange={handleInput}></input>
                <button onClick={addTaskChild}>Submit</button>
            </div>
        </>
    )
}
export default Inputbox