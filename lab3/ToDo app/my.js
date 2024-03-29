var taskList = document.getElementsByTagName("LI");
for(let i =0; i<taskList.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    taskList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
for(let i = 0; i< close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector("ul");
list.addEventListener("click", function(ev){
    if(ev.target.tagName === "LI" && document.querySelectorAll("ul > li")){
        ev.target.classList.toggle("checked");
    }
}, false);

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("add-task-input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === ""){
        alert("Write something!");
    } else {
        document.getElementById("tasks").appendChild(li);
    }
    document.getElementById("add-task-input").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for(let i = 0; i< close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}