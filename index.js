const [executable, script, ...input] = process.argv

// console.log("executable:", executable);
// console.log("script:", script);
// console.log("input:", input);

// Find the first argument that could be used as an amount of money
let amount = input.find( item => {
  // Remove any leading or trailing "€" symbols (Regular Expression)
  item = item.replace(/€/g, "")

  item = Number(item)

  if (isNaN(item)) {
    return false
  }

  if (item < 0.01) {
    // Too small or negative
    return false
  }

  return true
})

// console.log("amount:", amount, typeof amount);

if (!amount) {
  console.log("Arguments should include a number greater than or equal o than 0.01")
  return
}

// Convert the valid string to a number
amount = Number(amount.replace(/€/g, ""))

const denominations = [
  // Notes
  500,
  200,
  100,
  50,
  20,
  10,
  5,
  // Coins
  2,
  1,
  0.5,
  0.2,
  0.1,
  0.05,
  0.02,
  0.01
]

const notes = []
const coins = []
const output = { notes, coins }

// Array.prototype.every() stops executing if a falsy value is returned
denominations.every( denomination => {
  if (denomination > amount) {
    // This denomination is not part of the change
  } else {
    const count = Math.floor(amount / denomination)
    const value = denomination * count
    amount -= value

    // Ensure that round errors are corrected
    amount = Math.round(amount * 100) / 100

    if (denomination > 2) {
      pocket = notes
    } else {
      pocket = coins
    }

    for (token = 0; token < count; token += 1) {
      pocket.push(denomination)
    }
  }

  // Keep going until amount is too small for change
  return 0.01 <= amount
})

console.log(output)