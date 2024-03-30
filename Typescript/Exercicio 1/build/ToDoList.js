import { ToDo } from "./ToDo.js";
export class ToDoList {
    constructor(toToList = []) {
        this.toToList = toToList;
        this.addToDo = (todo) => {
            this.toToList.push(todo);
        };
        this.updateToDO = (id, title, limitDate, description) => {
            this.toToList.forEach((todo) => {
                if (todo.getId() == id) {
                    todo.setLimiteDate(title);
                    todo.setDescription(description);
                    todo.setTitle(title);
                }
            });
        };
        this.deleteToDO = (id) => {
            this.toToList = this.toToList.filter((toDo) => toDo.getId() !== id);
        };
        this.getToDO = (id) => {
            let findToDo = new ToDo();
            this.toToList.forEach((todo) => {
                if (todo.getId() == id) {
                    findToDo = todo;
                }
            });
            return findToDo;
        };
        this.getList = () => this.toToList;
        this.toString = () => {
            if (this.toToList.length) {
                this.toToList.forEach((toDo) => {
                    console.log(toDo.toString());
                });
            }
            else {
                throw new Error('Lista Vazia');
            }
        };
    }
}
