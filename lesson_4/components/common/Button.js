export function Button(title, changeDataCallBack) {
    const buttonElement = document.createElement('button')

    buttonElement.append(title)
    buttonElement.addEventListener('click', changeDataCallBack)
    return buttonElement
}