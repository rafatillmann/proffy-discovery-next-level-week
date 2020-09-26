const express = require('express');
const nunjucks =  require('nunjucks');

const app = express();

const proffys = [
    {
        name: "aaaa",
    },
    {
        name: "bbbbb"
    }
]

nunjucks.configure('src/pages', {
    express: app,
    noCache: true,
})

app.use(express.static("public"));

app.get("/", (req, res) => res.render("index.html"));
app.get("/study", (req, res) => res.render("study.html", {proffys}));
app.get("/give-classes", (req, res) => res.render("give-classes"));

app.listen(3333);