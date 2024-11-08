export class Todo {
    id: string;
    desc: string;
    priority: number;
    date: Date;
    completed: boolean;


    constructor(id: string, desc: string, priority: string){
        this.id = id;
        this.desc = desc;
        this.priority = parseInt(priority) ;
        this.date = new Date();
        this.completed = false;
    }
}