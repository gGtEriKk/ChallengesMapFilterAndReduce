/*
    MAP - DESAFIO

    O primeiro desafio consiste em criar uma ARRAY com lista de pessoas que irão a um evento e declarar
    um BOOLEANO se é VIP ou não. Caso seja vip, vai ficar na área BLACK, se não, fica na área GREEN.

    O segundo desafio consiste em criar uma ARRAY com uma lista de estudantes e colocar notas de 0 
    a 10 em cada aluno. Se o aluno tirou 7 ou mais, APROVADO, se tirou menos de 7, REPROVADO.
*/

const peopleEvent = [
    {name: 'Alex', vip: true},
    {name: 'Carla', vip: true},
    {name: 'Melissa', vip: false},
    {name: 'João', vip: true},
    {name: 'Samanta', vip: false},
    {name: 'Pedro', vip: false},
    {name: 'Christian', vip: false},
    {name: 'Roberta', vip: true},
    {name: 'Paulo', vip: false},
    {name: 'Paloma', vip: true},
];

const newListEvent = peopleEvent.map ( person => {
    let blackOrGreenSector

    if(person.vip === true){
        console.log(blackOrGreenSector = 'Black')
    } else{
        console.log(blackOrGreenSector = 'Green')
    }

    const eventSector = {
        name: person.name,
        vip: person.vip,
        sector: blackOrGreenSector
    }

    return eventSector
})

console.log(newListEvent)

const studentList = [
    {name: 'Carlos', testScore: 5},
    {name: 'Camila', testScore: 7},
    {name: 'Jean', testScore: 3},
    {name: 'Maiara', testScore: 6},
    {name: 'Jéssica', testScore: 9},
    {name: 'Danilo', testScore: 10},
    {name: 'Daniel', testScore: 8},
    {name: 'Erika', testScore: 10},
    {name: 'Débora', testScore: 7},
    {name: 'Tamires', testScore: 2}
]

const resultList = studentList.map ( (student) =>{

    const result = {
        name: student.name,
        result: student.testScore >= 7 ? 'Aprovado' : 'Reprovado'
    }
    return result
})

console.log(resultList)
