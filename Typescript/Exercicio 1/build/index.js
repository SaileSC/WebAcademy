"use strict";
class ToDo {
    constructor(date = "", time = "", title = "", limiteDate = "", description = "") {
        this.date = date;
        this.time = time;
        this.title = title;
        this.limiteDate = limiteDate;
        this.description = description;
        this.id = ToDo.idCounter;
        this.getId = () => this.id;
        this.getTitle = () => this.title;
        this.getDate = () => this.date;
        this.getTime = () => this.time;
        this.getDescription = () => this.description;
        this.getLimitDate = () => this.limiteDate;
        this.setTitle = (title) => {
            this.title = title;
        };
        this.setDate = (date) => {
            this.date = date;
        };
        this.setTime = (time) => {
            this.time = time;
        };
        this.setLimiteDate = (limiteDate) => {
            this.limiteDate = limiteDate;
        };
        this.setDescription = (description) => {
            this.description = description;
        };
        this.toString = () => `
        ID : ${this.id} \n
        Date : ${this.getDate()} \n
        Title : ${this.getTitle()} \n
        Time : ${this.getTime()} \n
        Deadline: ${this.getLimitDate()} \n
        Description: ${this.getDescription()} \n
        `;
        ToDo.idCounter += 1;
    }
}
ToDo.idCounter = 1;
class ToDoList {
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
                    alert("Afazer atualizado");
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
const rowFormatAppend = (todo) => {
    var _a;
    let newTr = document.createElement("tr");
    newTr.id = todo.getId().toString();
    newTr.innerHTML = `
        <td class="flex-wrap">${todo.getDate()} - ${todo.getTime()}</td>
        <td class="flex-wrap">${todo.getTitle()}</td>
        <td class="flex-wrap">${todo.getLimitDate()}</td>
        <td class="flex-wrap">${todo.getDescription()}</td>
        <td>
            <div class="d-flex flex-column flex-lg-row gap-2">
                <button class="btn btn-danger w-100">Apagar</button>
                <button class="btn btn-primary w-100"  data-bs-toggle="modal" data-bs-target="#editaItem" >Editar</button>
            </div>
        </td>
    `;
    (_a = document.querySelector("tbody")) === null || _a === void 0 ? void 0 : _a.append(newTr);
    configButtons();
};
const listToDo = new ToDoList();
const setCurrentDate = () => {
    const dateInput = document.querySelector("#date");
    let date = new Date();
    dateInput.value =
        `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}-${date.getHours()}:${date.getMinutes()}`;
};
const newTodo = () => {
    const inputs = document.querySelectorAll("tr input");
    let values = [];
    inputs.forEach(input => {
        if (input.value) {
            values.push(input.value);
        }
    });
    let date = new Date();
    let noToDo = new ToDo(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`, `${date.getHours()}:${date.getMinutes()}`, values[1], values[2], values[3]);
    listToDo.addToDo(noToDo);
    rowFormatAppend(noToDo);
};
const removeToDo = (event) => {
    const button = event.target;
    const tr = button.closest("tr");
    if (tr) {
        console.log(tr.id);
        tr.remove();
        listToDo.deleteToDO(parseInt(tr.id));
    }
};
const configButtons = () => {
    document.querySelectorAll("button").forEach(btn => {
        if (btn.textContent == "Adicionar") {
            btn.addEventListener("click", newTodo);
        }
        if (btn.textContent == "Apagar") {
            btn.addEventListener("click", removeToDo);
        }
        if (btn.textContent == "Editar") {
            btn.addEventListener("click", loadModal);
        }
        if (btn.textContent == "Enviar Alteração") {
            btn.addEventListener("click", updateTodoinModal);
            btn.addEventListener("click", readToDoList);
        }
    });
};
const loadModal = (event) => {
    var _a;
    const inputs = document.querySelectorAll(".modal-body input");
    const button = event.target;
    const id = (_a = button.closest("tr")) === null || _a === void 0 ? void 0 : _a.id;
    if (id) {
        let todo = listToDo.getToDO(parseInt(id));
        inputs[0].value = todo.getTitle();
        inputs[1].value = todo.getLimitDate();
        inputs[2].value = todo.getDescription();
        inputs[3].value = id;
    }
};
const updateTodoinModal = (event) => {
    const inputs = document.querySelectorAll(".modal-body input");
    let todo = listToDo.getToDO(parseInt(inputs[3].value));
    todo.setTitle(inputs[0].value);
    todo.setLimiteDate(inputs[1].value);
    todo.setDescription(inputs[2].value);
};
const readToDoList = () => {
    const tbody = document.querySelector("tbody");
    if (tbody) {
        while (tbody.children.length > 1) {
            tbody.removeChild(tbody.lastChild);
        }
        listToDo.getList().forEach((todo) => {
            rowFormatAppend(todo);
        });
    }
};
setCurrentDate();
configButtons();
