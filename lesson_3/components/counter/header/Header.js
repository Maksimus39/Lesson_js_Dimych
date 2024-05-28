import {data} from "../../../data/data.js";

export function Header() {
    const titleElement = document.createElement('h2')
    titleElement.append(data.title)
    return titleElement
}