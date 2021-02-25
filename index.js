// Loading the DOM

document.addEventListener('DOMContentLoaded', () => {
  // Declaring Global variables, to reuse
  let dados = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;']
  let clickCounter = 0
  let container = ''
  let sum = 0

  // Assigning the variables and pointing the elements
  let history = document.getElementById('unOrder')
  let dice = document.getElementById('dice-para')
  let suma = document.getElementById('sum-para')
  let roll = document.getElementById('button')
  let n = document.getElementById('input')

  // Element button is listening to event 'click'
  roll.addEventListener('click', () => {
    // Verifying if this is the Second click
    if (clickCounter !== 0) {
      // Asigning a variable for new element 'li'
      let listItem = document.createElement('li')
      // Adding 'li' to parenNode 'ul' #unOrder
      history.appendChild(listItem)
      // Changing li content with the previous diceRoll result
      listItem.textContent = container
    }

    // Changing the innerHtml of 'p' #dice-para and show some dice
    // using function diceRoll with @param n.value('input'#input) @param dados[]
    dice.innerHTML = diceRoll(n.value, dados)

    // Changing the content of 'p'#sum-para with the sum of the dice
    suma.textContent = `Sum = ${sum}`

    // Storing the values for History
    container = `${dice.innerHTML}=${sum}`

    // Restarting the sum to 0 and add 1 to clickCounter
    sum = 0
    clickCounter += 1
  })

  // Function that returns a string selected randomly from an array dados[]

  function diceRoll () {
    // Declaring the vars to be local
    let fila = ''
    let faceValue = 0

    // Using a loop to create a string and sum the values depending of
    // user parameter @param n.value (#input)
    for (let i = 1; i <= n.value; i++) {
      faceValue = Math.floor(Math.random(0) * Math.floor(5))
      sum += faceValue + 1
      fila += dados[faceValue]
    }
    return fila
  }
})
