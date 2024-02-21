let students = [];

const addNewStudent = () => {
    let newStudent = getStudentInfo();
    students.push(newStudent);
    renderStudents(students)
}

const resetStudents = () => {
    console.log('reset students')
}