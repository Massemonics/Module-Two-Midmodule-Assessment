document.addEventListener('DOMContentLoaded', () => {
  let dados = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;']
  let container = ''
  let sum = 0
  let clickCounter = 0

  let n = document.getElementById('input')
  let dice = document.getElementById('dice-para')
  let suma = document.getElementById('sum-para')

  let roll = document.getElementById('button')
  let history = document.getElementById('unOrder')

  roll.addEventListener('click', evn => {

    if (clickCounter !== 0) {
        let listItem = document.createElement('li')
        history.appendChild(listItem)
        listItem.textContent = container
    }

    
    dice.innerHTML = diceRoll(n.value, dados, dice)

    suma.textContent = `Sum = ${sum}`
    container = `${dice.innerHTML}=${sum}`
    console.log(container)

   
    
    sum = 0
    clickCounter += 1
  })

  function diceRoll () {
    let fila = ''

    let faceValue = 0

    for (let i = 1; i <= n.value; i++) {
      faceValue = Math.floor(Math.random(0) * Math.floor(5))
      sum += faceValue + 1
      fila += dados[faceValue]
    }
    return fila
  }
})
