import React from "react";
import { Button } from "@material-ui/core";
import "./todo.css";

interface Props {
    readonly createTodo: () => void;
}

export const AddTodo = ({ createTodo }: Props) => {
    return (
        <Button variant="contained" onClick={createTodo}>Добавить</Button>
    );
};