const reverseBySeparator = (str, separator) => {
  return str.split(separator).reverse().join(separator);
}

const string = 'The world of programming is Amazing!';

const reversedSentance = reverseBySeparator(string, '');
const reversedSentanceWords = reverseBySeparator(reversedSentance, ' ');
console.log(reversedSentanceWords)

