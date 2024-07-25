/* eslint-disable */
export default class HolbertonCourse {
    /**
     * Initializes a new instance of the HolbertonCourse class.
     *
     * @param {string} name - The name of the course.
     * @param {number} length - The length of the course in hours.
     * @param {number} students - The number of students enrolled in the course.
     */
    constructor(name, length, students) {
        this.name = name;
        this.length = length;
        this.students = students;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._name = name;
    }

    get length() {
        return this._length;
    }

    set length(length) {
        if (typeof length !== 'number') {
            throw new TypeError('Length must be a number');
        }
        this._length = length;
    }


    get students() {
        return this._students;
    }

    set students(students) {
        if (!(students instanceof Array)) {
            throw new TypeError('Students must be an array');
        }
        if (!students.every((student) => typeof student === 'string')) {
            throw new TypeError('Students must be an array of strings');
        }
        this._students = students;
    }
}
