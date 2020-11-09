const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Quí-mica",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(number){
    return subjects[number -1];
}

function hoursToMinutes(time){
    const [hour, minute] = time.split(":");
    return Number((hour * 60) + minute);    
}

module.exports = {
    subjects,
    weekdays,
    getSubject, 
    hoursToMinutes
};