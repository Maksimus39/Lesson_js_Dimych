export const data = {
    title: 'Counter',
    count: 0,
}


export let changeDataCallBack = function () {       // renderCounter
    // alert('Пока я колбек пустышка')
}


// каждую секунду будем увеличивать счётчик
// setInterval(function () {
//     data.count++
//     console.log(data.count)
//
//     //  и затем просигналить изменения
//     //  И затем перерисовать весь счётчик
//
//     changeDataCallBack()
//
// }, 1000)

export function setChangeDataCallBack(newCallBack) {
    changeDataCallBack = newCallBack
}

// function increment
export function increaseDataCount() {
    data.count++;
    changeDataCallBack();
}

// function decrement
export function decrementDataCount() {
    data.count--;
    changeDataCallBack();
}

// функция умножения
export function dubleDataCount() {
    data.count = data.count * 2
    changeDataCallBack();
}

// функция деления
export function divisionDataCount() {
    data.count = data.count / 2
    changeDataCallBack();
}