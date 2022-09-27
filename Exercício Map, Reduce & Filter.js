/*
    EXERCÍCIO MAP, REDUCE E FILTER

    O exercício consiste em pegar a Array com a lista das empresas dos exercícios passados e faz o seguinte:

    -> Adiciona 10% de valor de mercado em cada uma delas
    -> Filtra apenas as empresas mais antigas (fundadas antes dos anos 2000)
    -> Soma os valores de mercado de cada uma das empresas antigas filtradas
*/

const companiesList = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
];

// const updatedMarketValue = companiesList.map ( company => {

//     const updatedMarketValue = {
//         name: company.name,
//         marketValue: (company.marketValue * 1.10).toFixed(1),
//         CEO: company.CEO,
//         foundedOn: company.foundedOn
//     }

//     return updatedMarketValue
// })

// console.log(updatedMarketValue)

// const updatedMarketValueList = [
//     {name: 'Samsung', marketValue: 55.0, CEO: 'Kim Hyun Suk', foundedOn: 1938},
//     {name: 'Microsoft', marketValue: 456.5, CEO: 'Satya Nadella', foundedOn: 1975},
//     {name: 'Intel', marketValue: 128.7, CEO: 'Brian Krzanich', foundedOn: 1968},
//     {name: 'Facebook', marketValue: 421.3, CEO: 'Mark Zuckerberg',foundedOn: 2004},
//     {name: 'Spotify', marketValue: 33.0, CEO: 'Daniel Ek',foundedOn: 2006},
//     {name: 'Apple', marketValue: 929.5, CEO: 'Tim Cook', foundedOn: 1976},
//   ];

// const olderCompanies = updatedMarketValueList.filter ( company => {

//     return company.foundedOn < 2000
// })

// console.log(olderCompanies)

// const olderCompaniesList = [
//     {name: 'Samsung', marketValue: 55.0, CEO: 'Kim Hyun Suk', foundedOn: 1938},
//     {name: 'Microsoft', marketValue: 456.5, CEO: 'Satya Nadella', foundedOn: 1975},
//     {name: 'Intel', marketValue: 128.7, CEO: 'Brian Krzanich', foundedOn: 1968},
//     {name: 'Apple', marketValue: 929.5, CEO: 'Tim Cook', foundedOn: 1976},
// ];

// const totalMarketValue = olderCompaniesList.reduce ( ( accValue, currentValue ) => {

//     return accValue + currentValue.marketValue
// },0)

// console.log(`U$ ${totalMarketValue * 1000000},00`)

const add10PercentOnMarketValues = company => {
    company.marketValue = company.marketValue + company.marketValue / 10
    return company
}

const olderCompanies = company => company.foundedOn < 2000

const olderCompaniesTotalMarketValue = (acc, company) => acc + company.marketValue

const updatedMarketValue = companiesList 
    .map(add10PercentOnMarketValues)
    .filter(olderCompanies)
    .reduce(olderCompaniesTotalMarketValue,0)

    console.log(updatedMarketValue * 1000000)