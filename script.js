// this is for functinality
const inputBox = document.getElementById("inputBox");

// this is also for functinality
const listContainer = document.getElementById("listContainer");


// this function is for the button in website 
function addTask(){
  if(inputBox.value === ''){
      alert('you must write something!');
  }else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);     
  }
  inputBox.value = "";
  saveData();
}


// this is to cheak and uncheak the task
listContainer.addEventListener("click", function(e){
  if(e.target.tagname === "LI"){
    e.target.classList.toggle("checked");
  }
   else if (e.target.tagname === "SPAN"){
    e.target.parentElemnet.remove();
  }
},false);


// this is so that the browser saves the work which we have added
function saveData(){
  localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();