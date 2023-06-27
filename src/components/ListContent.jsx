import { useState } from "react";


    function ListContent(props){

        const tasks = (props.tasks);

        // setTimeout(handleSubmit, 10000);

        return(
            <div>
                <ul>
                    {tasks && tasks.length > 0 ? (
                        <ul>
                        {tasks.map((task, index) => (
                            <li key={index}>
                            <strong>{task.title}</strong> - {task.description}
                            </li>
                        ))}
                        </ul>
                    ) : (
                        <p>No tasks for today</p>
                    )}
                </ul>
            </div>
        )
    }

export default ListContent