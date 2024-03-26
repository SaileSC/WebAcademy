export class ToDo {
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
