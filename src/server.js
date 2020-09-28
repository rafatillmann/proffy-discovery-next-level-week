const express = require('express');
const nunjucks =  require('nunjucks');

const app = express();

const proffys = [
    {
        name: "aaaa",
    },
]

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

nunjucks.configure('src/pages', {
    express: app,
    noCache: true,
})

app.use(express.static("public"));

app.get("/", (req, res) => res.render("index.html"));

app.get("/study", (req, res) => {
    const filters = req.query;
    return res.render("study.html", {proffys, filters, subjects, weekdays})});

app.get("/give-classes", (req, res) => {
    const data = req.query;
    const isEmpty = Object.keys(data).length;
    if(isEmpty > 0){
        data.subject = getSubject(data.subject);
        proffys.push(data);
        return res.redirect("/study");
    }
    return res.render("give-classes.html", {subjects, weekdays});
    }
    );

app.listen(3333);