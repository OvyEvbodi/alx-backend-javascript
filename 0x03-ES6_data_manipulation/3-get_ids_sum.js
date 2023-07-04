const getStudentIdsSum = (students) => {
    if (Array.isArray(students)) {
        const total = students.reduce((sum, student) => sum + student.id, 0);
        return total;
    }
};

export default getStudentIdsSum;