// ASSESSMENT 6: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" },
]

// function takes an array of objects
const personJob = (arr) => {
  // nameArr takes the variable array of people then extracted the names into an array with only the names
  let nameArr = arr.map((val) => {
    console.log(val.name)
    // local var splitting the names up
    let splitMap = val.name.split(" ")
    console.log(splitMap)
    // returning and mapping through the split names, setting the first letter to be uppercase then making a slice at index 1 to not uppercase everything
    // Then .joining the "strings" again in a str ${interpolation} where val = names and occupation = occupation
    return (
      splitMap.map((val) => val[0].toUpperCase() + val.slice(1)).join(" ") +
      ` is a ${val.occupation}`
    )
  })
  // returning the new str ${interpolated} sentences.
  return nameArr
}
console.log(personJob(people))
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

// *****************************************************************
// From here down was my plan to map three times through the array, but had to scrap some of it, I will leave it until it is reviewed then I will beautify this, I put a lot of time into it prior to getting some help.
// splitMap array to extract names to be seperated into their own array
// let splitMap = val.name.map((val) => {
//   return val.split(" ")
// })
// console.log(splitMap)
// // third map capitalMap to extract the single letter and capitalize it
// let capitalMap = splitMap.map((val) => {
//   console.log(val)
//   return val.map((val) => {
//     // capoitalize the first indexed letters val[0] and disconnect the rest of the name at slice(1)
//     return val[0].toUpperCase() + val.slice(1) + ` is a ${val.occupation}`
//   })
// })
// what about creating a new value and pushing the now capitalized letters into the sentence with a str interpolation
// let capitalMap =
// if (capitalMap === charAt(0))
//   return "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

// return capitalMap
// return a `str ${} of all the key:value pairs`

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDER of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// function takes an arr
const remOnly = (arr) => {
  // filter through arr and find the typeof numbers only
  let numArr = arr.filter((val) => {
    return typeof val === "number"
  })
  // map through the numbers only array
  return numArr.map((arr) => {
    // divide nums by %3
    return arr % 3
    // return num remainder
  })
}
console.log(remOnly(testingArray1))
console.log(remOnly(testingArray2))
// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

// create a function that takes in two arrays
const noDups = (arr, arr1) => {
  // set a new local var largeArr up with the two smaller arrays concated together
  let largeArr = arr.concat(arr1)
  // return the largeArr filetred by the val and its index
  return largeArr.filter((val, i) => {
    // console.log(val, i)
    // only returning the values that are strictly equal to the index
    return largeArr.indexOf(val) === i
  })
}
console.log(noDups(testingArray3, testingArray4))
