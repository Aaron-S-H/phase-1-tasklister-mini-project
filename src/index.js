document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskBtn = document.getElementById("new-task-description");
    buildTask(taskBtn.value);
    form.reset();
  });
});
function buildTask(task) {
  let p = document.createElement("p");
  let btn = document.createElement("button");
  btn.addEventListener("click", handleDelete);
  btn.textContent = "x";
  p.textContent = `${task} `;
  p.appendChild(btn);
  document.querySelector("#list").appendChild(p);
  let menu = document.createElement("select");
  p.appendChild(menu);
  menu.innerHTML += `<option value="BLANK"></option>
<option value="ASAP">ASAP</option>
<option value="soon">SOON</option>
<option value="whenever">WHENEVER</option>`;
}
const dropDown = document.getElementsByTagName("select");
const task = dropDown.children;
if (task.value === "ASAP") {
  task.style.color = "red";
} else if (task.value === "SOON") {
  task.style.color = "yellow";
} else if (task.value === "WHENEVER") {
  task.style.color = "green";
} else {
  task.style.color = "black";
};

function handleDelete(e) {
  e.target.parentNode.remove();
}
