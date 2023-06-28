import { useState } from "react";


    function ListContent(props){

        const tasks = (props.tasks);

        // setTimeout(handleSubmit, 10000);
        
        const listTitle = props.title;

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
                        <p> {listTitle === "" ? "Plan you day now!" : "No tasks available!"}</p>
                    )}
                
            </div>
        )
    }

export default ListContent