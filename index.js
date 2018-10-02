// Returns a random number between 1 and 100
function luckyNumber() {
  return Math.floor((Math.random() * 100) + 1);
}

function luckyNumberPromised() {
  return Promise.resolve(Math.floor((Math.random() * 100) + 1));
}

module.exports.luckyNumber = luckyNumber;
module.exports.luckyNumberPromised = luckyNumberPromised;