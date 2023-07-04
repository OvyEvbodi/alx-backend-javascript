const getStudentsByLocation = (students, city) => {
    if (Array.isArray(students)) {
        const cityStudents = students.filter(student => student.location === city)
        return cityStudents;
    }
    return [];
};

export default getStudentsByLocation;