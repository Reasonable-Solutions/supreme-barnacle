let p = require ('parsimmon')
let assert = require ('assert')

let testStrings = {
    week: '2018W39',
    month: '2018M09',
    all: 'All'
}


let myParser = p.createLanguage ({
    week: r => p.seq(p.digits,
                     p.string("W"),
                     p.digits),
    month: r => p.seq(p.digits, p.string ("M"), p.digits),
    all: r => p.string("All")
});

console.log (myParser.week.parse (testStrings.week))
console.log (myParser.month.parse (testStrings.month))
console.log (myParser.all.parse (testStrings.all))
