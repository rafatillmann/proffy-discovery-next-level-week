module.exports = async (db, { proffyValue, classValue, classScheduleValue }) => {
    const proffyInsert = await db.run(`
        INSERT INTO proffys (
            name, 
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `);

    const proffyId = proffyInsert.lastId;

    const classInsert = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffyId}"
        );
    `);

    const classId = classInsert.lastId;

    const classScheduleInsert = classScheduleValue.map((value) => {
        return db.run(`
            INSERT INTO class_schedule (
                weekday,
                time_from,
                time_to,
                class_id
            ) VALUES (
            "${value.weekday}",
            "${value.time_from}",
            "${value.time_to}",
            "${classId}"
            );
        `);
    });

    await Promise.all(classScheduleInsert);
}