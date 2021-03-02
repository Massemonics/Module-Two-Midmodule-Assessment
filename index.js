/* SMART GOAL

    1.- Refactor my code using the suggestions that Myra provided. So by 12:45 pm 3/2/21 I can push to GitHub
          // Completed
    
    2.- Strectch Goals:
        * when I enter an invalid number of dice, like -2, an error message displays prompting me to enter a valid number.
          // Completed

        * Below my dice history list, I can see statistics about my roll history like the average sum, the minimum sum, and the maximum sum
        * My application can detect if I roll a straight, a three of a kind, a four of a kind, or a double pair. 


*/

// Loading the DOM
document.addEventListener('DOMContentLoaded', (eve) => {
  eve.preventDefault()

const restart = () => {
  let dados = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;']
  let cubic = {fila:'', sum:0}
  let clickCounter = 0
  let container = ''

  // Assigning the variables and pointing the elements
  let history = document.getElementById('unOrder')
  let dice = document.getElementById('dice-para')
  let suma = document.getElementById('sum-para')
  let roll = document.getElementById('button')
  //let n = document.getElementById('input')

  roll.addEventListener('click', (eve) => {
    eve.preventDefault()

    if (parseInt(document.getElementById('input').value) <= 0){
      return window.alert('Please enter a positive number')    
    }

    if (clickCounter !== 0) {
      let listItem = document.createElement('li')
      history.appendChild(listItem)
      listItem.textContent = container
    }

    dice.innerHTML = diceRoll(document.getElementById('input').value, dados)['fila']

    suma.textContent = `Sum = ${cubic.sum}`

    container = `${dice.innerHTML}=${cubic.sum}`

    cubic.sum = 0
    clickCounter += 1
  })

  function diceRoll () {
    cubic.fila = ''
   
    for (let i = 1; i <= document.getElementById('input').value; i++) {
      faceValue = Math.floor(Math.random() * 6)
      cubic.sum += faceValue + 1
      cubic.fila += dados[faceValue]
    }
    return cubic
  }

  }
  restart()
})
