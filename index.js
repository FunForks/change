let [,, amount] = process.argv // ignore executable and script

// Assume amount to be a number that can be converted to change.

amount = parseFloat(amount)

const noteValues = [ 500, 200, 100, 50, 20, 10, 5 ]
const coinValues = [ 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01 ]

const notes = []
const coins = []
const output = { notes, coins }

// Split amount into 2 parts:
// * an amount that can only be paid in coins
let coinAmount = amount % 5
// * an amount that can be paid in notes
let noteAmount = amount - coinAmount

// Treat the notes
for ( let ii = 0; ii < noteValues.length; ii += 1 ) {
  const noteValue = noteValues[ii]
  if (noteValue <= noteAmount) {
    notes.push(noteValue)
    noteAmount -= noteValue

    // The next line might be needed to deal with rounding errors
    // noteAmount = Math.floor(noteAmount * 100) / 100

    ii -- // Check if we need more than one note with this value
  }
}

// Treat the coins
for ( let ii = 0; ii < coinValues.length; ii += 1 ) {
  const coinValue = coinValues[ii]
  if (coinValue <= coinAmount) {
    coins.push(coinValue)
    coinAmount -= coinValue

    // The next line might be needed to deal with rounding errors
    // coinAmount = Math.floor(coinAmount * 100) / 100

    ii -- // Check if we need more than one coin with this value
  }
}

console.log(output)