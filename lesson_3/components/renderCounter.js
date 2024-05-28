import {Header} from "./counter/header/Header.js";
import {Value} from "./counter/value/Value.js";
import {Button} from "./counter/button/Button.js";
import {decrementDataCount, divisionDataCount, dubleDataCount, increaseDataCount} from "../data/data.js";

export function renderCounter() {

    // перенесли из данных
    document.body.innerHTML = ``

    // header
    const header = Header()

    // value
    const value = Value()

    // button
    const buttonInc = Button('+', increaseDataCount)
    const buttonDec = Button("-", decrementDataCount)
    const buttonDouble = Button("x2", dubleDataCount)
    const divisionDouble = Button("/2", divisionDataCount)

    // render
    document.body.append(header, value, buttonInc, buttonDec, buttonDouble, divisionDouble)
}