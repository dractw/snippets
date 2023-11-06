// answer: 'abd'

Promise
  .reject('a')
  .catch(v => v + 'b')
  .catch(v => v + 'c')
  .then(v => v + 'd')
  .finally(v => v + 'e')
  .then(v => console.log(v))
