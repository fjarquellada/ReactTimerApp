console.log('Starting test!');

function add(a, b){
  return a+b;
}
expect(add(3, 5)).toBe(8);
expect(add(-3, 2)).toBeA('number');9

function capitalizeWord(word){
  if(!word || typeof word !== 'string'){
    word = '';
  }
  return word.chanrtAt(0).toUpperCase() + word.slice(1);
}

// Given andrew expect Andrew
  expect(capitalizeWord('andrew')).toBe('Andrew');
// Given andrew expect type to be string
expect(capitalizeWord('andrew')).toBeA('string');
// Given nothing expect ''
expect(capitalizeWord()).toBe('');

console.log('All test have passed?');
