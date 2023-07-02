import React, { useState, useRef } from "react";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddUpArrow from '@material-ui/icons/KeyboardArrowUp'
import { AccessAlarm } from "@material-ui/icons";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



    function Input(props){

        // Expand Animation
        const [isExpanded, setIsExpanded] = useState(false);

        function expand(){
            setIsExpanded(true);
        }
        
        function minimize(){
            setIsExpanded(false);
        } 

        //Input Values
        const [todoTitle, setTodoTitle] = useState("");
        const [todoDesc, setTodoDesc] = useState("");
        const [dline, setDeadline] = useState(null);

        function addTitle(event){
            const temp = event.target.value;
            setTodoTitle(temp);
        }

        function addDesc(event){            
            const temp = event.target.value;
            setTodoDesc(temp);
        }

        function addDate(event){
            const temp = event.target.value;
            setDeadline(temp);
        }


        // Date picker component
        const [selectedDate, setSelectedDate] = useState(null);
        const datePickerRef = useRef(null);
    
        const handleDateChange = (date) => {
        setSelectedDate(date);
        };
    
        const today = new Date();
        const maxD = new Date();

        maxD.setDate(maxD.getDate() + 7);


        return (
            <div className="input-container" style={{height: isExpanded && "120px"}} >
                {
                    isExpanded && (
                        <div className="input-titlebar" >
                            <input onChange={addTitle} className="input-text" type="text" id="input-title" name="todo-title" placeholder="Task Title" />
                            {/* <button><input type="date" onChange={addDate} /><AccessAlarm/></button> */}
                            {/* <DateSelector /> */}

                            <div className="date-picker">
                            {/* <button onClick={() => { datePickerRef.current.focus(); }}></button> */}
                            <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            minDate={today}
                            maxDate={maxD}
                            default={today}
                            dateFormat="dd-MM-yyyy"
                            placeholderText="Set deadline"
                            ref={datePickerRef}
                            />
                            </div>

                            <button onClick={minimize} className="upArrow"><AddUpArrow /></button>
                        </div>
                    )
                }
                <textarea className="input-text" onClick={expand} onChange={addDesc} id="input-description" width="100%" name="todo-desc" type="text" placeholder="What's on your mind today?" rows="1" />
                
                {
                    isExpanded && (
                        <div className="">
                            <button type="submit" className="addButton" 
                            onClick={
                                ()=> {props.onAdd(todoTitle, todoDesc, selectedDate);}
                            }

                            ><AddCircleOutlineIcon fontSize="large" fill="white"/></button>
                        </div>
                    )
                }
            </div>
        )
    }

export default Input;