document.getElementById("btn").addEventListener("click", getData);
let arr = [];
function getData() {
  let data = document.getElementById("task");
  arr.push(data.value);
  localStorage.setItem("tasks", JSON.stringify(arr));

  const item = document.createElement("h3");
  item.innerHTML = data.value;
  document.body.appendChild(item);

  console.log(JSON.parse(localStorage.getItem("tasks")));
}
