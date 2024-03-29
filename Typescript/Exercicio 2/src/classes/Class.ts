import { Student } from "./Student";
    
export class Class{
    static classId:number = 1;

    constructor(
        private _id: number = Class.classId,
        private _name: string = "",
        private _stundentList: Student[] = [],
    ){
        Class.classId += 1;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get id(): number {
        return this._id;
    }

    public get stundentList(): Student[] {
        return [...this._stundentList];
    }


    public getNumStudents = ():number => this._stundentList.length;
    
    public getEvarageAges = ():number => {
        let studentsCount =  this.getNumStudents()
        let sumAges = this._stundentList.reduce((sum, student) => sum + student.age, 0)

        return studentsCount / sumAges
    };

    public getEvarageHeight = ():number => {
        let studentsCount =  this.getNumStudents()
        let sumHeight = this._stundentList.reduce((sum, student) => sum + student.height, 0)

        return studentsCount / sumHeight
    };

    public getEvarageWeights = ():number => {
        let studentsCount =  this.getNumStudents()
        let sumWeights = this._stundentList.reduce((sum, student) => sum + student.weight, 0)

        return studentsCount / sumWeights
    };

    public insertStudent = (student: Student):void => {
        this._stundentList.push(student)
    }

    public updateStundent = (studentUpdate: Student):void => {
        const studentToUpdate = this._stundentList.find(stundent => studentUpdate.id === studentUpdate.id)

        if (studentToUpdate) {
            Object.assign(studentToUpdate, studentUpdate);
        }
    }

    public deleteStudent = (studentId:number):void => {
        const indexStudent = this._stundentList.findIndex(student => student.id === studentId);
        if (indexStudent !== -1) {
            this._stundentList.splice(indexStudent, 1);
        }
    }
}