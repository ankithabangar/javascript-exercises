const findTheOldest = function (people) {
  let theOldestPerson = people.reduce((olderPerson, currentPerson) => {
    const currentAge =
      (currentPerson.yearOfDeath || new Date().getFullYear()) -
      currentPerson.yearOfBirth;
    const oldestAge =
      (olderPerson.yearOfDeath || new Date().getFullYear()) -
      olderPerson.yearOfBirth;
    return oldestAge > currentAge ? olderPerson : currentPerson;
  });
  return theOldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
