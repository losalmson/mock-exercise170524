import { Todo } from "../ts/models/todo";

describe("test creating new todos", () => {
    test("it should call create HTML", () => { 
        const todo: Todo[] = [];
        const todoText: string = "Lorem";
    //Assign 
        document.body.innerHTML = `
     <ul id="todos"></ul>`;
       
    
    
    //Act
    createNewHtml(todo, todoText);
    //Assert
    });

});