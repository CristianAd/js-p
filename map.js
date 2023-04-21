const numbers = [1,2,3,4,5,6,7,8]

numbers.map(recorre)

function recorre(valorNum) {
   escribe(`<div>Número ${valorNum} </div>`)
}

function escribe(elString) {
    document.getElementById("app").insertAdjacentHTML("beforeend", elString)
}
