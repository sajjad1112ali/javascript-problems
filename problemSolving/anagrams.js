const isAnagrams = (str1, str2) => {
  const str1ToLowerCase = str1.toLowerCase();
  const str2ToLowerCase = str2.toLowerCase();
  const str1ToLowerCaseSorted = str1ToLowerCase.split('').sort().join('');
  const str2ToLowerCaseSorted = str2ToLowerCase.split('').sort().join('');
  return str1ToLowerCaseSorted === str2ToLowerCaseSorted;
}
const str1 = 'Race';
const str2 = 'Care';
console.log(isAnagrams(str1, str2));

