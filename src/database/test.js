const db = require('./db.js');
const createProffy = require('./createProffy.js');

db.then(async (db) => {

    proffyValue = {

    };

    classValue = {

    };

    classScheduleValue = [
        {

        }
    ];

    await createProffy(db, {proffyValue, classValue, classScheduleValue});

    const ProffysSelect = await db.all("SELECT * FROM proffys");
});

