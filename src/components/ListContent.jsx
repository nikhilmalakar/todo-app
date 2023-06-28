import { useState } from "react";


    function ListContent(props){

        const tasks = (props.tasks);

        // setTimeout(handleSubmit, 10000);

        return(
            <div>
                    {tasks && tasks.length > 0 ? (
                        <ul>
                        {tasks.map((task, index) => (
                            <li key={index}>
                                {/* <input className="list-checkbox" type="checkbox" ></input> */}
                            <strong>{task.title}</strong> - {task.description}
                            </li>
                        ))}
                        </ul>
                    ) : (
                        <p>No tasks for today</p>
                    )}
                
            </div>
        )
    }

export default ListContent