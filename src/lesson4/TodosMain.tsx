import React from "react";
import Todo from "./Todo";
import { data } from "./data";
import "./todo.css"

export function Todos() {
    return (
        <>
            <h2 className="todosTitle">Todos</h2>
            <Todo>{data[0].name}</Todo>
        </>
    );
}