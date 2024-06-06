import {Button} from "../common/Button.js";
import {Header} from "../../data/header/Header.js";
import {TasksList} from "../../data/tasksList/TasksList.js";
import {AddNewTaskDialog} from "../../AddNewTaskDialog/AddNewTaskDialog.js";
import {openAddNewTaskDialog} from "../../data/data.js";

export function Todolist(todolistData) {

    const container = document.createElement('div');
    const headerElement = Header(todolistData.todolist.title);
    const tasksListElement = TasksList(todolistData.todolist.tasks)
    const buttonElement = Button('add', () => openAddNewTaskDialog());

    const addNewTaskDialogElement = AddNewTaskDialog();

    container.append(headerElement, tasksListElement, buttonElement, addNewTaskDialogElement);

    return container
}





