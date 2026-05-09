#!/usr/bin/node
const args = process.argv.slice(2);

if (args.length <= 1) {
  console.log(0);
} else {
  const numbers = args.map(Number).sort((a, b) => b - a);
  const uniqueNumbers = [...new Set(numbers)]; // Handle duplicates if necessary
  
  // If the prompt implies distinct values or just the second in sorted list:
  console.log(uniqueNumbers[1] || 0);
}
