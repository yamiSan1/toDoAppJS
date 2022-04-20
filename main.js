// function submit() {
//   let taskName = document.getElementById("taskName").value;
//   let category = document.getElementById("category").value;
//   let duration = document.getElementById("duration").value;
//   let begin = document.getElementById("begin").value;
//   let end = document.getElementById("end").value;
//   if (taskName && category && duration && begin && end) {
//     function task(taskName, category, duration, begin, end) {
//       this.taskName = taskName;
//       this.category = category;
//       this.duration = duration;
//       this.begin = begin;
//       this.end = end;
//     }
//   }
//   let b = document.getElementById("bod");
//   let newTask = new task(taskName, category, duration, begin, end);

//
//
//   let listItem1 = document.createElement("li");
//   listItem1.innerText = newTask.category;
//   let listItem2 = document.createElement("li");
//   listItem2.innerText = newTask.duration;
//   let listItem3 = document.createElement("li");
//   listItem3.innerText = newTask.begin;
//   let listItem4 = document.createElement("li");
//   listItem4.innerText = newTask.end;
//
//   ul.appendChild(listItem0);
//   ul.appendChild(listItem1);
//   ul.appendChild(listItem2);
//   ul.appendChild(listItem3);
//   ul.appendChild(listItem4);

//
// }

function submit() {
  let values = document.getElementsByClassName("value");
  let b = document.getElementById("bod");
  n = values.length;
  let ul = document.createElement("ul");
  if (b.textContent == "Tasks not found") {
    let para = document.querySelector("p");
    b.removeChild(para);
  }
  ul.className = "listTasks";
  let checkbox = document.createElement("input");
  checkbox.className = "check";
  checkbox.type = "checkbox";
  checkbox.style.width = "15px";
  checkbox.style.height = "15px";
  checkbox.style.marginTop = "15px";
  ul.appendChild(checkbox);
  for (let val of values) {
    let listItem = document.createElement("li");
    listItem.textContent = val.value;
    ul.appendChild(listItem);
  }
  b.appendChild(ul);
}

function removeTask() {
  let checkboxs = document.getElementsByClassName("check");
  let n = checkboxs.length;
  let tasks = document.getElementsByClassName("listTasks");
  for (let i = 0; i < n; i++) {
    if (checkboxs[i].checked) {
      tasks[i].remove();
      i--;
      n--;
    }
  }
}

var quoteArray = ["To Do App 2022 | All Rights Reserved"];
var textPosition = 0;
var speed = 100;
typewriter = () => {
  document.querySelector("#footer").innerHTML =
    quoteArray[0].substring(0, textPosition) + "<span>\u25AE</span>";

  if (textPosition++ != quoteArray[0].length) setTimeout(typewriter, speed);
};

window.addEventListener("load", typewriter);
