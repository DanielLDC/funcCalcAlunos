
const students = [
  {
    name:"Daniel",
    noteOne: 10,
    noteTwo: 10,
  },
  {
    name: "Carlos",
    noteOne: 5,
    noteTwo: 7,
  },
  {
    name:"Larissa",
    noteOne: 7,
    noteTwo: 9,
  },
  {
    name:"Marcos",
    noteOne: 1,
    noteTwo: 10,
  },
]
function verifAproved(students){
  for(let i = 0; i < students.length; i++){
    let student = students[i]

    let media = ((student.noteOne + student.noteTwo) / 2).toFixed(2)
    
    if(media > 7){
      alert(`
      A média do aluno ${student.name} é: ${media}
      Parabéns, ${student.name}! você foi aprovado no concurso!
      `)
    }else{
      alert(`
      A média do aluno ${student.name} é: ${media}
      Não foi dessa vez ${student.name}! tente novamente!
      `)
    }
  }
}
verifAproved(students)
