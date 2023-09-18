const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        const students = [];
        
        

      // console.log(typeof(data));

        newData = data.trim().split('\n').slice(1);
        // console.log(typeof(newData));
        newData.forEach((line) => {
                const [firstname, lastname, age, field] = line.split(',');
                // console.log(line);
                if (firstname && lastname && age && field) {
                    students.push({ firstname, lastname, age, field });
                    // console.log(firstname);
                    // console.log(students);
                }
            });

        if (students.length === 0) {
            console.error('No valid students found in the database.');
            return;
        }

        console.log(`Number of students: ${students.length}`);

        const fields = {};

        students.forEach((student) => {
            const { firstname, field } = student;
            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(firstname);
        });

        for (const field in fields) {
            console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
    } catch (err) {
        console.error('Cannot load the database', err);
    }
}

countStudents('database.csv');
