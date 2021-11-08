import React from "react"
import './App.css';

function Todo(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div className="todo-item">
            <span style={props.Tododata.completed ? completedStyle : null}>{props.Tododata.activity}</span>

            <input type="checkbox"
                // checked={props.Tododata.completed}
                onChange={() => props.handleChange(props.Tododata.id)}
            />


        </div>
    )
}

export default Todo;