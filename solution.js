const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 2) {
      return false; 
    }
  }
  return true
};

const isEveryWordShorterThan7 = (word) => {
  for(let i = 0; i < word.length; i++){
    if(word[i].length <= 7) {
      return false
    }
  }
  return true
};

// Filter

const arrayLessThan5 = (nums) => {
  const arr = nums.filter((num)=> {
    return num < 5
  });
  return arr
};

const arrayOddLengthWords = (words) => {
  const arr = words.filter((word) => {
    return word.length % 2 === 1
  })
  return arr
};

// Find

const firstValDivisibleBy4 = (nums) => {
  const arr = nums.find((num)=> {
   return num % 4 === 0
  })
  return arr
};

const firstWordLongerThan4Char = (words) => {
  const arr = words.find((word) => {
    return word.length > 4
  })
  return arr
  //
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] % 3 === 0){
      return i
  }
  
};
}

const firstWordIndexLessThan2Char = (words) => {
  for(let i = 0; i < words.length; i++) {
    if(words[i].length > 2 ) {
      return i
    }
  }
};

// For Each

const logValuesTimes3 = (words) => {
  const threeTimes = words.forEach((word)=> {
      console.log(word)
      console.log(word)
      console.log(word)
  })
  return threeTimes
};

const logWordsWithExclamation = (words) => {
  const exclamation = words.forEach((word)=> {
    console.log(`${word}!`)
  })
  return exclamation
};

// Map

const arrayValuesSquaredTimesIndex = (words) => {
  const squared = words.map((word, index)=> {
    return (word.length ** 2) * index
  })
  return squared
};

const arrayWordsUpcased = (words) => {
  const upperCase = words.map((word)=> {
    return word.toUpperCase()
  })
  return upperCase
  //
};

// Some

const areSomeNumsDivisibleBy7 = (words) => {
  const divisible = words.some((word) => {
     return word % 7 === 0 
  })
  return divisible
};

const doSomeWordsHaveAnA = (words) => {
  const haveA = words.some((word) => {
    return word.toUpperCase().includes("A")
  })
  return haveA
};

module.exports = {
  isEveryNumGreaterThan2,
  isEveryWordShorterThan7,
  arrayLessThan5,
  arrayOddLengthWords,
  firstValDivisibleBy4,
  firstWordLongerThan4Char,
  firstNumIndexDivisibleBy3,
  firstWordIndexLessThan2Char,
  logValuesTimes3,
  logWordsWithExclamation,
  arrayValuesSquaredTimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
};
