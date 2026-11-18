const express = require('express');

const app = express();
app.use(express.json());

// Sample student data
const students = [
    { id: 1, name: 'Pratik Shejwal', course: 'CSE' },
    { id: 2, name: 'Ritesh Kale', course: 'CSE' },
    { id: 3, name: 'Swaraj Jamdade', course: 'CSE'},
    { id: 4, name: 'Piyush Pawar', course: 'IT'},
    { id: 5, name: 'Kartik Bhagat', course: 'AIML'}
];

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the Student Managment Application!!!');
});

// GET - Display all students
app.get('/students', (req, res) => {
    res.json(students);
});

// GET - Display student by ID
app.get('/students/:id', (req, res) => {
    const student = students.find(s => s.id === Number(req.params.id));

    if (!student) {
        return res.status(404).json({ message: 'Student not found' });
    }

    res.json(student);
});

// POST - Add new student
app.post('/students', (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        course: req.body.course
    };

    students.push(newStudent);
    res.status(201).json(newStudent);
});

// Start server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
