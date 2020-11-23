import React from "react";
import Todo from "./Todo";
import { data } from "./data";
import { AddTodo } from "./AddTodo-bt";
import "./todo.css";

export function Todos() {
    return (
        <>
            <div className="wrapper">
                <h2 className="header">Todos</h2>
                <Todo>{data[0].name}</Todo>
            </div>
            <div className="footer">
                <AddTodo/>
            </div>
        </>
    );
}