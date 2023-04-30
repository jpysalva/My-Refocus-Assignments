const arr = ['Web Developer', 'Refocus', 'Web Developer', 'Web Developer', 'Refocus', 'Awesome'];

const elementCounts = {};

arr.forEach(element => {
  elementCounts[element] = (elementCounts[element] || 0) + 1;
});

console.log(elementCounts);