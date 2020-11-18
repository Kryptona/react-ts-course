import React from "react";
import { Checkbox, TextField } from "@material-ui/core";
import "./todo";

interface Props {
    readonly children: React.ReactNode;
}

const Todo = ({ children }: Props) => {
    return (
        <div className="container">
            <div className="todo">
                {/*<TextField className="inputTodo" id="standard-basic" label="Outlined"/>*/}
                {/*{children}*/}
                <input className="inputTodo" />
                <Checkbox className="checkTodo" color={"primary"}/>
            </div>
        </div>
    );
};

export default Todo;