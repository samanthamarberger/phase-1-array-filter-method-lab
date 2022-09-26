// Code your solution here
/*function filter(collection, cb) {
    const newCollection = [];

    for (const user of collection) {
        if (cb(user)) {
            newCollection.push(user.name);
        }
    }
    return newCollection;
}
*/

function findMatching(names, string) {
    const isMatching = (name) => name.toLowerCase() === string.toLowerCase();
    const matchingNames = names.filter(isMatching);
    return matchingNames;
}

function fuzzyMatch(names, string) {
    const begLettersMatch = (name) => name.startsWith(string);
    const matchBeg = names.filter(begLettersMatch);
    return matchBeg;
}

const drivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];

function matchName(driverArray, string) {
    function nameMatching(element) {
        if (element.name === string) {
            return element;
        } 
    }
    const matchingName = driverArray.filter(nameMatching);
    return matchingName;
}