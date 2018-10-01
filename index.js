let p = require ('parsimmon')
let assert = require ('assert')

let testStrings = {
    week: '2018W39',
    month: '2018M09',
    all: 'All'
}

let weekParser = r => p.seq(p.digits, p.string("W"), p.digits)

let monthParser = r => p.seq(p.digits, p.string ("M"), p.digits)
let allParser = r => p.string("All")

let myParser = p.createLanguage ({
    week: weekParser,
    month: monthParser,
    all: allParser,
    whichOne: r => p.alt (weekParser (), monthParser (), allParser ())
});

console.log (myParser.week.parse (testStrings.week))
console.log (myParser.month.parse (testStrings.month))
console.log (myParser.all.parse (testStrings.all))
console.log ('\n')
console.log (myParser.whichOne.parse(testStrings.week))
console.log (myParser.whichOne.parse(testStrings.month))
console.log (myParser.whichOne.parse(testStrings.all))
