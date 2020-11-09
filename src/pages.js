const { subjects, weekdays, getSubject, hoursToMinutes } = require('./utils/format');
const database = require('./database/db');


function pageLanding(req, res) {
    res.render("index.html")
}

async function pageStudy (req, res) {
    const filters = req.query;

    if(!filters.subject || !filters.weekday || !filters.time){
        return res.render("study.html", { filters, subjects, weekdays });
    }

    const timeMin = hoursToMinutes(filters.time); 

    const query = `
        SELECT proffys.*, classes.*
        FROM proffys
        JOIN proffys ON proffys.id = classes.proffy_id
        JOIN class_schedules ON classes.id = class_schedules.class_id
        WHERE class_schedules.weekday = ${filters.weekday}
        AND class_schedules.time_from <= ${timeMin}
        AND class_schedules.time_to > ${timeMin}
        AND classes.subject = ${filters.subject}
    `

    try {
        const db = await database;
        const proffy = await db.all(query);

        return res.render('study.html', { proffys, subjects, filters, weekdays })
    } catch (error) {
        console.log(error);
    }
}

function pageGiveClasses(req, res) {
    const data = req.query;
    const isEmpty = Object.keys(data).length;
    if (isEmpty > 0) {
        data.subject = getSubject(data.subject);
        proffys.push(data);
        return res.redirect("/study");
    }
    return res.render("give-classes.html", { subjects, weekdays });
}

module.exports = {
    pageLanding,
    pageStudy, 
    pageGiveClasses
}