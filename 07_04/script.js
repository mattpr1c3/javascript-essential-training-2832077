/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

const newArray = ["bottle", "cup", "pen", "paper", "mouse", "phone", "magnet", "candy"];

// console.log(newArray.pop())

console.log(newArray.unshift(newArray.pop()))
console.log(newArray)

console.log(newArray.sort())

const found = newArray.find((item) => {
    if (item.length >= 6)
    return item
});
console.log(found)

newArray.splice(newArray.indexOf("bottle"), 1)
console.log(newArray)



