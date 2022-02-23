let total = 0

document.querySelector('#zero').addEventListener('click', numberZero)
document.querySelector('#one').addEventListener('click', numberOne)
document.querySelector('#two').addEventListener('click', numberTwo)
document.querySelector('#three').addEventListener('click', numberThree)
document.querySelector('#four').addEventListener('click', numberFour)
document.querySelector('five').addEventListener('click', numberFive)
document.querySelector('six').addEventListener('click', numberSix)
document.querySelector('seven').addEventListener('click', numberSeven)
document.querySelector('eigth').addEventListener('click', numberEigth)
document.querySelector('nine').addEventListener('click', numberNine)

function numberZero() {
  total = 0
  document.querySelector('#result').innerText = total
}

function numberOne() {
  total = total + 1
  document.querySelector('#result').innerText = total
}

function numberTwo() {
  total = total - 2
  document.querySelector('#result').innerHTML = total
}

function numberThree() {
  total = total + 3
  document.querySelector('#result').innerHTML = total
}

function numberFour() {
    total = total - 4
    document.querySelector('#result').innerHTML = total
}

function numberFive() {
    total = total + 5
    document.querySelector('#result').innerHTML = total
}

function numberSix() {
    total = total - 6
    document.querySelector('#result').innerHTML = total
}

function numberSeven() {
    total = total + 7 
    document.querySelector('#result').innerHTML = total
}

function numberEigth() {
    total = total - 8
    document.querySelector('result').innerHTML = total
}

function numberNine() {
    total = total + 9
    document.querySelector('#result').innerHTML = total
}