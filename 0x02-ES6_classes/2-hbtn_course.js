// Implements a class named HolbertonCourse

export default class HolbertonCourse {
    constructor(name, length, students) {
        this._name = name;
        this._length = length;
        this._students = students;
    }
    // get the name of the classroom
    get name() {
        return this._name;
    }
    // set the name of the classroom
    set name(name) {
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string')
        }
        this._name = name;
    }

    // get the length of the classroom
    get length() {
        return this._length;
    }
    // set the length of the classroom
    set length(length) {
        if (typeof length !== 'number') {
            throw new TypeError('Length must be a number')
        }
        this._length = length;
    }

    // get the students of the classroom
    get students() {
        return this._students;
    }
    // set the students of the classroom
    set students(students) {
        if (!(students instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
        this._students = students;
    }

}
