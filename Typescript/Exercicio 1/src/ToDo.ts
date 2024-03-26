export class ToDo {
    static idCounter = 1;
    id = ToDo.idCounter;

    constructor(
        private date = "",
        private time = "",
        private title = "",
        private limiteDate = "",
        private description = "",
    ){
        ToDo.idCounter += 1;
    }

    public getId = ():number => this.id;

    public getTitle = ():string => this.title;
    
    public getDate = ():string => this.date;

    public getTime = ():string => this.time;

    public getDescription = ():string => this.description;

    public getLimitDate = ():string => this.limiteDate;

    public setTitle = (title:string):void  => {
        this.title = title;
    }

    public setDate = (date:string):void  => {
        this.date = date;
    }

    public setTime = (time:string):void  => {
        this.time = time;
    }

    public setLimiteDate = (limiteDate:string):void  => {
        this.limiteDate = limiteDate;
    }

    public setDescription = (description:string):void => {
        this.description = description; 
    }

    public toString = ():string => `
        ID : ${this.id} \n
        Date : ${this.getDate()} \n
        Title : ${this.getTitle()} \n
        Time : ${this.getTime()} \n
        Deadline: ${this.getLimitDate()} \n
        Description: ${this.getDescription()} \n
        `;
}