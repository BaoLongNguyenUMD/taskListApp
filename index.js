var addTaskBtn = document.getElementById("addTaskBtn");


var tasks = new Array(),
    tasknum = 1;

addTaskBtn.addEventListener("click", function() {
    var taskToAdd = document.getElementById("addTask").value;
    var taskID = "tasknum" + tasknum++;
    document.getElementById("taskList").innerHTML += "<li class=\"task\"" + " id=\"" + taskID + "\">" + taskToAdd + "</li>";
    document.getElementById(taskID).addEventListener("click", function() {
        document.getElementById(taskID).className = "completedTask";
    });
    document.getElementById("addTask").value = "";
});