/*
    DESAFIO REDUCE

    O desafio consiste em somar todos os valores de mercado das empresas dentro da Array do desafio filter
*/

const companiesList = [
    {name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976},
];

const totalMarketValue = companiesList.reduce ( ( accMv, currentMv) => {

    return accMv + currentMv.marketValue

},0)

console.log(totalMarketValue * (1000000))