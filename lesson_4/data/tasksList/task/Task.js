import {Button} from "../../../components/common/Button.js";
import {deleteTask} from "../../data.js";


export function Task(task) {

    const container = document.createElement('li');
    const deleteButton= Button('X',()=> deleteTask(task.id));

    container.append(task.title)
    container.append(deleteButton);

    return container
}