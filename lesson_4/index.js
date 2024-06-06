import {data, subscribe} from "./data/data.js";
import {Todolist} from "./components/todolist/Todolist.js";


function updateUI() {


    const root = document.getElementById('root');
    root.innerHTML = '';
    const todolistElement = Todolist(data)
    root.append(todolistElement);
}

updateUI()
subscribe(updateUI)