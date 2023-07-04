const getListStudentIds = (students) => {
    const idList = [];
    if (Array.isArray(students)) {
        students.map(student => idList.push(student.id))
    }
    return idList;
};

export default getListStudentIds;