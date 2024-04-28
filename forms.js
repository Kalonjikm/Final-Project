var listNum = 1;

var listLength = 0;


var addTodo = () =>{
    //query selector for input
    const todoInput = document.querySelector("#todoInput").value;
    console.log(todoInput);
    
    //create new li element
    var li = document.createElement("li");
    li.setAttribute("class", "li");
    li.innerHTML = todoInput;
    li.style.fontSize = "15px";
    
    //cappend li to the html section
    const section = document.querySelector("#list");
    section.appendChild(li);
    
    //create a button for marking done
    var crossButton = document.createElement('button');
    crossButton.setAttribute('type', 'button');
    crossButton.setAttribute('id', 'cross');
    crossButton.textContent = "Mark Done";
    crossButton.style.margin = "5px";
    li.appendChild(crossButton);
    
    //cross out todo item when cross button clicked
    crossButton.addEventListener('click', function(){
        li.setAttribute('class', 'clicked');
        li.style.textDecoration = "line-through";
    });

    //create button for deleting list item
    var delButton = document.createElement('button');
    delButton.setAttribute('type', 'button');
    delButton.textContent = "Delete ToDo";
    li.appendChild(delButton);

    //delete list item when delete button clicked
    delButton.addEventListener('click', function(){
        li.remove();
    });
};
                            
                            
                            
document.querySelector("form").addEventListener("submit", function(event){
    console.log('List Item Added');
    event.preventDefault();
    addTodo();
    todoInput.value = "";
    listLength += 1;
    console.log("list length: " + listLength);
    listNum += 1;
});
                            
