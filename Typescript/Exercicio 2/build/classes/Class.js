export class Class {
    constructor(_name, _id = Class.classId, _stundentList = []) {
        this._name = _name;
        this._id = _id;
        this._stundentList = _stundentList;
        this.getNumStudents = () => this._stundentList.length;
        this.getEvarageAges = () => {
            let studentsCount = this.getNumStudents();
            let sumAges = this._stundentList.reduce((sum, student) => sum + student.age, 0);
            return sumAges / studentsCount;
        };
        this.getEvarageHeight = () => {
            let studentsCount = this.getNumStudents();
            let sumHeight = this._stundentList.reduce((sum, student) => sum + student.height, 0);
            return sumHeight / studentsCount;
        };
        this.getEvarageWeights = () => {
            let studentsCount = this.getNumStudents();
            let sumWeights = this._stundentList.reduce((sum, student) => sum + student.weight, 0);
            return sumWeights / studentsCount;
        };
        this.insertStudent = (student) => {
            this._stundentList.push(student);
        };
        this.updateStundent = (studentUpdate) => {
            const studentToUpdate = this._stundentList.find(stundent => stundent.id === studentUpdate.id);
            if (studentToUpdate) {
                Object.assign(studentToUpdate, studentUpdate);
            }
        };
        this.deleteStudent = (studentId) => {
            const indexStudent = this._stundentList.findIndex(student => student.id === studentId);
            if (indexStudent !== -1) {
                this._stundentList.splice(indexStudent, 1);
            }
        };
        this.getStudent = (studentId) => {
            const student = this._stundentList.find(stundent => stundent.id == studentId);
            if (student) {
                return student;
            }
            else {
                throw Error("Student not find in list");
            }
        };
        Class.classId += 1;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get id() {
        return this._id;
    }
    get stundentList() {
        return [...this._stundentList];
    }
}
Class.classId = 1;
