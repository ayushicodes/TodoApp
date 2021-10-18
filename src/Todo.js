import React from "react"

function Todo(props) {
    return (
        <div>

            <input type="checkbox" />
            <span>{props.Tododata.activity}</span>

        </div>
    )
}

export default Todo;