var Application = function(){
return{

init : function(){

document.getElementById('addTask').onclick=function() {
var taskList=[];
 taskList.push(document.getElementById("newTask").value)
var newTask= document.createElement("input");
newTask.type="checkbox";
newTask.className="delete";
newTask.value=document.getElementById("newTask").value;
newTask.setAttribute("id",document.getElementById("newTask").value+2)
document.getElementById("todoList").appendChild(newTask);

var label=document.createElement("label");
label.htmlFor=document.getElementById("newTask");
   label.setAttribute("id",document.getElementById("newTask").value)
 label.appendChild(document.createTextNode(document.getElementById("newTask").value));
    document.getElementById("todoList").appendChild(label);
    var newLine=document.createElement("br");
    newLine.setAttribute("id",document.getElementById("newTask").value+4)
    document.getElementById("todoList").appendChild(newLine);
 taskList=document.getElementById("todoList").innerHTML;

document.getElementById("delete").onclick=function(){
removeTask();
}
}

function removeTask(){
var deleteTask=document.getElementsByClassName("delete");
for(i=0;i<deleteTask.length;i++){
 if ((deleteTask[i].checked)) {
 todoList.removeChild(document.getElementById(deleteTask[i].value+4));
 todoList.removeChild(document.getElementById(deleteTask[i].value));
 todoList.removeChild(document.getElementById(deleteTask[i].value+2));
}
}
}
}
};
};