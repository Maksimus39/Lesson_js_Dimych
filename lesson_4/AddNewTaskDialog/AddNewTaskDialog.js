import {Button} from "../components/common/Button.js";
import {addTask, closeAddNewTaskDialog, data} from "../data/data.js";


export function AddNewTaskDialog() {

    const container = document.createElement('dialog')
    container.open = data.todolist.addNewTaskDialog.isOpen

    const dialogTitleElement = document.createElement('h4')
    dialogTitleElement.append('Enter new task title')

    const dialogInputElement = document.createElement('input')


    function saveNewTaskHandler() {
        addTask(dialogInputElement.value)
        closeAddNewTaskDialog()
    }
    const saveButtonElement = Button('save', saveNewTaskHandler)
    const cancelButtonElement = Button('cancel', () => closeAddNewTaskDialog())



    container.append(dialogTitleElement,
        dialogInputElement,
        saveButtonElement,
        cancelButtonElement)

    return container
}