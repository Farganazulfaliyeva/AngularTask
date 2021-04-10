export class Model{
    items;

    constructor(){
        this.items = [
               new TodoItem("Angular"),
        ];
    }
}

export class TodoItem{
    desc;

    constructor(desc){
        this.desc=desc;
    }
}