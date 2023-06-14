const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("You must write Something!");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    savedata()
}
listContainer.addEventListener("click", function(m){
    if(m.target.tagName === "LI"){
        m.target.classList.toggle("checked");
        savedata()
    }
    else if(m.target.tagName ==="SPAN"){
        m.target.parentElement.remove();
        savedata()
    }
},false);
function savedata(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();