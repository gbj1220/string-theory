/******************
 * YOUR CODE HERE *
 ******************/
// * `xify` - returns the same string, 
// but with every character replaced by an 'x'
function xify(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr = newStr + 'x'
  }
  return newStr
}

// * `smilify` - returns the same string, but with every 
// character replaced by a smiley face
function smilify(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr = newStr + '😊'
  }
  return newStr
}

// * `yellingChars` - returns the given string with an 
// exclamation point after each character
function yellingChars(str) {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    newStr = newStr + str[i] + '!'
  }
  return newStr
}

function indexedChars(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr = newStr + [i] + str[i]
  }
  return newStr
}

function exclaim(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '?' || str[i] === '.') {
      newStr = newStr + '!'

    } else {
      newStr = newStr + str[i]
    }
  }
  return newStr
}

function repeatIt(str, count) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr = str.repeat(count)
  }
  return newStr
}

function truncate(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str.length > 18) {
      newStr = str.slice(0, 15) + '...'

    } else {
      newStr = str
    }
    return newStr
  }
}

function ciEmailify(name) {
  let result = '';
  for (let i = 0; i < name.length; i++) {
    if (name[i] === ' ') {
      result = result + '.';
  } else {
    result = result + name[i].toLowerCase();
  }
}
return result + '@codeimmersives.com'
}

function reverse(str) {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    newStr = str[i] + newStr
  }
  return newStr
}

function onlyVowels(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u')  {
      newStr = newStr 
    }
  return newStr + str[i]
  }

}



/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingsChars = undefined;
}


if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  yellingChars,
  indexedChars,
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
