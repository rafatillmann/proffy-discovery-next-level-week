const express = require('express');
const nunjucks =  require('nunjucks');

const { pageLanding, pageStudy, pageGiveClasses } = require('./pages');

const app = express();

nunjucks.configure('src/pages', {
    express: app,
    noCache: true,
})

app.use(express.static("public"));

app.get("/", pageLanding);

app.get("/study", pageStudy);

app.get("/give-classes", pageGiveClasses);

app.listen(3333);