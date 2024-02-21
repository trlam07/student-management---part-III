let students = [];

const addNewStudent = () => {
    let newStudent = getStudentInfo();
    students.push(newStudent);
    renderStudents(students);
    document.getElementById('student-form').reset();
}

const resetStudents = () => {
    students = [];
    renderStudents(students)
}