import wordList from 'an-array-of-english-words';

const solve = (keyLetter, otherLetters, minLength = 4) => {
  return wordList.filter(word => {
    const sanitizedKeyLetter = keyLetter.toLowerCase();
    const sanitizedOtherLetters = otherLetters.map(letter => letter.toLowerCase());
    const sanitizedWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const sanitizedRequiredLetters = sanitizedOtherLetters.concat(sanitizedKeyLetter);
    const isComposedOfRequiredLetters = sanitizedWord.split('').every(letter => {
      return sanitizedRequiredLetters.includes(letter);
    });
    const hasKeyLetter = sanitizedWord.includes(sanitizedKeyLetter);
    const isLongEnough = sanitizedWord.length >= minLength;
    return isComposedOfRequiredLetters && hasKeyLetter && isLongEnough;
  });
};

export default solve;