

function List({taskArr}){
    return (
        <div>
            <ul>
                {taskArr.map((eachTask) => {
            return <li>{eachTask}</li>
          })}
            </ul>
        </div>
    )
}
export default List