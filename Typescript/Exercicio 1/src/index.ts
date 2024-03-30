import { ToDo } from "./ToDo";
import { ToDoList } from "./ToDoList";


const rowFormatAppend = (todo:ToDo):void =>{
    let newTr = document.createElement("tr");
    newTr.id = todo.getId().toString()

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
    `
    document.querySelector("tbody")?.append(newTr);
    configButtons()
}


const listToDo = new ToDoList();


const setCurrentDate = () =>{
    const dateInput = document.querySelector<HTMLInputElement>("#date")!;
    
    let date = new Date()

    dateInput.value = 
    `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}-${date.getHours()}:${date.getMinutes()}`
}

const newTodo = ():void => {
    const inputs = document.querySelectorAll<HTMLInputElement>("tr input");
    let values: string[] = [];

    inputs.forEach(input => {
        if(input.value){
            values.push(input.value);
        } 
    })
    
    let date = new Date();
    let noToDo:ToDo = new ToDo(
        `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
        ,
        `${date.getHours()}:${date.getMinutes()}`
        , values[1], values[2], values[3]
        );

    listToDo.addToDo(noToDo);
    rowFormatAppend(noToDo);
}

const removeToDo = (event:Event):void =>{
    const button = event.target as HTMLElement;
    const tr = button.closest("tr");
    if (tr) {
        console.log(tr.id);
        tr.remove();
        listToDo.deleteToDO(parseInt(tr.id));
    }
}

const configButtons = ():void =>{
    document.querySelectorAll("button").forEach(btn => {
        if(btn.textContent == "Adicionar"){
            btn.addEventListener("click",newTodo);
        }
    
        if(btn.textContent == "Apagar"){
    
            btn.addEventListener("click", removeToDo)
        }

        if(btn.textContent == "Editar"){
            btn.addEventListener("click", loadModal)
        }


        if(btn.textContent == "Enviar Alteração"){
            btn.addEventListener("click", updateTodoinModal)
            btn.addEventListener("click", readToDoList)
        }
    });
}


const loadModal = (event:Event):void =>{
    const inputs = document.querySelectorAll<HTMLInputElement>(".modal-body input");
    const button = event.target as HTMLElement;
    const id = button.closest("tr")?.id;

    if(id){
        let todo = listToDo.getToDO(parseInt(id))
        inputs[0].value = todo.getTitle();
        inputs[1].value = todo.getLimitDate();
        inputs[2].value = todo.getDescription();
        inputs[3].value = id;
    }
}


const updateTodoinModal = (event:Event):void =>{
    const inputs = document.querySelectorAll<HTMLInputElement>(".modal-body input");
    let todo = listToDo.getToDO(parseInt(inputs[3].value))

    todo.setTitle(inputs[0].value);
    todo.setLimiteDate(inputs[1].value);
    todo.setDescription(inputs[2].value);
}


const readToDoList = () =>{
    const tbody = document.querySelector("tbody");

    if(tbody){
        while (tbody.children.length > 1) {
            tbody.removeChild(tbody.lastChild!);
        }

        listToDo.getList().forEach((todo) => {
            rowFormatAppend(todo);
        })
    }
}


setCurrentDate()
configButtons()