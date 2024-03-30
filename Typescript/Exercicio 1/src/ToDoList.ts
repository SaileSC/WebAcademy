import { ToDo } from "./ToDo";

export class ToDoList{
    constructor(
        private toToList: ToDo[] = []
    ){}

    public addToDo = (todo:ToDo):void => {
        this.toToList.push(todo);
    }

    public updateToDO = (id:number, title:string, limitDate:string, description:string):void => {
        this.toToList.forEach((todo) => {
            if(todo.getId() == id){
                todo.setLimiteDate(title)
                todo.setDescription(description)
                todo.setTitle(title)
            }
        })
    }

    public deleteToDO = (id:number):void => {
        this.toToList = this.toToList.filter((toDo) => toDo.getId() !== id); 
    }

    public getToDO = (id:number):ToDo => {
        let findToDo:ToDo = new ToDo();

        this.toToList.forEach((todo) => {

            if(todo.getId() == id){
                findToDo = todo;
            }
        })
        
        return findToDo;
    }

    public getList = ():ToDo[] => this.toToList;

    public toString = ():void => {
        if(this.toToList.length){
            this.toToList.forEach((toDo) => {
               console.log(toDo.toString());
            });
        } else {
            throw new Error('Lista Vazia');
        }
    }
}