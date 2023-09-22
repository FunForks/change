# Change #

Write a script to print out in the console the fewest notes and coins needed to pay a given sum. The sum should be passed as an argument to the script. For example.

```
node index.js €12.34
{ notes: [ 10 ], 
  coins: [ 2, 0.2, 0.1, 0.02, 0.02 ] }
```

Note that you can use `process.argv` in a Node script to read the arguments that are passed in from the Terminal:

```
const [executable, script, ...input] = process.argv;
let [amount] = input;

console.log("executable:", executable);
console.log("script:", script);
console.log("input:", input);
console.log("amount:", amount, typeof amount);
```

> $ node index €12.34  
> executable: /path/to/node/v16.19.1/bin/node  
> script: /path/to/parent/directory/index  
> input: [ '€12.34' ]  
> amount: €12.34 string  
