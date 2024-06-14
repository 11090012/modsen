"use strict";
const str = "   Вот      и           помер                дед Максим        ";
function getWords(str) {
  let words = [];
  let word = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      word += str[i];
      if (i == str.length - 1) {
        words.push(word);
        word = "";
      }
    } else {
      if (word != 0) {
        words.push(word);
      }
      word = "";
    }
  }
  return words;
}

console.log(getWords(str));
