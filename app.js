var app = angular.module("todoApp",[]);

app.controller("TodoCtrl",TodoCtrl);

function TodoCtrl(){
    this.editMode = false;

    this.todos = [
        "Learn Angular",
        "Practice Example web development",
        "Learn Java",
        "Learn Python"
    ];
    this.addTodo = function(){
      //console.log("Add is clicked");
        this.todos.push(this.todo);
        this.todo="";    
    };

    this.editList = function(){
       this.editMode = !this.editMode;
    }

    this.deleteTodo = function(index){
        this.todos.splice(index,1);
    }
}
