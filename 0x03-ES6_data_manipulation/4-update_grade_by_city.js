import getStudentsByLocation from './2-get_students_by_loc.js';

const updateStudentGradeByCity = (students, city, newgrades) => {
    if (Array.isArray(students)) {
        const newStudents = getStudentsByLocation(students, city);
        newStudents.map(student => {
            const grade = newgrades.filter(summary => summary.studentId === student.id);
            student.grade = grade.length > 0 ? grade[0].grade : 'N/A';
        });
        return newStudents;
    }
};

export default updateStudentGradeByCity;
